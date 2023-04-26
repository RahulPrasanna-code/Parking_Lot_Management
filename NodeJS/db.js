const mongoose = require('mongoose');
// Replace the uri string with your connection string.
const uri = "mongodb+srv://Yashwanth:yashwanth@cluster0.dztk1.mongodb.net/test?retryWrites=true&w=majority"

getConnection = async () => {
  try {
    await mongoose.connect(
      uri
    );
    console.log('Connection to DB Successful');
  } catch (err) {
    console.log('Connection to DB Failed'+JSON.stringify(err,undefined,2));
  }
};

getConnection()

module.exports = mongoose;
