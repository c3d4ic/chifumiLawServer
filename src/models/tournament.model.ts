import { model } from "mongoose";

const mongoose = require('mongoose');

const tournamentSchema = mongoose.Schema(
    {
        "name": {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('tournament',tournamentSchema)