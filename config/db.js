const mongoose = require("mongoose");

//connect to db
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDb");
  } catch (error) {
    console.log(`${error.message}`);
  }
};

module.exports = connectDB;
