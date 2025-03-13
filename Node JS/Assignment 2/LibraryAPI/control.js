const Book = require('./book');

// create a new book (POST)
exports.createBook = async(req, res) => {
    try{
        const {id, title, author, price, publishedYear} = req.body;

        if(!id || !title || !author || !price || !publishedYear) {
            return res.status(400).json({error: 'All fields are required'});
        }

        const newBook = new Book({id, title, author, price, publishedYear})
        await newBook.save();

        res.status(201).json({ message: 'Book created successfully', book: newBook });

    } catch(error) {
        console.error('Error creating book', e);
        res.status(500).json({error: "Internal server error"});
    }
};

// get all books (GET)
exports.getAllBooks = async(req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch(error) {
        console.error('Error creating book', error);
        res.status(500).json({error: "Internal server error"});
    }
};

// get a book by id (GET)
exports.getBookById = async(req, res) => {
    try {
        const bookId = parseInt(req.params.id);
        if(isNaN(bookId)) {
            return res.status(400).json({error: "Invalid Book ID"})
        }

        const book = await Book.findOne({id: bookId});

        if (!book) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json(book);
    } catch(error) {
        console.error('Error creating book', error);
        res.status(500).json({error: "Internal server error"});
    }
};

// update a book by id (PUT)
exports.updateBookById = async(req, res) => {
    try {
        const bookId = parseInt(req.params.id);
        if(isNaN(bookId)) {
            return res.status(400).json({error: "Invalid Book ID"})
        }

        const updatedBook = await Book.findOneAndUpdate(
            {id: bookId}, 
            {$set: req.body},
            {new: true, runValidators: true}
        );

        if (!updatedBook) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json({message: 'Book updated successfully', book: updatedBook});
    } catch(error) {
        console.error('Error creating book', error);
        res.status(500).json({error: "Internal server error"});
    }
};

// delete a book by id (DELETE)
exports.deleteBookById = async(req, res) => {
    try {
        const bookId = parseInt(req.params.id);
        if(isNaN(bookId)) {
            return res.status(400).json({error: "Invalid Book ID"})
        }

        const result = await Book.deleteOne(
            {id: bookId}
        );

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json({message: 'Book deleted successfully'});
    } catch(error) {
        console.error('Error creating book', error);
        res.status(500).json({error: "Internal server error"});
    }
};