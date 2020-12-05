
function shelfBook(book, shelf) {
  if(shelf.length < 3){
    shelf.unshift(book)
  }
}

function unshelfBook(book, shelf) {
  shelf.splice(1, 1)
}

function listTitles(fantasyShelf) {
  var list = "";
  list += `${fantasyShelf[0].title}, ${fantasyShelf[1].title}, ${fantasyShelf[2].title}`
  return list
}

function searchShelf(shelfArray, title) {
  var result = false;
  for(var i = 0; i < shelfArray.length; i++){
    console.log(shelfArray[i].title, title)
    if(shelfArray[i].title === title){
      result = true
    }
  }
  return result
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
