"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statisticsSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: false },
    serie: { type: String, required: false },
    Points: { type: Number, required: true },
    Games: { type: Number, required: true },

});

module.exports = mongoose.model("statistics", statisticsSchema);