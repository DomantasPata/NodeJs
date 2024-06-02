const booksEndpoint = "http://192.168.0.103:3000/book";

const tBody = document.querySelector("tbody");

const form = document.querySelector("form");
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const genreInput = document.querySelector("#genreInput");
const priceInput = document.querySelector("#priceInput");
const quantityInput = document.querySelector("#quantityAvailableInput");

async function getBooks() {
  const response = await fetch(booksEndpoint);
  const data = await response.json();

  return data;
}

function generateTbody(books) {
  tBody.innerHTML = "";

  const bookTrs = books.map((book) => {
    const tr = document.createElement("tr");

    const tdTitle = document.createElement("td");
    tdTitle.textContent = book.title;

    const tdAuthor = document.createElement("td");
    tdAuthor.textContent = book.author;

    const tdPrice = document.createElement("td");
    tdPrice.textContent = book.price;

    const tdGenre = document.createElement("td");
    tdGenre.textContent = book.genre;

    const tdquantityAvailable = document.createElement("td");
    tdquantityAvailable.textContent = book.quantityAvailable;

    const tdDelete = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", async () => {
      const response = await fetch(booksEndpoint + `/${book._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const ph = await getBooks();
        generateTbody(ph);
      }
    });

    tdDelete.append(deleteButton);

    tr.append(
      tdTitle,
      tdAuthor,
      tdPrice,
      tdGenre,
      tdquantityAvailable,
      tdDelete
    );

    return tr;
  });

  tBody.append(...bookTrs);
}

const books = await getBooks();
console.log(books);

generateTbody(books);

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;
  const genre = genreInput.value;
  const price = priceInput.value;
  const quantityAvailable = quantityAvailableInput.value;

  const response = await fetch(booksEndpoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      author,
      price,
      genre,
      quantityAvailable,
    }),
  });

  if (response.ok) {
    const books = await getBooks();

    generateTbody(books);
  }
});
