
function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
}

function addBook(library, book) {
  library.shelves[book.genre].push(book)
}

function checkoutBook(library, book, genre) {
  var result = `Sorry, there are currently no copies of ${book} available at the ${library.name}`
  for(var i = 0; i < library.shelves[genre].length; i ++){
    if(library.shelves[genre][i].title === book){
      library.shelves[genre].splice(i, 1)
      result = `You have now checked out ${book} from the ${library.name}`
    }
  }
  return result
}
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
