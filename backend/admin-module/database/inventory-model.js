const Sequelize = require('sequelize');
const db = require('./database-setup'); // Import the database connection

const Inventory = db.define('inventory', {
  itemName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  itemDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  itemId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
  },
  receivedDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedByAdminId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

module.exports = Inventory;