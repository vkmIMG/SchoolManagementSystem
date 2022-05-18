const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@img.i7ebc.mongodb.net/${process.env.MONGODB_DATABASE}`;

mongoose.connect(uri, (err) => {
  if (err) return err;
  console.log(`MongoDB connected to database ${process.env.MONGODB_DATABASE}`);
});
