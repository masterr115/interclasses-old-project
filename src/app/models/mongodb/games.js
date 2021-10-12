"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gamesSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    rooms: { type: String, required: true },
    date: { type: Number, required: true },
    img: { type: String, required: true },
    winner: { type: String, required: false, default: 'Ninguém' },
    location: { type: String, required: false, default: 'Não declaraddo' },
    prize: { type: String, required: false, default: 'Não declarado' }
});

module.exports = mongoose.model("games", gamesSchema);