const { v4: uuidv4 } = require('uuid');
const members = require('../api/members')

const newMemberController = (req, res) => {
    const newMember = {
        "id": uuidv4(),
        "name": req.body.name,
        "email": req.body.email,
        "isActive": true
      }

      if(members.some((member) => member.email == req.body.email)){
        return res.json({error: "There is a Member with that Email"});
      } 

      members.push(newMember);
      res.redirect('../');
};




  module.exports = newMemberController;