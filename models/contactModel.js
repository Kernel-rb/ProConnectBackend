const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone number"],
        unique: true
    }
},
    {
        timestamps: true // bach ykoun fi kol document date creation w date update
    });

const Contact = mongoose.model('Contact', schema);

module.exports = Contact;
