const db = require('../config/connection');
const { User } = require('../models/User');
const { Trip } = require('../models/Trip');

const userData = require('./userData.json');
const tripData = require('./tripData.json');

db.once('open', async() => {
  await User.deleteMany({});

  const users = await User.insertMany(userData);

  console.log('Users are seeded.');
  process.exit(0);
})

db.once('open', async() => {
  await Trip.deleteMany({});

  const trips = await Trip.insertMany(tripData);

  console.log('Trips are seeded.');
  process.exit(0);
})
