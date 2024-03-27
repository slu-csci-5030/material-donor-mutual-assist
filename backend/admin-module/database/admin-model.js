const Sequelize = require('sequelize');
const db = require('./database-setup'); // Import the database connection

const Admin = db.define('admin', {
  username: {
    type: Sequelize.STRING, // Change the attribute to 'username'
    allowNull: false,
    unique: true, // Make it unique
  },
  password: {
    type: Sequelize.STRING, // Add a 'password' attribute
    allowNull: false,
  },
  role: {
    type: Sequelize.ENUM('admin', 'user'), // Add a 'role' attribute with predefined values
    allowNull: false,
    defaultValue: 'user', // Default value is 'user'
  },
  isActive: {
    type: Sequelize.BOOLEAN, // Add an 'isActive' attribute
    allowNull: false,
    defaultValue: true, // Default value is 'true'
  },
});

module.exports = Admin;
