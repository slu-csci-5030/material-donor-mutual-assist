var express = require('express');
var router = express.Router();

let donorsList = [
<<<<<<< HEAD
  { id: 1, name: 'Sri', email_id: 'srinivas@gmail.com', phone_no: '314343207',address: '2210 Palestra Dr, St. Louis, MO'},
  { id: 2, name: 'Siri' ,email_id: 'siri@gmail.com', phone_no: '314343207',address: '2210 Palestra Dr, St. Louis, MO'}
=======
  { id: 1, name: 'Manohar', email_id: 'yrl@gmail.com', phone_no: '31487977656',address: '231 N Vandeventer St Louis, MO'},
  { id: 2, name: 'john' ,email_id: 'john@gmail.com', phone_no: '3147678999',address: '32 WestEnd Terrace Appartments, St. Louis, MO'}
>>>>>>> b02a10912fbcd4d04552db0707698714247af623
]; 


router.get('/', function(req, res, next) {
  res.json(donorsList);
});


module.exports = router;