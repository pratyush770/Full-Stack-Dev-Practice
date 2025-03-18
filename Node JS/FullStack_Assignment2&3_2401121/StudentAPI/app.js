const express = require('express');
const connectDB = require('./database');
const studentRoutes = require('./routes');

const app = express();

connectDB();  // connect to MongoDB

app.use(express.json());  // middleware to parse JSON request bodies

app.use('/api', studentRoutes);  // use student routes

app.get('/', (req, res) => {  // default route
    res.send('Server is running...');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
