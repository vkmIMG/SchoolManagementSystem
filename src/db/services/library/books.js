//packages ...........................
const moment = require("moment");
const mongoose = require("mongoose");
const reader = require("xlsx");

// required DB Models.............................
const BookModel = require("../../models/library/Book");

// add book ......................
const addBook = async (req) => {
    try {
        
        let { name, about, author, publisher, publishDate, authority, price, bookImage, authorImage, noOfPage, language, isbnNo, genre } = req.body;
        
        //validation of fields
        if (!name) {
            return {
                message: "Required Book Name",
                status: false,
                data: {},
            };
        };
        if (!author) {
            return {
                message: "Required Author Name",
                status: false,
                data: {},
            };
        };
        if (!publisher) {
            return {
                message: "Required Publisher Name",
                status: false,
                data: {},
            };
        };
        if (!publishDate) {
            return {
                message: "Required Published Date",
                status: false,
                data: {},
            };
        };
        if (!authority) {
            return {
                message: "Required Authority Name",
                status: false,
                data: {},
            };
        };
        if (!price) {
            return {
                message: "Required Price of books",
                status: false,
                data: {},
            };
        };
        if (!bookImage) {
            return {
                message: "Required image of books",
                status: false,
                data: {},
            };
        };
        if (!authorImage) {
            return {
                message: "image of authority",
                status: false,
                data: {},
            };
        };
        if (!noOfPage) {
            return {
                message: "Required of Pages",
                status: false,
                data: {},
            };
        };
        if (!language) {
            return {
                message: "Required Language of Book",
                status: false,
                data: {},
            };
        };
        if (!isbnNo) {
            return {
                message: "Required ISBN Number of Book",
                status: false,
                data: {},
            };
        };
        if (!genre) {
            return {
                message: "Required Genre Number of Book",
                status: false,
                data: {},
            };
        };
        if (publishDate && moment(publishDate, 'DD/MM/yyyy', true).isValid() === false) {
            return {
                message: "Enter valid publish date format",
                status: false,
                data: {},
            };
        };

        //query  ...
        let alreadyExits = await BookModel.findOne({ isbnNo });
        if (alreadyExits && alreadyExits !== {}) {
            return {
                message: "Book Already Exists",
                status: false,
                data: alreadyExits,
            }
        }
        let code = String(Date.now());
        let bookData = BookModel({ code, name, about, author, publisher, publishDate, authority, price, bookImage, authorImage, noOfPage, language, isbnNo, genre });
        let data = await bookData.save();
        return {
            message: "Added Successfully",
            status: true,
            data: data,
        }
    } catch (error) {
        return {
            message: String(error),
            status: false,
            data: {},
        }
    }
};

// get book .....................
const getBook = async (req) => {
    try {
        let data = await BookModel.find({}, { _id: 1, name: 1, author: 1, language: 1, genre: 1 });
        if (data && Array.isArray(data) && data.length > 0) {
            return {
                message: "Book Fetched Successfully",
                status: true,
                data: data,
            }
        };
        return {
            message: "Books Not Found",
            status: false,
            data: {},
        }

    } catch (error) {
        return {
            message: String(error),
            status: false,
            data: {},
        }
    }
};

// Book Details ..................
const bookDetail = async (req) => {
    try {
        let bookId = req.body.id;
        if (bookId && mongoose.Types.ObjectId.isValid(bookId)) {
            let response = await BookModel.findOne({ _id: bookId });
            if (response && response !== {}) {
                return {
                    message: "Book Details Fetched Successfully",
                    status: true,
                    data: response,
                }
            }
        };
        return {
            message: "invalid Book ID",
            status: false,
            data: {},
        }
    } catch (error) {
        return {
            message: String(error),
            status: false,
            data: {},
        }
    }
};

//search book .............................
const searchBook = async (req) => {
    try {
        let { name } = req.body;
        if (name) {
            let result = await BookModel.find({ name: { $regex: name, $options: '$i' } });
            if (result && Array.isArray(result) && result.length > 0) {
                return {
                    message: "Book Found",
                    status: true,
                    data: result,
                };
            };
            return {
                message: "No Book found",
                status: false,
                data: {}
            };
        };
        return {
            message: "required book name",
            status: false,
            data: {},
        }
    } catch (error) {
        return {
            message: String(error),
            status: false,
            data: {}
        }
    }
};

// add book bulk ............................
const addBookBulk = async (req) => {
    try {
        if (req.file.filename) {
            const file = reader.readFile(req.file.filename);
            const sheets = file.SheetNames;
            console.log("Sheets //////////", sheets);
            let collectionSave = [];
            for (let i = 0; i < sheets.length; i++) {
                const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
                console.log("temp", temp);
                for (let i of temp) {
                    let bookAvail = await BookModel.findOne({ isbnNo: i.isbnNo });
                    if (bookAvail && bookAvail !== {}) {
                        continue;
                    } else {
                        let code = String(Date.now());
                        console.log("codeee .................", code);
                        let collect = new files({
                            code: code,
                            name: i.name,
                            about: i.about,
                            author: i.author,
                            publisher: i.publisher,
                            authority: i.authority,
                            price: i.price,
                            bookImage: i.bookImage,
                            authorImage: i.authorImage,
                            noOfPage: i.noOfPage,
                            language: i.language,
                            isbnNo: i.isbnNo,
                            genre: i.genre,
                        });
                        let books = await collect.save();
                        collectionSave.push(books);
                    };
                };
            };
            return {
                message: "Books saved succesfully",
                status: true,
                data: collectionSave,
            };
        };
        return {
            message: "No file found",
            status: false,
            data: {},
        }
    } catch (error) {
        return {
            message: String(error),
            status: false,
            data: {},
        };
    };
}
module.exports = { addBook, getBook, bookDetail, searchBook, addBookBulk };