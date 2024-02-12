var express = require('express');
var router = express.Router();

let donorsList = [
  { id: 1, name: 'shiva', email_id: 'wer@gmail.com', phone_no: '563767',address: 'gfest'},
  { id: 2, name: 'krishna' ,email_id: 'qas@gmail.com', phone_no: '3147678999',address: 'sgfsges'}
]; 


router.get('/', function(req, res, next) {
  res.json(donorsList);
});


module.exports = router;