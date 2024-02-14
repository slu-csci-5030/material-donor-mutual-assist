var express = require('express');
var router = express.Router();
const donations = [
  { id: 1, name: 'Alice', donations: 'Laptop', Quantity: '1'},
  { id: 2, name: 'Robby', donations: 'Microphone', Quantity: '1'},
]; //will be replaced with real database connection
/* GET donations listing. */
router.get('/', function(req, res, next) {
  res.json(donations);
});
 
// all other operations can be implemented here


module.exports = router;