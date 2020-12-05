class Librarian {
  constructor(name, library) {
    this.name = name,
    this.library = library
    this.greet = `Hello, ${name}!`
    console.log(this.greet)
  }
}

module.exports = Librarian;
