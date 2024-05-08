var express = require('express');
var router = express.Router();

let donorsList = [
  { id: 1, name: 'Sri', email_id: 'srinivas@gmail.com', phone_no: '314343207',address: '2210 Palestra Dr, St. Louis, MO'},
  { id: 2, name: 'Siri' ,email_id: 'siri@gmail.com', phone_no: '314343207',address: '2210 Palestra Dr, St. Louis, MO'}
]; 


router.get('/', function(req, res, next) {
  res.json(donorsList);
});


module.exports = router;