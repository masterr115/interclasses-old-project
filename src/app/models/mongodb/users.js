"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountsSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: false },
    username: { type: String, required: true },
    password: { type: String, required: true },
    Name: { type: String, required: true },
    Serie: { type: String, required: true },
    admin: { type: Boolean, required: false }
});

module.exports = mongoose.model("accounts", accountsSchema);