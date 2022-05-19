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
});


const StocksModel = mongoose.model("stocks", StockSchema);
module.exports = StocksModel;