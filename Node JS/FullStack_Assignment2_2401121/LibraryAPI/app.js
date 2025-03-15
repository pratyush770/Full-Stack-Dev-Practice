const express = require('express');
const connectDB = require('./database');
const bookRoutes = require('./routes');

const app = express();

connectDB();  // connect to MongoDB

app.use(express.json());  // middleware to parse JSON request bodies

app.use('/api', bookRoutes);  // use student routes

app.get('/', (req, res)=> {  // default route
    res.send("Server is running");
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
