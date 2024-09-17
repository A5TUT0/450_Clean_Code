let Library = [
  { i: 1, n: "Der alte Mann und das Meer", p: 10.5 },
  { i: 2, n: "Moby Dick", p: 12.3 },
  { i: 3, n: "1984", p: 8.5 },
];

function getBookById(books, id) {
  for (let book of books) {
    if (book.i == id) {
      return book;
    }
  }
}

function addBook(books, name, price) {
  let maxId = 0;
  for (let book of books) {
    if (book.i > maxId) maxId = book.i;
  }
  books.push({ i: maxId + 1, n: name, p: price });
}

function listBooks(books) {
  for (let book of books) {
    return `${book.n} - ${book.p}€`;
  }
}

console.log(listBooks(Library));
console.log(getBookById(Library, 2));
addBook("Fahrenheit 451", 9.2);
console.log(Library);
