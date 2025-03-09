const asyncHandler=require('express-async-handler')
const Contact=require("../models/contactModel")
//@desc Get all contact
//@route Get /api/contacts
//@access public
const getContacts=asyncHandler(async(req,res)=>{

    res.status(200).json(Contact)
})
//@desc Get  contact
//@route Get /api/contacts/:id
//@access public
const getContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
        
    }
    res.status(200).json(contact)
})
//@desc create new contact
//@route post /api/contacts
//@access public
const CreateContact=asyncHandler(async(req,res)=>{
    console.log("request body is",res.body)
    const {name,email,phone}=res.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error("All fields are mandotory"); 
    }
    const contact=await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contact)
})
//@desc Update all contact
//@route put /api/contacts/:id
//@access public
const UpdateContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");  
    }
    const updatedContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedContact)
})
//@desc delete contact for id
//@route delete /api/contacts/:id
//@access public
const DeleteContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");  
    }
    await Contact.remove();
    res.status(200).json(contact)
})

module.exports={getContact,getContacts,CreateContact,UpdateContact,DeleteContact}