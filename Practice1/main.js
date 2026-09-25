let countJoke = 0;
// let show = false;
const button1 = document.getElementById('btn1');
const joke = document.getElementById("joke");
const jokeCount = document.getElementById("jokeCount");
const favList = document.getElementById("favList");


jokeCount.innerHTML = `Jokes fetched: ${countJoke}`;

button1.addEventListener('click', () => {
    button1.disabled = true;

  joke.innerHTML = "getting your jock..."

  setTimeout(()=>{

    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
  .then(response => {
     if(!response.ok){
      throw new Error("HTTP error!");
    }
    

    return response.json()
  })
  .then(data => {
    
    joke.innerHTML = `<div id = "mainJoke" >${data.joke}</div>
                      <button id = "fav" >Add to Fav</button>`

    //Joke count logic
    countJoke += 1;
    jokeCount.innerHTML = `Jokes fetched: ${countJoke}`


  })
  .catch(err => {
    console.log(err)
     joke.innerHTML =`Failed to get joke 😕
     try again leater.`;
  })
  .finally(()=>{
    button1.disabled = false;
  });
  },1000);
});


let val = true;
joke.addEventListener('click', (event) => {
  const favBtn = document.getElementById("fav");
  if (event.target.id === 'fav' && val === true) {
    favBtn.innerHTML = "Added";
    val = false;
    const mainJokeElem = document.getElementById("mainJoke");
    favList.innerHTML+= `<li>${mainJokeElem.innerHTML}</li>`;
  }
})

