class Librarian {
  constructor(name, library) {
    this.name = name,
    this.library = library
    this.greetPatron = function(name, timeOfDay) {
      if(timeOfDay) {
        return `Good morning, ${name}!`
      } else {
        return `Hello, ${name}!`
      }
    }
    this.findBook = function(bookName) {
      for(var keys in this.library){
        for(var jeys in this.library[keys]){
          if(this.library[keys][jeys][0].title === bookName){
            return `Yes, we have ${bookName}`
          } else {
            return `Sorry, we do not have ${bookName}`
          }
        }
      }
    }
    this.calculateLateFee = function(num) {
      var lateFee = 0;
      for(var i = 0; i <= num; i++){
        lateFee += .25
      }
      return Math.round(lateFee)
    }
  }
}

module.exports = Librarian;
