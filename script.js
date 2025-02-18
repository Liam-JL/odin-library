class Book {
    constructor(title, author, shelf = "All Shelves", rating = 0, review) {
        this.title = title;
        this.author = author;
        this.shelf = shelf;
        this.rating = rating;
        this.review = review;
    }
}

class Model {
    #shelves = [];
    #books = [];

    constructor() {
        this.#shelves = ["All Shelves", "Finished"]
    }

    addShelf(shelf) {
        this.#shelves.push(shelf);
    }

    getShelves() {
        return [...this.#shelves];
    }

    addBook(book) {
        this.#books.push(book)
    }

    getBooks() {
        return [...this.#books];
    }




}

class View {
    constructor() {
        //Cashe
        this.sidebarBtn = document.getElementById("sidebarBtn");
        this.sidebar = document.getElementById("sidebar");
        this.sidebarCloseBtn = document.getElementById("sidebarCloseBtn");
        this.addBooksBtn = document.getElementById("addBooksBtn");
        this.addModal = document.getElementById("addModal");
        this.addModalCloseBtn = document.getElementById("addModalCloseBtn");
        this.addModalSubmitBtn = document.getElementById("addModalSubmitBtn");
        this.addBookForm = document.getElementById("addBookForm");
        this.formInputFields = document.querySelectorAll(".add-modal__form-input")
    }

    onSidebarBtn(handler) {
        this.sidebarBtn.addEventListener("click", handler);
    }

    onSidebarCloseBtn(handler) {
        this.sidebarCloseBtn.addEventListener("click", handler);
    }

    onAddBooksBtn(handler) {
        this.addBooksBtn.addEventListener("click", handler);
    }

    onAddModalCloseBtn(handler) {
        this.addModalCloseBtn.addEventListener("click", handler);
    }

    onAddModalSubmitBtn(handler) {
        this.addModalSubmitBtn.addEventListener("click", handler);
    }

    onAddBookFormSubmit(handler) {
        this.addBookForm.addEventListener("submit", handler);
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        //Bind UI Events
        this.view.onSidebarBtn(this.handleSidebarBtn.bind(this));
        this.view.onSidebarCloseBtn(this.handleSidebarCloseBtn.bind(this));
        this.view.onAddBooksBtn(this.handleAddBooksBtn.bind(this));
        this.view.onAddModalCloseBtn(this.handleAddModalCloseBtn.bind(this));
        this.view.onAddModalSubmitBtn(this.handleAddModalSubmitBtn.bind(this));
        this.view.onAddBookFormSubmit(this.handleAddBookFormSubmit.bind(this));

        //Add Listeners
    }

    //Controller methods
    handleSidebarBtn() {
        this.view.sidebar.classList.add("active");
    }

    handleSidebarCloseBtn() {
        this.view.sidebar.classList.remove("active");
    }

    handleAddBooksBtn() {
        this.view.addModal.showModal(); 
        //Add all shelf options to shelf select element
    }

    handleAddModalCloseBtn() {
        this.view.addModal.close();
    }

    handleAddModalSubmitBtn() {
        console.log("Modal Submit Button clicked")
    }

    handleAddBookFormSubmit(event) {
        event.preventDefault();
        let inputValues = [];
        [...this.view.formInputFields].forEach((field) => {inputValues.push(field.value)});
        const newBook = new Book(...inputValues);
        this.model.addBook(newBook);
    }



}

const appModel = new Model();
const appView = new View();
const appController = new Controller(appModel, appView);
