require('dotenv').config();
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');

const app = express();
connectDB();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});