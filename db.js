const moognoose = require('mongoose');

const connectDB = async () => {
    try{
        await moognoose.connect("mongodb+srv://patelrishi00789:11032004@cluster0.7p7o9.mongodb.net/E-commerce")
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;