
//required services  ....
const { issueBook, bookDeposit } = require("../../db/services/library/transaction");

// issue book ..........................
exports.issueBook = async (req, res) => {
    try {
        let response = await issueBook(req);
        if (response.status) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(400).json(String(error));
    }
};


// book deposite ....................................
exports.bookDeposit = async (req, res) => {
    try {
        let response = await bookDeposit(req);
        if(response.status){
            res.status(200).json(response);
        }else{
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(400).json(String(error));
    }
}
