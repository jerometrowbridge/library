const myLibrary = [];

const cardContainer = document.querySelector(".card-container");
const btn = document.querySelector(".generate")

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = function() {
        return `
        <ul class="card-contents">
        <li class="row-title">Title: ${this.title}</li>
        <li class="row-author">Author: ${this.author}</li>
        <li class="row-pages"># of Pages: ${this.pages}</li>
        <li class="row-read">Status: ${this.haveRead}</li></ul>`
    };
}



// let bookOne = new Book("The Juror", "John Grisham", 200, "read");
// let bookTwo = new Book("The Lord of the Rings", "JRR Tolkien", 400, "read");
// let bookThree = new Book("The Sun Also Rises", "Ernest Hemingway", 150, "have not read");

function addBookToLibrary(b) {
    myLibrary.push(b);
}

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);

function getBooks(library) {
    cardContainer.innerHTML = "";
    for (let index = 0; index < myLibrary.length; index++) {
        const book = myLibrary[index];
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;
        card.innerHTML = `${book.info()}
        <button class="remove-button">Remove</button>
        <button class="read-button">Read?</button>`;

        const removeButton = card.querySelector(".remove-button");
        removeButton.addEventListener("click", () => removeBook(index));   
        
        const readButton = card.querySelector(".read-button");
        readButton.addEventListener("click", () => changeBookReadStatus(index));

        cardContainer.appendChild(card);
    }
}


function removeBook(index) {
    myLibrary.splice(index, 1);
    getBooks(myLibrary);
}

function changeBookReadStatus(index) {
    const book = myLibrary[index];
    
    if (book.haveRead === "read") {
        book.haveRead = "not read";
    } else {
        book.haveRead = "read";
    }
    getBooks(myLibrary);
}


btn.addEventListener("click", () => getBooks(myLibrary));

const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openForm")
const closeBtn = document.querySelector(".close");

console.log(modal);
console.log(openModalBtn);
console.log(closeBtn);

openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

const form = document.getElementById("bookEntryForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("book-title");
    const author = formData.get("book-author");
    const pages = formData.get("book-pages");
    const haveRead = formData.get("read-book");

    const newBook = new Book(title, author, pages, haveRead);
    myLibrary.push(newBook);
    alert("Book added!");
    modal.style.display = "none";
})

