const mongoose = require('mongoose');

const Hotel = mongoose.model("Hotel",{
    nom: { type: String, required: true },
    lieux: { type: String, required: true },
    prix: { type: Number, required: true },
    note: { type: Number, required: true } ,
    client: [{ type: mongoose.Schema.Types.ObjectId, ref: "Client"}]
});

module.exports = Hotel;