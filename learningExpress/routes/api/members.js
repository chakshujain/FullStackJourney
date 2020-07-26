const express = require('express')
const router = express.Router()
const uuid = require('uuid')
const members = require('../../Members')

// Getting all members
router.get('/',(req,res)=>{
    res.json(members)
})

// Getting a single member
router.get('/:id',(req,res)=>{
    let found = members.some((member)=> member.id === parseInt(req.params.id));
    if(found){
        res.json(members.filter((member)=> member.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({msg:`Member with id ${req.params.id} not found`})
    }
})

// Creating a member
router.post('/',(req,res)=>{
    const newMember = {
        id:uuid.v4(),
        name:req.body.name,
        email:req.body.email
    }
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg:"Please include name and email"})
    }
    members.push(newMember);
    res.json(members);
    // res.redirect('/')
})

// Updating a member
router.put('/:id',(req,res)=>{
    let found = members.some((member)=> member.id === parseInt(req.params.id));
    if(found){
        const updMember = req.body;
        members.forEach(member=>{
            if(member.id=== parseInt(req.params.id)){
                member.name = updMember.name? updMember.name: member.name;
                member.email = updMember.email? updMember.email: member.email;  
                res.json({msg:"Member updated",members:members})
            }
        })
    }
    else{
        res.status(400).json({msg:`Member with id ${req.params.id} not found`})
    }
})

// Deleting a member
router.delete('/:id',(req,res)=>{
    let found = members.some((member)=> member.id === parseInt(req.params.id));
    if(found){
        res.json({msg:"Member deleted",members:members.filter((member)=> member.id !== parseInt(req.params.id))});
    }
    else{
        res.status(400).json({msg:`Member with id ${req.params.id} not found`})
    }
})

module.exports = router;