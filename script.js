function Book(title, author, userRating, shelf, review) {
    this.id = Math.random().toString(16).slice(2)
    this.title = title;
    this.author = author;
    this.userRating = userRating;
    this.shelf = shelf;
    this.review = review;
    this.addRow = function() {
        //Grabs table from document and adds contents of this book as a new row
        const booksTable = document.getElementById("books-table");
        const newRow = document.createElement("tr");
        newRow.classList.add("table-row");
        newRow.setAttribute("id", `${this[title]}-review`)
        for(let key of Object.keys(this)){
            if(typeof(this[key]) !== "function" && this[key] !== this.id){
                let newField = document.createElement("td");
                newField.classList.add("field");
                newField.textContent = this[key];
                newRow.appendChild(newField);
            }
        }
        booksTable.appendChild(newRow);
    }
    this.deleteRow = function() {
        //Removes this book from row on the table
        const booksTable = document.getElementById("books-table");
        const thisRow = document.getElementById(`${this.title}-review`);
        booksTable.removeChild(thisRow);
    }
}

const myLibrary = [];

const example1  = new Book(
    'My Next Life as a Villainess: All Routes Lead to Doom! Volume 4',
    'Yamaguchi, Satoru',
    4,
    'Read',
    'This was a good book. :)'
)

const example2 = new Book(
    'The War of the Flowers',
    'Williams, Tad',
    5,
    'Read',
    'This was also a good book.'
)

myLibrary.push(example1, example2);

for(let book of myLibrary){
    book.addRow();
}

const addBookBtn = document.getElementById("add-book-btn");
const addBookModal = document.querySelector("#add-book-modal")
addBookBtn.addEventListener("click", () => {
    addBookModal.showModal();
});

const modalCloseBtn = document.querySelector("#modal-close-btn");
modalCloseBtn.addEventListener("click", () => {
    addBookModal.close();
})

const addBookForm = document.querySelector("#add-book-form");
addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    inputValues = []
    const inputFields = document.querySelectorAll(".modal__form-input");
    inputFields.forEach((inputField) => {
        inputValues.push(inputField.value);
    })
    addedBook = new Book(...inputValues);
    addedBook.addRow();
    addBookModal.close();
})

