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
    #listeners = new Set();
    #shelves = [];
    #books = [];

    constructor() {
        this.#shelves = ["All Shelves", "Finished"];
    }

    #notifyListeners() {
        for (const listener of this.#listeners) {
            listener(this);
        }
    }

    addListener(listener) {
        this.#listeners.add(listener);
    }

    addShelf(shelf) {
        this.#shelves.push(shelf);
    }

    getShelves() {
        return [...this.#shelves];
    }

    addBook(book) {
        this.#books.push(book);
        this.#notifyListeners();
    }

    getBooks() {
        return [...this.#books];
    }

    removeBook(i){
        this.#books.splice(i);
        this.#notifyListeners();
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
        this.addBookForm = document.getElementById("addBookForm");
        this.formInputFields = document.querySelectorAll(".add-modal__form-input");
        this.cardList = document.getElementById("cardList");
        this.deleteBooksBtn = document.getElementById("deleteBooksBtn");
        this.deleteModal = document.getElementById("deleteModal");
    }

    //Create DOM object for static rendering
    createCard(book) {
        const card = document.createElement("div");
        card.classList.add("card");

        //Card Header
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card__header");

        const cardTitle = document.createElement("h2");
        cardTitle.classList.add("card__title");
        cardTitle.textContent = book.title;

        // Assemble the header
        cardHeader.appendChild(cardTitle);
        card.appendChild(cardHeader);

        //Author info row
        const authorInfoRow = document.createElement("div");
        authorInfoRow.classList.add("card__author-info-row");

        const authorLabel = document.createElement("span");
        authorLabel.classList.add("card__author-label");
        authorLabel.textContent = "Author:";

        const author = document.createElement("span");
        author.classList.add("card__author");
        author.textContent = book.author;

        //Assemble author row
        authorInfoRow.appendChild(authorLabel);
        authorInfoRow.appendChild(author);
        card.appendChild(authorInfoRow);

        //shelf
        const shelf = document.createElement("div");
        shelf.classList.add("shelf-item");
        shelf.textContent = book.shelf;

        //Append shelf
        card.appendChild(shelf);

        //Rating
        const rating = document.createElement("div");
        rating.classList.add("card__rating");
        const stars = "*".repeat(book.rating); //TODO implement cleaner looking stars
        rating.textContent = stars;

        //Append rating
        card.appendChild(rating);

        //Review //TODO implement button opens user review
        // const review = book.review;
        const reviewBtn = document.createElement("btn");
        reviewBtn.classList.add("card__review-btn");
        reviewBtn.textContent = "My Review";

        //Append review
        card.appendChild(reviewBtn);

        return card;
    }

    renderCards(model){
        this.cardList.innerHTML = ""; // Clear existing cards
        for(const book of model.getBooks()) {
            const card = this.createCard(book);
            this.cardList.appendChild(card);
        }
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

    onAddBookFormSubmit(handler) {
        this.addBookForm.addEventListener("submit", handler);
    }

    onDeleteBooksBtn(handler) {
        this.deleteBooksBtn.addEventListener("click", handler);
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
        this.view.onAddBookFormSubmit(this.handleAddBookFormSubmit.bind(this));
        this.view.onDeleteBooksBtn(this.handleDeleteBooksBtn.bind(this));

        //Add Listeners
        this.model.addListener(this.view.renderCards.bind(this.view))
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

    handleAddBookFormSubmit(event) {
        event.preventDefault();
        let inputValues = [];
        [...this.view.formInputFields].forEach((field) => {inputValues.push(field.value)});
        const newBook = new Book(...inputValues);
        this.model.addBook(newBook);
        this.view.addModal.close();
    }

    handleDeleteBooksBtn() {
        this.view.deleteModal.showModal()
        //Give books unique ID
        //Delete books through unique ID
    }
}

const appModel = new Model();
const appView = new View();
const appController = new Controller(appModel, appView);
