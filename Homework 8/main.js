const { Book, FictionBook, NonFictionBook, User, Cart, Order } = require('./classes.js');

// Instantiate Book objects
const book1 = new FictionBook("The Great Gatsby", "F. Scott Fitzgerald", "1234567890", 10.99, true, 'Novel');
const book2 = new FictionBook("1984", "George Orwell", "1234567891", 8.99, true, 'Dystopian');
const book3 = new FictionBook("To Kill a Mockingbird", "Harper Lee", "1234567892", 12.99, true, 'Novel');
const book4 = new FictionBook("The Catcher in the Rye", "J.D. Salinger", "1234567893", 9.99, false, 'Novel'); // Unavailable
const book5 = new FictionBook("Moby-Dick", "Herman Melville", "1234567894", 11.99, true, 'Epic');
const book6 = new FictionBook('The Lord of the Rings: Fellowship of the Ring', 'J. R. R. Tolkien', '1234567895', 12.99, true, 'Fantasy');
const book7 = new FictionBook('The Two Towers ', 'J. R. R. Tolkien', '1234567896', 12.99, true, "Fantasy");
const book8 = new FictionBook('The Return of the King', 'J. R. R. Tolkien', '1234567897', 12.99, true, 'Fantasy',);
const book9 = new FictionBook('The Hobbit', 'J. R. R. Tolkien', '1234567898', 13.99, true, 'Fantasy',);
const book10 = new FictionBook('The Silmarillion', 'J. R. R. Tolkien', '1234567899', 15.99, true, 'Fantasy',);
const book11 = new NonFictionBook('Sapiens', 'Yuval Noah Harari', '1234567900', 14.99, true,'History');
const book12 = new NonFictionBook('Educated', 'Tara Westover', '1234567901', 13.99, true, 'Memoir');


// Instantiate User objects
const user1 = new User("Tomas Leguizamon", "tomas@example.com", "u001");
const user2 = new User("Alexandrina Poida", "alexandrina@example.com", "u002");
const user3 = new User('Agustin Fogliatto', 'agustin@example.com', 'u003');


// Create Cart instances and add books
const cart1 = new Cart();
cart1.addBook(book1);
cart1.addBook(book2);
cart1.addBook(book3);
cart1.addBook(book11);


const cart2 = new Cart();
cart2.addBook(book5);
cart2.addBook(book2);
cart2.addBook(book12);


const cart3 = new Cart()
cart3.addBook(book6)
cart3.addBook(book7);
cart3.addBook(book8);
cart3.addBook(book9);
cart3.addBook(book10);


// Display Cart contents and total price
console.log("Cart 1 Books:", cart1.books);
console.log("Cart 1 Total Price:", cart1.calculateTotalPrice());

console.log("Cart 2 Books:", cart2.books);
console.log("Cart 2 Total Price:", cart2.calculateTotalPrice());

console.log('Cart 3 Books:', cart3.books);
console.log('Cart 3 Total Price:', cart3.calculateTotalPrice());

// Create Order instances
const order1 = new Order(user1, cart1.books);
const order2 = new Order(user2, cart2.books);
const order3 = new Order(user3, cart3.books);


// Display Order details
console.log("Order 1 Details:");
console.log("User:", order1.user);
console.log("Books:", order1.books);
console.log("Total Price:", order1.totalPrice);

console.log("Order 2 Details:");
console.log("User:", order2.user);
console.log("Books:", order2.books);
console.log("Total Price:", order2.totalPrice);

console.log('Order 3 Details:');
console.log('User:', order3.user);
console.log('Books:', order3.books);
console.log('Total Price:', order3.totalPrice);
