const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  code: {
    type: String,
    // required:true,
    default: "",
  },
  name: {
    type: String,
    required: true,
    default: "",
  },
  about: {
    type: String,
    required: true,
    default: "",
  },
  author: {
    type: String,
    required: true,
    default: "",
  },
  publisher: {
    type: String,
    required: true,
    default: "",
  },
  publishDate: {
    type: String,
    required: true,
    default: ""
  },
  authority: {
    type: String,
    required: true,
    default: "",
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  bookImage: {
    type: String,
    // required: true,
    default: "",
  },
  authorImage: {
    type: String,
    // required: true,
    default: "",
  },
  noOfPage: {
    type: Number,
    required: true,
    default: 0,
  },
  language: {
    type: String,
    required: true,
    default: "",
  },
  isbnNo: {
    type: String,
    required: true,
    default: "",
  },
  genre: {
    type: String,
    required: true,
    default: "",
  }
});

const BookModel = mongoose.model("books", BookSchema);
module.exports = BookModel;