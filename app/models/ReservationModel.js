const mongoose = require('mongoose');

const Reservation = mongoose.model("Reservation", {
    idClient: { type: String, required: true },
    idHotel: { type: String, required: true }
    // idClient: { type: mongoose.Schema.Types.ObjectId, ref: "Client"},
    // idHotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel"}

});

module.exports = Reservation;