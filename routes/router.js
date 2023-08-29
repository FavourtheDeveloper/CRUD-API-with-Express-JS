const express = require('express');
const router = express.Router();

const members = require('../api/members')
const addNewMember = require('../controllers/newMember')

// get all members
router.get("/", (req, res) => {
    res.render('index', {title: "Members", members})
  });

// add new member  
  
  router.post("/", addNewMember);

  // get a single member with the id
  
  router.get('/:id', (req, res) => {
      const result = members.filter((member) => member.id == req.params.id);
      res.send(result)
  })

  // get members api

  router.get('/api', (req, res) => {
    res.json(members);
  })
  

  module.exports =  router;