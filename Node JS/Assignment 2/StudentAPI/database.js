const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/student';  // uri

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);  // connects to mongodb using uri
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
