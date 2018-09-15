var mongoose = require('mongoose');

// Use ES6 Promises for mongoose
mongoose.Promise = global.Promise;

// Set environment variables
var config = process.env.NODE_ENV;

if (config === 'production') {
  // Using mongoose to connect to MLAB database (Create new database single node free and create new user and set name and password)
  const username = process.env.MONGO_USER;
  const password = process.env.MONGO_PW;
  // mongoose.connect(`mongodb://${username}:${password}@ds163681.mlab.com:63681/mongo-email`);  
} else {
  mongoose.connect('mongodb://localhost:27017/mongo-email'), {useMongoClient: true, useNewUrlParser: true};
}

// Signal connection
mongoose.connection.once('open', function () {
  console.log('Connection has been made');
}).on('error', function (error) {
  console.log('Connect error', error);
}).on('disconnected', function(){
  console.log('Connection disconnected');
})


module.exports = mongoose;