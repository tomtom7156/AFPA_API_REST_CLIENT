const ClientModel = require('../models/ClientModel.js');
const ReservationModel = require('../models/ReservationModel.js');
const HotelModel = require('../models/HotelModel.js');
const mongoose = require('mongoose');

function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validateString(str) {
    const re = /[^A-Za-z]+/;
    return re.test(String(str).toLowerCase());
}
function validatePhone(num) {
    const re = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    return re.test(String(num).toLowerCase());
}

let ClientController = {
    find: async (req, res) => {
        return await ClientModel.findById({_id: req.params.id}, (err, client) => {
            if (err) return res.status(500).send(err);
            else if (!client) return res.status(404).send("Le client sélectionné na pas put être trouvé.\nVeuillez vérifier la valeur saisie.");
            res.send(client);
        }).clone();
    },
    all: async (req, res) => {
        return await ClientModel.find((err, clients) => {
            if (err) return res.status(500).send(err);
            res.send(clients);
        }).clone();
    },
    create: async (req, res) => {
        if (isObjEmpty(req.body)) return res.status(400).send("Aucune valeur saisie.");
        try {
            await ClientModel.validate(req.body)
        } catch (err) {
            err instanceof mongoose.Error.ValidationError;
            Object.keys(err.errors);
        };
        if (!validateEmail(req.body.email)) return res.status(500).send("L'adresse e-mail indiquée n'est pas conforme.");
        else if (validateString(req.body.nom)) return res.status(500).send("Le nom indiquée n'est pas conforme.\nLes caractères spéciaux, les nombres et les espaces ne sont pas autorisés.");
        else if (validateString(req.body.prenom)) return res.status(500).send("Le prénom indiquée n'est pas conforme.\nLes caractères spéciaux, les nombres et les espaces ne sont pas autorisés.");
        else if (!validatePhone(req.body.num)) return res.status(500).send("Le numéro de téléphone indiqué n'est pas conforme à la norme française.");
        let newClient = new ClientModel(req.body);
        return await newClient.save((err) => {
            if (err) return res.status(500).send(err);
            res.send("Le client a bien été ajouter.");
        });
    },
    update: async (req, res) => {
        if (isObjEmpty(req.body)) return res.status(400).send("Aucune valeur saisie.");
        else if (req.body.email && !validateEmail(req.body.email)) return res.status(500).send("L'adresse e-mail indiquée n'est pas conforme.");
        else if (req.body.nom && validateString(req.body.nom)) return res.status(500).send("Le nom indiquée n'est pas conforme.\nLes caractères spéciaux, les nombres et les espaces ne sont pas autorisés.");
        else if (req.body.prenom && validateString(req.body.prenom)) return res.status(500).send("Le prénom indiquée n'est pas conforme.\nLes caractères spéciaux, les nombres et les espaces ne sont pas autorisés.");
        else if (req.body.num && !validatePhone(req.body.num)) return res.status(500).send("Le numéro de téléphone indiqué n'est pas conforme à la norme française.");
        return await ClientModel.findByIdAndUpdate({_id: req.params.id}, req.body,(err, client) => {
            if (err) return res.status(500).send(err);
            else if (!client) return res.status(404).send("Le client sélectionné na pas put être trouvé.\nVeuillez vérifier la valeur saisie.");
            res.send("Le client sélectionné a bien été mise à jour.");
        }).clone();
    },
    delete: async (req, res) => {
        return await ClientModel.findByIdAndDelete({_id: req.params.id}, (err, client) => {
            if (err) return res.status(500).send(err);
            else if (!client) return res.status(404).send("Le client sélectionné na pas put être trouvé.\nVeuillez vérifier la valeur saisie.");
            res.send("Le client sélectionné a bien été supprimée.");
        }).clone();
    },
    hotelByClient: async (req, res) => {
        const hotelByClient = await ClientModel.findById({_id: req.params.id}, (err) => {
            if (err) return res.status(500).send(err);
        }).populate('hotel').clone();
        res.send(hotelByClient);
    }
}

module.exports = ClientController;

