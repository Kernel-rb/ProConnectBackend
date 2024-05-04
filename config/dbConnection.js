require('dotenv').config();
const moongose = require('mongoose');
const connectDB = async () => {
    try {
        const conn = await moongose.connect(process.env.MONGO_URI);
        console.log(
            `
        MongoDB Connected: ${conn.connection.host} , 
        the name of the database is ${conn.connection.name} , 
        the port is ${conn.connection.port}
        `);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDB;