const mongoose = require("mongoose");

const StockSchema = mongoose.Schema({
  bookid: {
    type: mongoose.Types.ObjectId,
    required: true,
    default: null,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
}, {
  timestamps: true,
  versionKey: false
});


const StocksModel = mongoose.model("library_stocks", StockSchema);
module.exports = StocksModel;