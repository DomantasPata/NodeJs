import Book from "../models/books.js";

export async function getBooks(req, res) {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getBookById(req, res) {
  const { id } = req.params;

  try {
    const book = await book.findById(id);
    res.json(phone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addBook(req, res) {
  const { title, author, genre, price, quantityAvailable } = req.body;

  if (!title || !author || !genre || !price || !quantityAvailable) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  const newBook = new Book({
    title,
    author,
    genre,
    price,
    quantityAvailable,
  });
  try {
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateBookById(req, res) {
  const { id } = req.params;
  const { title, author, genre, price, quantityAvailable } = req.body;

  try {
    const book = await Book.findById(id);
    if (!Book) {
      res.status(404).json({ message: `Book by id: ${id} not found` });
      return;
    }
    book.title = title;
    book.author = author;
    book.genre = genre;
    book.price = price;
    book.quantityAvailable = quantityAvailable;
    await book.save();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteBookById(req, res) {
  const { id } = req.params;
  try {
    const response = await Book.findByIdAndDelete(id);
    if (!response) {
      res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
