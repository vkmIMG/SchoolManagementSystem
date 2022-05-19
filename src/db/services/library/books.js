// required Models.............................
const moment = require("moment");
const BookModel = require("../../models/library/Book");

// add book ......................
const addBook = async (req) => {
    try {
        let { name, about, author, publisher, publishDate, authority, price, bookImage, authorImage, noOfPage, language, isbnNo, genre } = req.body;
        console.log("req.body", req.body);
        //validation of fields
        if (!name) {
            return {
                message: "Required Book Name",
                status: false,
                data: {},
            }
        };
        if (!author) {
            return {
                message: "Required Author Name",
                status: false,
                data: {},
            }
        };
        if (!publisher) {
            return {
                message: "Required Publisher Name",
                status: false,
                data: {},
            }
        };
        if (!publishDate) {
            return {
                message: "Required Published Date",
                status: false,
                data: {},
            }
        };
        if (!authority) {
            return {
                message: "Required Authority Name",
                status: false,
                data: {},
            }
        };
        if (!price) {
            return {
                message: "Required Price of books",
                status: false,
                data: {},
            }
        };
        // if (!bookImage) {
        //     return {
        //         message: "Required image of books",
        //         status: false,
        //         data: {},
        //     }
        // };
        // if (!authorImage) {
        //     return {
        //         message: "image of authority",
        //         status: false,
        //         data: {},
        //     }
        // };
        if (!noOfPage) {
            return {
                message: "Required of Pages",
                status: false,
                data: {},
            }
        };
        if (!language) {
            return {
                message: "Required Language of Book",
                status: false,
                data: {},
            }
        };
        if (!isbnNo) {
            return {
                message: "Required ISBN Number of Book",
                status: false,
                data: {},
            }
        };
        if (!genre) {
            return {
                message: "Required Genre Number of Book",
                status: false,
                data: {},
            }
        };
        if (publishDate && moment(publishDate, 'DD/MM/yyyy', true).isValid() === false) {
            return {
                message: "Enter valid publish date format",
                status: false,
                data: {},
            }
        }
        //query  ...
        let alreadyExits = await BookModel.findOne({ isbnNo });
        if (alreadyExits && alreadyExits !== {}) {
            return {
                message: "Book Already Exists",
                status: false,
                data: alreadyExits,
            }
        }
        let bookData = BookModel({ name, about, author, publisher, publishDate, authority, price, bookImage, authorImage, noOfPage, language, isbnNo, genre });
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
        let data = await BookModel.find();
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

module.exports = { addBook, getBook };