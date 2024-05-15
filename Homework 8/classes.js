/**
 * Class representing a Book.
 */
class Book {
  /**
   * Create a Book.
   * @param {string} title - The title of the book.
   * @param {string} author - The author of the book.
   * @param {string} ISBN - The ISBN of the book.
   * @param {number} price - The price of the book.
   * @param {boolean} availability - The availability of the book.
   */
  constructor(title, author, ISBN, price, availability) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.price = price;
    this.availability = availability;
  }
}

/**
 * Class representing a FictionBook, which extends the Book class.
 */
class FictionBook extends Book {
  /**
   * Create a FictionBook.
   * @param {string} title - The title of the book.
   * @param {string} author - The author of the book.
   * @param {string} ISBN - The ISBN of the book.
   * @param {number} price - The price of the book.
   * @param {boolean} availability - The availability of the book.
   * @param {string} genre - The genre of the fiction book.
   */
  constructor(title, author, ISBN, price, availability, genre) {
    super(title, author, ISBN, price, availability);
    this.genre = genre;
  }
}

/**
 * Class representing a NonFictionBook, which extends the Book class.
 */
class NonFictionBook extends Book {
  /**
   * Create a NonFictionBook.
   * @param {string} title - The title of the book.
   * @param {string} author - The author of the book.
   * @param {string} ISBN - The ISBN of the book.
   * @param {number} price - The price of the book.
   * @param {boolean} availability - The availability of the book.
   * @param {string} subject - The subject of the non-fiction book.
   */
  constructor(title, author, ISBN, price, availability, subject) {
    super(title, author, ISBN, price, availability);
    this.subject = subject;
  }
}

/**
 * Class representing a User.
 */
class User {
  /**
   * Create a User.
   * @param {string} name - The name of the user.
   * @param {string} email - The email of the user.
   * @param {string} userId - The unique user ID.
   */
  constructor(name, email, userId) {
    this.name = name;
    this.email = email;
    this.userId = userId;
  }
}

/**
 * Class representing a Cart.
 */
class Cart {
  /**
   * Create a Cart.
   */
  constructor() {
    this.books = [];
  }

  /**
   * Add a book to the cart.
   * @param {Book} book - The book to be added to the cart.
   */
  addBook(book) {
    if (book.availability) {
      this.books.push(book);
    } else {
      console.log(`The book "${book.title}" is not available.`);
    }
  }

  /**
   * Remove a book from the cart by ISBN.
   * @param {string} ISBN - The ISBN of the book to be removed.
   */
  removeBook(ISBN) {
    this.books = this.books.filter((book) => book.ISBN !== ISBN);
  }

  /**
   * Calculate the total price of the books in the cart.
   * @returns {number} - The total price of the books.
   */
  calculateTotalPrice() {
    return this.books.reduce((total, book) => (total += book.price), 0);
  }
}

/**
 * Class representing an Order.
 */
class Order {
  /**
   * Create an Order.
   * @param {User} user - The user who placed the order.
   * @param {Book[]} books - The books included in the order.
   */
  constructor(user, books) {
    this.user = user;
    this.books = books;
    this.totalPrice = this.calculateTotalPrice();
  }

  /**
   * Calculate the total price of the books in the order.
   * @returns {number} - The total price of the books.
   */
  calculateTotalPrice() {
    return this.books.reduce((total, book) => (total += book.price), 0);
  }
}

module.exports = { Book, FictionBook, NonFictionBook, User, Cart, Order };
