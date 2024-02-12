
const testData = [
  {
    // Data for donor "Alice"
    donorId: 1,
    donations: [
      {
        id: 1, // Unique ID for this donation
        item: "Books",
        date: "2024-02-05",
      },
      {
        id: 2, // Unique ID for this donation
        item: "Clothes",
        date: "2024-01-20",
      },
    ],
  },
  {
    // Data for donor "Bob"
    donorId: 2,
    donations: [
      {
        id: 3, // Unique ID for this donation
        item: "Toys",
        date: "2024-02-12",
      },
      {
        id: 4, // Unique ID for this donation
        item: "Food",
        date: "2024-01-30",
      },
    ],
  },
];

// Additional test data examples for edge cases, invalid data, etc.

module.exports = testData;
