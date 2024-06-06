const library = [];

// let book = {
//     title:"Harry Potter",
//     author:"J.K. Rowling",
//     published:2004,
// }

function addBook(title, author, year) {
  library.push({ title: title, author: author, published: year });
}
addBook("Harry Potter", "J.K. Rowling", 2004);
addBook("Los Juegos Del Hambre", "Susan Collins", 2008);
addBook("El Quijote", "Cervantes", 1500);

function listBooks() {
  library.forEach((book) => {
    console.log(
      `Title: ${book.title} By: ${book.author} Published: ${book.published}`
    );
  });
}

function olderBooks() {
  const oldBooks = library.filter((book) => {
    return book.published > 1900;
  });
  return oldBooks;
}
console.log(olderBooks());
