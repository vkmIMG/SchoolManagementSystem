
//required package .................
const mongoose = require("mongoose");
const moment = require("moment");

//required DB model
const libraryTransactionModel = require("../../models/library/transaction");
const { response } = require("express");
// issue book ..............................................
exports.issueBook = async (req) => {
    try {
        let { userId, code } = req.body;
        if (userId && mongoose.Types.ObjectId.isValid(userId)) {
            if (code) {
                let avability = await libraryTransactionModel.findOne({ code });
                if (avability && avability !== {}) {
                    return {
                        message: "Book is Already Issued",
                        status: false,
                        data: avability,
                    }
                };
                // let currentDate = moment().format("DD-MM-YYYY");
                let dateOfIssue = moment().format("YYYY-MM-DD HH:MM:SS");
                let data = libraryTransactionModel({ userId, code, dateOfIssue, });
                let response = await data.save();
                return {
                    message: "book issued successfully",
                    status: true,
                    data: response,
                };
            };
            return {
                message: "required book code",
                status: false,
                data: {}
            };
        };
        return {
            message: "invalid userid",
            status: false,
            data: {},
        };
    } catch (error) {
        return {
            message: String(error),
            status: true,
            data: {},
        };
    };
};

// book deposit .........................................
exports.bookDeposit = async (req) => {
    try {
        let { code } = req.body;
        if (code) {
            let data = await libraryTransactionModel.findOne({ code });
            if (data && data !== {}) {
                if (data.dateOfReturn) {
                    return {
                        message: "Book Already Deposited",
                        status: false,
                        data,
                    };
                };
                let dateOfReturn = moment().format("YYYY-MM-DD HH:MM:SS");
                let dateOfIssue = data.dateOfIssue;
                let daysdiff = moment(dateOfReturn).diff(moment(dateOfIssue), 'days');
                let totalFine = 0;
                if (daysdiff > 15) {
                    totalFine = (daysdiff - 15) * 5;
                };
                let result = await libraryTransactionModel.updateOne({ code }, { dateOfReturn, totalFine });
                console.log("result data", result);
                if (result && result !== {}) {
                    return {
                        message: "book deposited Successfully",
                        status: true,
                        data: result,
                    };
                };
            };
            return {
                message: "Book is not issued yet",
                status: false,
                data: {},
            };
        };
        return {
            message: "Required Book Code",
            status: false,
            data: {},
        };
    } catch (error) {
        throw error;
    }
}