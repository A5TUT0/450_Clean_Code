let library = [
  { id: 1, title: 'Der alte Mann und das Meer', cost: 10.5 },
  { id: 2, title: 'Moby Dick', cost: 12.3 },
  { id: 3, title: '1984', cost: 8.5 },
];

function getBookById(books, id) {
  for (let book of books) {
    if (book.id == id) {
      return book;
    }
  }
}

function addBook(books, name, price) {
  let maxId = 0;
  for (let book of books) {
    if (book.id > maxId) maxId = book.id;
  }
  return books.push({ id: maxId + 1, title: name, cost: price });
}

function listBooks(books) {
  for (let book of books) {
    return `${book.title} - ${book.cost}€`;
  }
}

console.log(listBooks(library));
console.log(getBookById(library, 2));
addBook('Fahrenheit 451', 9.2);
console.log(library);
