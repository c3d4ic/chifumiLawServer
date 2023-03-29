import { model } from "mongoose";

const mongoose = require('mongoose');

const roundSchema = mongoose.Schema(
    {
        "actionP1": {
            type: Number,
            required: true
        },
        "actionP2": {
            type: Number,
            required: true
        }
    },
)

const Round = mongoose.model('Round',roundSchema)
export default Round