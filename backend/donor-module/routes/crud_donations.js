var express = require('express');
var router = express.Router();

const donors = [
  {
    id: 1,
    name: "Alice",
    email: "abc@abcd.com",
    phone: "2121212121",
    address_line_1: "12, some street",
    donations: [
      { item: "Books", date: "2024-02-05" },
      { item: "Clothes", date: "2024-01-20" }
    ]
  },
  // ... other donors with donations
];

/* GET all donations for a specific donor */
router.get('/:donorId/donations', function(req, res, next) {
  const donorId =parseInt(req.params.donorId);
  console.log(donorId);
  const donor = donors.find(d => d.id === donorId);

  if (!donor) {
    res.status(404).json({ message: "Donor not found" });
  } else {
    res.json({
      name: donor.name,
      donations: donor.donations
    });
  }
});

// Add other CRUD operations for donations as needed (e.g., create, update, delete)

module.exports = router;
