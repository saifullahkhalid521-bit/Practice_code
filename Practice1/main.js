let countJoke = 0;
let currentJokeText = ""; // Abhi screen par jo joke dikh raha hai usko track karne ke liye
let favorites = []; // Sabhi favorite jokes ka array

const button1 = document.getElementById('btn1');
const joke = document.getElementById("joke");
const jokeCount = document.getElementById("jokeCount");
const favList = document.getElementById("favList");

jokeCount.innerHTML = `Jokes fetched: ${countJoke}`;

// 1. Joke Fetch Logic
button1.addEventListener('click', () => {
  button1.disabled = true;
  joke.innerHTML = "getting your joke...";

  setTimeout(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then(response => {
        if (!response.ok) throw new Error("HTTP error!");
        return response.json();
      })
      .then(data => {
        currentJokeText = data.joke; // Current joke text variable mein save kiya

        // Check ki kya ye joke pehle se favorites mein hai
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
        console.log(err);
        joke.innerHTML = `Failed to get joke 😕 try again later.`;
      })
      .finally(() => {
        button1.disabled = false;
      });
  }, 1000);
});

// 2. Add to Favorite Logic (Array Update + Re-render)
joke.addEventListener('click', (event) => {
  if (event.target.id === 'fav') {
    // Duplicate check using Array method
    if (!favorites.includes(currentJokeText)) {
      favorites.push(currentJokeText); // Array me add kiya
      
      event.target.innerHTML = "Added";
      event.target.disabled = true;

      renderFavorites(); // UI update karne ke liye function call
    }
  }
});

// 3. Remove Favorite Logic (Array Filter + Re-render)
favList.addEventListener('click', (event) => {
  if (event.target.classList.contains('unFav')) {
    // Button ke data-index attribute se array ka index nikala
    const indexToRemove = Number(event.target.dataset.index);

    // Array se specific element remove kiya
    favorites.splice(indexToRemove, 1);

    renderFavorites(); // Dynamic Re-render

    // Agar main display par wohi joke abhi khula hai jise remove kiya, to button reset kar do
    const favBtn = document.getElementById("fav");
    if (favBtn && currentJokeText && !favorites.includes(currentJokeText)) {
      favBtn.innerHTML = "Add to Fav";
      favBtn.disabled = false;
    }
  }
});

// 4. UI Helper Function: Array se HTML generate karta hai
function renderFavorites() {
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