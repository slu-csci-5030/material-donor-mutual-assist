// mockData.js
const fs = require('fs');
const path = require('path');

const mockUserData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'mockUserData.json')));

function getMockUserData() {
  return mockUserData;
}

module.exports = { getMockUserData };
