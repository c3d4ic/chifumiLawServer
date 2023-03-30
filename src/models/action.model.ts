import { model } from "mongoose";

const mongoose = require('mongoose');

const actionSchema = mongoose.Schema(
    {
        "action": {
            type: Number,
            required: true
        }
    },
)

const Action = mongoose.model('Action',actionSchema)
export default Action