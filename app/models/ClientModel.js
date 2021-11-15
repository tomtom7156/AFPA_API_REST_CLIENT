const mongoose = require('mongoose');

const Client = mongoose.model("Client", mongoose.Schema ({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true },
    num: { type: String, required: true } ,
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel"}
}));

module.exports = Client;