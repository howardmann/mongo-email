let mongoose = require('mongoose')
let Email = require('../model/email')

// Seeder using async await
let seedDatabase = async function () {
  let john = {
    email: 'john@email.com',
    country: 'AU',
    seats: 42,
    campaign: 'ppc'
  }

  let bill = {
    email: 'bill@email.com',
    country: 'US',
    seats: 13,
    campaign: 'fb'
  }

  await Email.create(john)
  await Email.create(bill)
};

// Drop DB then seed
mongoose.connection.collections.emails.drop(function () {
  seedDatabase()
  // mongoose.connection.close()
});
