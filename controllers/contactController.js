const asyncHandler = require("express-async-handler");

//=== Get All Contacts ===
//=== api/contacts/ ===
//=== Public ===
const getContact = asyncHandler (async (req, res) => {
    try {
       
    } catch (error) {
        throw new Error(error);
    }
});

// === Get Single Contact ===
// === api/contacts/:id ===
// === Public ===
const getSingleContact = asyncHandler (async (req, res) => {
    try {
        res.status(200).send({ message: `Contact with id ${req.params.id}` });
    } catch (error) {
        throw new Error(error);
    }
    
});
// === Create a new Contact ===
// === api/contacts/new-user ===
// === Private ===
const createContact = asyncHandler (async (req, res) => {
    try {
        
        console.log("the body request : ", req.body);
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            res.status(400);
            throw new Error("Please fill all the fields");
        }
    } catch (error) {
        throw new Error(error);
    }


});
// === Update a Contact ===
// === api/contacts/update/:id ===
// === Private ===
const updateContact = asyncHandler (async (req, res) => {
   try {
        res.status(200).send({ message: `Update contact with id ${req.params.id}` });
   } catch (error) {
         throw new Error(error);
    }
});

// === Delete a Contact ===
// === api/contacts/delete/:id ===
// === Private ===
const deleteContact = asyncHandler (async (req, res) => {
    try {
        res.status(200).send({ message: `Delete contact with id ${req.params.id}` });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    getContact,
    getSingleContact,
    createContact,
    updateContact,
    deleteContact
};
