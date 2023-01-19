const db = require('../config/connection');
const { User } = require('../models/User');

const userData = require('./userData.json');

db.once('open', async() => {
  await User.deleteMany({});

  const users = await User.insertMany(userData);

  console.log('Users are seeded.');
  process.exit(0);
})

