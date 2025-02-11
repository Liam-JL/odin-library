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
    constructor() {
        this.shelves = ["All Shelves", "Finished"]
        this.books = [];
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
    }

    handleAddModalCloseBtn() {
        this.view.addModal.close();
    }

}

const appModel = new Model();
const appView = new View();
const appController = new Controller(appModel, appView);