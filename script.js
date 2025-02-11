class Model {
    constructor() {
        this.shelves = ["All Shelves", "Finished"]
    }
}

class View {
    constructor() {
        //Cashe
        this.sidebarBtn = document.getElementById("sidebarBtn");
        this.sidebar = document.getElementById("sidebar");
        this.sidebarCloseBtn = document.getElementById("sidebarCloseBtn");
    }

    onSidebarBtn(handler) {
        this.sidebarBtn.addEventListener("click", handler);
    }

    onSidebarCloseBtn(handler) {
        this.sidebarCloseBtn.addEventListener("click", handler);
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        //Bind UI Events
        this.view.onSidebarBtn(this.handleSidebarBtn.bind(this));
        this.view.onSidebarCloseBtn(this.handleSidebarCloseBtn.bind(this));


        //Add Listeners
    }

    //Controller methods
    handleSidebarBtn() {
        this.view.sidebar.classList.add("active");
    }

    handleSidebarCloseBtn() {
        this.view.sidebar.classList.remove("active");
    }

}

const appModel = new Model();
const appView = new View();
const appController = new Controller(appModel, appView);