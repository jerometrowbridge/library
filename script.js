const myLibrary = [];

const cardContainer = document.querySelector(".card-container");
const btn = document.querySelector(".generate")

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = function() {
        return `<p>
        <ul>
        <li>Title: ${this.title}</li>
        <li>Author: ${this.author}</li>
        <li># of Pages: ${this.pages}</li>
        <li>Status: ${haveRead}</li></ul></p>`
    };
}

let bookOne = new Book("The Juror", "John Grisham", 200, "read");
let bookTwo = new Book("The Lord of the Rings", "JRR Tolkien", 400, "read");
let bookThree = new Book("The Sun Also Rises", "Ernest Hemingway", 150, "have not read");

function addBookToLibrary(b) {
    myLibrary.push(b);
}

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);

function getBooks(library) {
    cardContainer.innerHTML = "";
    for (const book of library) {

        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<p>${book.info()}</p>`;

        cardContainer.appendChild(card);
    }
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