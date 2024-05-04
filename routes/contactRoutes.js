const express = require('express');
const router = express.Router();
const { getContact, getSingleContact, createContact, updateContact, deleteContact } = require('../controllers/contactController');

router.get('/', getContact);
router.get('/:id', getSingleContact);
router.post('/new-user', createContact);
router.put('/update/:id', updateContact);
router.delete('/delete/:id', deleteContact);


module.exports = router;