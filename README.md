# odin-library

## **Overview**
This project is a simple **Book Library App** built to consolidate knowledge of **CSS Grid Layout** and **JavaScript classes**. It allows users to add books with details like title, author, shelf category, rating, and review. The app dynamically renders book cards using JavaScript and follows the **MVC (Model-View-Controller) pattern** for better separation of concerns.

## **Features**
- Add books with title, author, shelf, rating, and review.  
- Dynamically render book cards using JavaScript.  
- Maintain a list of books in a **Model class** and update the UI via **event listeners**.  
- Utilize **CSS Grid** for layout and structuring the book cards.  
- Manage UI interactions with **JavaScript classes**.  

## **Technologies Used**
- **HTML, CSS (Grid Layout)** for structuring and styling the UI.  
- **JavaScript (ES6+ classes)** for data management and UI interactions.  

## **How It Works**
1. Users enter book details in a form.  
2. The `Model` stores book data and notifies listeners when changes occur.  
3. The `View` handles DOM manipulation and rendering of book cards.  
4. The `Controller` manages user interactions and updates the `Model`.  
5. The UI updates dynamically when books are added.  

## **Future Improvements**
- Implement **local storage** to save books persistently.  
- Add a **delete function** for book removal.  
- Improve **rating display** with graphical stars.  

## **Setup & Usage**
1. Clone or download the repository.  
2. Open `index.html` in a browser.  
3. Add books using the form and see them displayed dynamically.  
