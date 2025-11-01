function Book(title, author, isLoan=false) {
    this.title = title;
    this.author = author;
    this.isLoan = isLoan;

    this.toLend = function () {
        if (!this.isLoan) {
            this.isLoan = true;
            return `${this.title} se ha prestado.`;
        } else {
            return `${this.title} se encuentra en prestamo.`;
        }
    }
}

const book1 = new Book('Nuestra Guerra Ajena', 'Germán Castro Caycedo');
console.log(book1.isLoan);
console.log(book1.toLend()); 
console.log(book1.isLoan);

console.log();
const book2 = new Book('Nuestra Guerra Ajena', 'Germán Castro Caycedo');
console.log(book1.isLoan);
console.log(book1.toLend());