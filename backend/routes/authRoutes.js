// auth.js
const { getMockUserData } = require('./mockData');

function authenticateUser(username, password) {
  const users = getMockUserData();
  const user = users.find(user => user.username === username && user.password === password);
  return user !== undefined;
}
