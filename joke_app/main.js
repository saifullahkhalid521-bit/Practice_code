let countJoke = 0;
let currentJokeText = "";
let favorites = JSON.parse(localStorage.getItem('favJokes')) || []; 

// DOM Elements
const button1 = document.getElementById('btn1');
const joke = document.getElementById("joke");
const jokeCount = document.getElementById("jokeCount");
const favList = document.getElementById("favList");

// Initial render
if (jokeCount) jokeCount.innerHTML = `Jokes fetched: ${countJoke}`;
renderFavorites();

function saveToLocalStorage() {
  localStorage.setItem('favJokes', JSON.stringify(favorites));
}

button1?.addEventListener('click', () => {
  button1.disabled = true;
  joke.innerHTML = "getting your joke...";

  setTimeout(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then(response => {
        if (!response.ok) throw new Error("HTTP error!");
        return response.json();
      })
      .then(data => {
        currentJokeText = data.joke;
        const isAlreadyFav = favorites.includes(currentJokeText);

        joke.innerHTML = `
          <div id="mainJoke">${currentJokeText}</div>
          <button id="fav" ${isAlreadyFav ? 'disabled' : ''}>
            ${isAlreadyFav ? 'Added' : 'Add to Fav'}
          </button>`;

        countJoke += 1;
        jokeCount.innerHTML = `Jokes fetched: ${countJoke}`;
      })
      .catch(err => {
        console.error(err);
        joke.innerHTML = `Failed to get joke 😕 try again later.`;
      })
      .finally(() => {
        button1.disabled = false;
      });
  }, 1000);
});

// Event delegation for Add to Fav
joke?.addEventListener('click', (event) => {
  if (event.target.id === 'fav') {
    if (!favorites.includes(currentJokeText)) {
      favorites.push(currentJokeText);
      
      event.target.innerHTML = "Added";
      event.target.disabled = true;

      saveToLocalStorage();
      renderFavorites(); 
    }
  }
});

// Event delegation for Remove Fav
favList?.addEventListener('click', (event) => {
  if (event.target.classList.contains('unFav')) {
    const indexToRemove = Number(event.target.dataset.index);

    favorites.splice(indexToRemove, 1);

    saveToLocalStorage();
    renderFavorites(); 

    const favBtn = document.getElementById("fav");
    if (favBtn && currentJokeText && !favorites.includes(currentJokeText)) {
      favBtn.innerHTML = "Add to Fav";
      favBtn.disabled = false;
    }
  }
});

function renderFavorites() {
  if (!favList) return;

  if (favorites.length === 0) {
    favList.innerHTML = `<p style="padding: 10px; color: #aaa;">No favorites added yet.</p>`;
    return;
  }

  let listHTML = "<ul>";
  favorites.forEach((jokeText, index) => {
    listHTML += `
      <li>
        <p>${jokeText}</p>
        <button class="unFav" data-index="${index}">remove</button>
      </li>`;
  });
  listHTML += "</ul>";

  favList.innerHTML = listHTML;
}