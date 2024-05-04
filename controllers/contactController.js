//=== Get All Contacts ===
//=== api/contacts/ ===
//=== Public ===
const getContact = async (req, res) => {
    res.status(200).send({ message: 'All Contacts ' });
};

// === Get Single Contact ===
// === api/contacts/:id ===
// === Public ===
const getSingleContact = async (req, res) => {
    res.status(200).send({ message: `Contact with id ${req.params.id}` });
};











// === Create a new Contact ===
// === api/contacts/new-user ===
// === Private ===
const createContact = async (req, res) => {
    console.log("the body request : ", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }


};






















// === Update a Contact ===
// === api/contacts/update/:id ===
// === Private ===
const updateContact = async (req, res) => {
    res.status(200).send({ message: `Update contact with id ${req.params.id}` });
};

// === Delete a Contact ===
// === api/contacts/delete/:id ===
// === Private ===
const deleteContact = async (req, res) => {
    res.status(200).send({ message: `Delete contact with id ${req.params.id}` });
};

module.exports = {
    getContact,
    getSingleContact,
    createContact,
    updateContact,
    deleteContact
};
