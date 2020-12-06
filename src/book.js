function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  var ghoulCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return ghoulCharacter
}

function saveReview(reviewsText, reviewsArray) {
  if(reviewsArray.includes(reviewsText)) {
    return
  } else {
    reviewsArray.push(reviewsText)
  }
}

function calculatePageCount(title) {
  var pageTotal = 0;
  for(var i = 0; i < title.length; i++){
    pageTotal += 20
  }
  return pageTotal
}

function writeBook(title, character, genre) {
  var bookProperties = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  }
  return bookProperties
}

function editBook(book) {
  var totalToSubtract = book.pageCount * .25
  var pageTotal = book.pageCount - totalToSubtract
  console.log(pageTotal)
  book.pageCount = pageTotal
}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
