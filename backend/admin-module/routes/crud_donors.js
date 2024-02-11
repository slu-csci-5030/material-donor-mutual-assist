var express = require('express');
var router = express.Router();
const donors = [
  { id: 1, name: 'Alice', email: 'abc@abcd.com', phone: '2121212121',address_line_1: '12, some street'},
  { id: 2, name: 'Bob' ,email: 'bob@abcd.com', phone: '3232323232',address_line_1: '34, same street'},
]; //will be replaced with real database connection

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(donors);
});

// all other operations can be implemented here


module.exports = router;