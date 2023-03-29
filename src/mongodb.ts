const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGO_URL).then(() => console.log('BDD Connected!'));
    } catch (err) {
        console.error(err)
        process.exit()
    }
}

module.exports = connectDB