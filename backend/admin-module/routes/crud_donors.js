var express = require('express');
var router = express.Router();
const donors = [
  { id: 1, name: 'SaiKiran', email: 'saikiran@abcd.com', phone: '3145785541', address_line_1: '4486, western street' },
      { id: 2, name: 'Hari', email: 'hari@abcd.com', phone: '3147584578', address_line_1: '4475, western street' }
]; //will be replaced with real database connection

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(donors);
});

// all other operations can be implemented here


module.exports = router;