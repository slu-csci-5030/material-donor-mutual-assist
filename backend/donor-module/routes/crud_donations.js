var express = require('express');
var router = express.Router();
const donations = [
  { id: 1, name: 'Alice', donations: 'Laptop', Quantity: '1'},
  { id: 2, name: 'Robby', donations: 'Microphone', Quantity: '1'},
  { id: 3, name: 'Vicky', donations: 'Mobile', Quantity: '1'},
  { id: 4, name: 'Ramu', donations: 'Bicycle', Quantity: '1'},
  { id: 5, name: 'John', donations: 'Computer', Quantity: '1'},
]; //will be replaced with real database connection
/* GET donations listing. */
router.get('/', function(req, res, next) {
  res.json(donations);
});
 
// all other operations can be implemented here


module.exports = router;
