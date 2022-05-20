// package required ..............................................
const mongoose = require("mongoose");

// required DB Models.....................................................
const BookModel = require("../../models/library/Book");
const StocksModel = require("../../models/library/Stock");

exports.getStocks = async (req) => {
  try {
    const { bookid } = req.body;
    const booksData = await StocksModel.find({});
    if (booksData && Array.isArray(booksData) && booksData.length > 0) {
      return {
        message: "All Records Found",
        data: booksData,
        status: true,
      };
    } else if (bookid && mongoose.Types.ObjectId.isValid(bookid)) {
      const booksDataById = await StocksModel.findOne({
        bookid: mongoose.Types.ObjectId(bookid),
      });
      if (booksDataById && booksDataById !== {}) {
        return {
          message: "All Records Found",
          data: booksDataById,
          status: true,
        };
      }
    } else {
      return {
        message: "No Books in stock",
        status: false,
        data: {},
      };
    }
  } catch (err) {
    return {
      message: err.toString(),
      status: false,
      data: {},
    };
  }
};

exports.insertStocks = async (req) => {
  try {
    const { bookid, quantity } = req.body;
    if (bookid && mongoose.Types.ObjectId.isValid(bookid) && quantity > 0) {
      const getBookDetailBasedOnId = await StocksModel.findOne({
        bookid: mongoose.Types.ObjectId(bookid),
      });
      if (getBookDetailBasedOnId && getBookDetailBasedOnId !== {}) {
        const insertStocks = await StocksModel.updateOne(
          { bookid: mongoose.Types.ObjectId(bookid) },
          { $inc: { quantity: quantity } },
          { new: true }
        );
        console.log("insertStocks", insertStocks);
        return {
          message: "Book Details Inserted Successfully",
          status: true,
          data: insertStocks,
        };
      } else {
        const insertStocks = await StocksModel.create({
          bookid: bookid,
          quantity: quantity,
        });
        return {
          message: "Book Details Inserted Successfully",
          status: true,
          data: insertStocks,
        };
      }
    }
    return {
      message: "Enter Valid Book",
      status: false,
      data: {},
    };
  } catch (err) {
    return {
      message: err.toString(),
      status: false,
      data: {},
    };
  }
};
