var mongoose = require('mongoose');
const mongooseURI = process.env.DATABASE;

const connectToMongo = () => {
    mongoose.connect(mongooseURI).then(() => {
        console.log("Mongoose is Connected");
    }).catch((error) => {
        console.log("Mongoose is Disconnected");
        console.log(error)
    });
}

module.exports = connectToMongo;