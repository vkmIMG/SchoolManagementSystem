const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
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

module.epxorts = mongoose.model("stocks", StockSchema);
