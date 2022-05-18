const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  code:{
    type:String,
    // required:true,
    default:null,
  },
  name: {
    type: String,
    required: true,
    default: null,
  },
  about: {
    type: String,
    required: true,
    default: null,
  },
  author: {
    type: String,
    required: true,
    default: null,
  },
  publisher: {
    type: String,
    required: true,
    default: null,
  },
  publishDate: {
    type: Date,
  },
  authority: {
    type: String,
    required: true,
    default: null,
  },
  price: {
    type: Number,
    required: true,
    default: null,
  },
  bookImage: {
    type: String,
    required: true,
    default: null,
  },
  authorImage: {
    type: String,
    required: true,
    default: null,
  },
  noOfPage: {
    type: Number,
    required: true,
    default: null,
  },
  language: {
    type: String,
    required: true,
    default: null,
  },
  isbnNo: {
    type: Number,
    required: true,
    default: null,
  },
  genre:{
    type:String,
    required:true,
    default:null,
  }
});

const BookModel = mongoose.model("books", BookSchema);
module.exports = BookModel;