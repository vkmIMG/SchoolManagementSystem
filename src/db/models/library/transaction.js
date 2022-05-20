const mongoose = require("mongoose");

const libraryTranSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    dateOfIssue: {
        type: String,
        required: true,
    },
    dateOfReturn: {
        type: String,
        default: "",
    },
    totalFine: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true,
    versionKey: false,
});

const libraryTransactionModel = mongoose.model("library_transaction", libraryTranSchema);
module.exports = libraryTransactionModel;