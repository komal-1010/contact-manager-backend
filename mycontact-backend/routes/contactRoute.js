const express=require('express');
const { getContact, CreateContact, DeleteContact, getContacts, UpdateContact } = require('../controllers/contactControllers');
const router=express.Router();
router.route("/").get(getContacts).post(CreateContact)
router.route("/:id").get(getContact).put(UpdateContact).delete(DeleteContact)
module.exports=router