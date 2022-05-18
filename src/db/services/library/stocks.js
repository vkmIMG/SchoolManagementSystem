const { default: mongoose } = require("mongoose");
const StocksModel = require("../../models/library/StockModel");

exports.getStocks = async (req) => {
  try {
    const { bookid } = req.body;
    const booksData = await StocksModel.find({});

    if (bookid && mongoose.Types.ObjectId(bookid)) {
      const booksDataById = await StocksModel.findOne({ bookid: mongoose.Types.ObjectId(bookid) });
      if (booksDataById && booksDataById !== {}) {
        return {
          message: "Book",
          data: booksDataById,
          status: true
        }
      } else {
        return {
          message: "Book not available",
          data: {},
          status: false
        }
      }
    }

    if (booksData && Array.isArray(booksData) && booksData.length > 0) {
      return {
        message: "Books",
        data: booksData,
        status: true
      }
    }
    else {
      return {
        message: "No Books in stock",
        data: {},
        status: true
      }
    }
  }
  catch (err) {
    return {
      message: err.toString(),
      status: false,
      data: {}
    }
  }
};
