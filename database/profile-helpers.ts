const { Pool, Client } = require('pg');

const pool = new Pool();

const getProfileData = async (name) => {
  let err;
  try {
    var userData = await pool.query(name);
    var songData = await pool.query();
  } finally {
    return { userData, songData };
  }
};

export { getProfileData };