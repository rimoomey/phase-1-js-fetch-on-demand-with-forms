const init = () => {
  const submitSearch = document.querySelector("#search-form");

  submitSearch.addEventListener("submit", searchEvent);
};

function searchEvent(event) {
  event.preventDefault();
  let ID = event.target.children[1].value;

  fetch("http://localhost:3000/movies")
    .then((response) => response.json())
    .then((data) => {
      const target = data.find((data) => data.id === parseInt(ID));
      displayBook(target);
    });
}

function displayBook(book) {
    const displayArea = document.querySelector('#movie-details')

    if(book != undefined) {
        displayArea.children[0].textContent = `Title: ${book.title}`;
        displayArea.children[1].innerHTML = "Summary: <br><br>" + book.summary;
    }
}

document.addEventListener("DOMContentLoaded", init);
