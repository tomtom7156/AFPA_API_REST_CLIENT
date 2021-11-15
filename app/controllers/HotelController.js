const ClientModel = require('../models/ClientModel.js');
// const ReservationModel = require('../models/ReservationModel.js');
const HotelModel = require('../models/HotelModel.js');
const mongoose = require('mongoose');

function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
}
function validateString(str) {
    const re = /[^A-Za-z ]+/;
    return re.test(String(str).toLowerCase());
}
function validateNumber(num) {
    const re = /[^0-9.]+/;
    return re.test(String(num).toLowerCase());
}

let HotelController = {
    find: async (req, res) => {
        return await HotelModel.findById({_id: req.params.id}, (err, hotel) => {
            if (err) return res.status(500).send(err);
            else if (!hotel) return res.status(404).send("L'hôtel sélectionné na pas put être trouvé.\nVeuillez vérifier la valeur saisie.");
            res.send(hotel);
        }).clone();
    },
    all: async (req, res) => {
        return await HotelModel.find((err, hotels) => {
            if (err) return res.status(500).send(err);
            res.send(hotels);
        }).clone();
    },
    create: async (req, res) => {
        if (isObjEmpty(req.body)) return res.status(400).send("Aucune valeur saisie.");
        try {
            await HotelModel.validate(req.body)
        } catch (err) {
            err instanceof mongoose.Error.ValidationError;
            Object.keys(err.errors);
        };
        if (validateString(req.body.nom)) return res.status(500).send("Le nom indiquée n'est pas conforme.\nLes caractères spéciaux, les nombres et les espaces ne sont pas autorisés.");
        else if (validateString(req.body.lieux)) return res.status(500).send("Le lieux indiquée n'est pas conforme.\nLes caractères spéciaux, les nombres et les espaces ne sont pas autorisés.");
        else if (validateNumber(req.body.prix)) return res.status(500).send("Le prix indiqué n'est pas conforme.\nLes caractères, caractères spéciaux et les espaces ne sont pas autorisés.");
        else if (validateNumber(req.body.note) || req.body.note < 0 || req.body.note > 5) return res.status(500).send("Le note indiqué n'est pas conforme.\nLa note doit être comprise entre 0 et 5 (ex: 4.5)\nLes caractères et les espaces ne sont pas autorisés.");
        let newHotel = new HotelModel(req.body);
        return await newHotel.save((err, hotel) => {
            if (err) return res.status(500).send(err);
            res.send("L'hôtel a bien été ajouter.");
        });
    },
    update: async (req, res) => {
        if (isObjEmpty(req.body)) return res.status(400).send("Aucune valeur saisie.");
        else if (req.body.nom && validateString(req.body.nom)) return res.status(500).send("Le nom indiquée n'est pas conforme.\nLes caractères spéciaux, les nombres et les espaces ne sont pas autorisés.");
        else if (req.body.lieux && validateString(req.body.lieux)) return res.status(500).send("Le lieux indiquée n'est pas conforme.\nLes caractères spéciaux, les nombres et les espaces ne sont pas autorisés.");
        else if (req.body.prix && validateNumber(req.body.prix)) return res.status(500).send("Le prix indiqué n'est pas conforme.\nLes caractères, caractères spéciaux et les espaces ne sont pas autorisés.");
        else if (req.body.note && validateNumber(req.body.note) || req.body.note < 0 || req.body.note > 5) return res.status(500).send("Le note indiqué n'est pas conforme.\nLa note doit être comprise entre 0 et 5 (ex: 4.5)\nLes caractères et les espaces ne sont pas autorisés.");
        return await HotelModel.findByIdAndUpdate({_id: req.params.id}, req.body,(err, hotel) => {
            if (err) return res.status(500).send(err);
            else if (!hotel) return res.status(404).send("L'hôtel sélectionné na pas put être trouvé.\nVeuillez vérifier la valeur saisie.");
            res.send("L'hôtel sélectionné a bien été mise à jour.");
        }).clone();
    },
    delete: async (req, res) => {
        return await HotelModel.findByIdAndDelete({_id: req.params.id}, (err, hotel) => {
            if (err) return res.status(500).send(err);
            else if (!hotel) return res.status(404).send("L'hôtel sélectionné na pas put être trouvé.\nVeuillez vérifier la valeur saisie.");
            res.send("L'hôtel sélectionné a bien été supprimée.");
        }).clone();
    },
    clientsByHotel: async (req, res) => {
        const hotel = await HotelModel.findById({_id: req.params.id}, (err) => {
            if (err) return res.status(500).send(err);
        }).populate('client').clone();
        res.send(hotel.client);
    }
}

module.exports = HotelController;