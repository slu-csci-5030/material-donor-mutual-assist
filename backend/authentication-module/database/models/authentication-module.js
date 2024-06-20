const {pool} = require('../database');

const createUser = async (name, email, password) => {
  const queryText = 'INSERT INTO authentication (name, email, password) VALUES ($1, $2, $3) RETURNING *';
  const values = [name, email, password];
  try {
    const result = await pool.query(queryText, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const findUserByEmail = async (email) => {
  const queryText = 'SELECT * FROM authentication WHERE email = $1';
  const values = [email];
  try {
    const result = await pool.query(queryText, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  findUserByEmail,
};




