const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction", available: true },
    { id: 2, title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian", available: false },
    { id: 3, title: "Moby Dick", author: "Herman Melville", year: 1851, genre: "Adventure", available: true },
    { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction", available: false },
    { id: 5, title: "Brave New World", author: "Aldous Huxley", year: 1932, genre: "Dystopian", available: true }
];

// 1. Print all book titles.
console.log('--Print all book titles.--');

books.forEach(tit=>console.log(tit.title)
)
// 2. Print all books published after the year 1950.
console.log('--Print all books published after the year 1950.--');

books.filter(bok=>bok.year>1950).forEach(pub=> console.log(pub.title));

// 3. List all unavailable books.

console.log('--List all unavailable books..--');

books.filter(bok=>bok.available==false).forEach(pub=> console.log(pub.title));

// 4. Find the author of the book with the title "Moby Dick".

console.log('---Find the author of the book with the title "Moby Dick"..--');

console.log(books.find(bok=>bok.title=="Moby Dick").author);


// 5. Create a function to add a new book to the library.

console.log('---Create a function to add a new book to the library.--');

function newBook(id, title, author, year, genre, available) {
        books.push({ id, title, author, year, genre, available });
}
newBook(6, "The GoatLife", "Benyamin.", 2008, "Novel", true);
console.log(books);


// 6. Write a function to remove a book by its ID.

console.log("");

function removeObjectById(array, id) {
    return array.filter(item => item.id !== id); // Keeps all objects except the one with the matching id
}

const updatedBooks = removeObjectById(books, 2);
console.log(updatedBooks);

// 7. Create a function to update the availability status of a book.
function update(){
    books.find(bok=>bok.available==false)

 }

// 8. List all unique genres of the books in the library.
console.log('---List all unique genres of the books in the library.--');