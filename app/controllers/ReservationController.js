const ClientModel = require('../models/ClientModel.js');
const ReservationModel = require('../models/ReservationModel.js');
const HotelModel = require('../models/HotelModel.js');
const mongoose = require('mongoose');

function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
}
function validateString(str) {
    const re = /[^A-Za-z]+/;
    return re.test(String(str).toLowerCase());
}

let ReservationController = {
    find: async (req, res) => {
        return await ReservationModel.findById({_id: req.params.id}, (err, reservation) => {
            if (err) return res.status(500).send(err);
            else if (!reservation) return res.status(404).send("La réservation sélectionné na pas put être trouvé.\nVeuillez vérifier la valeur saisie.");
            res.send(reservation);
        }).clone();
    },
    all: async (req, res) => {
        return await ReservationModel.find((err, reservations) => {
            if (err) return res.status(500).send(err);
            res.send(reservations);
        }).clone();
    },
    create: async (req, res) => {
        if (isObjEmpty(req.body)) return res.status(400).send("Aucune valeur saisie.");
        try {
            await ReservationModel.validate(req.body)
        } catch (err) {
            err instanceof mongoose.Error.ValidationError;
            Object.keys(err.errors);
        };
        let newReservation = new ReservationModel(req.body);
        return await newReservation.save((err, reservation) => {
            if (err) return res.status(500).send(err);
            res.send("La réservation a bien été ajouter.");
        });
    },
    update: async (req, res) => {
        return await ReservationModel.findByIdAndUpdate({_id: req.params.id}, req.body,(err, reservation) => {
            if (err) return res.status(500).send(err);
            else if (!reservation) return res.status(404).send("La réservation sélectionné na pas put être trouvé.\nVeuillez vérifier la valeur saisie.");
            res.send("La réservation sélectionné a bien été mise à jour.");
        }).clone();
    },
    delete: async (req, res) => {
        return await ReservationModel.findByIdAndDelete({_id: req.params.id}, (err, reservation) => {
            if (err) return res.status(500).send(err);
            else if (!reservation) return res.status(404).send("La réservation sélectionné na pas put être trouvé.\nVeuillez vérifier la valeur saisie.");
            res.send("La réservation sélectionné a bien été supprimée.");
        }).clone();
    } 
}

module.exports = ReservationController;