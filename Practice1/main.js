let countJoke = 0;
document.getElementById('btn1').addEventListener('click', () => {
  countJoke += 1;
  document.getElementById("jokeCount").innerHTML = `Jokes fetched: ${countJoke}`
  document.getElementById("joke").innerHTML = "getting your jock..."
  setTimeout(()=>{
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
  .then(response => {
     if(!response.ok){
      throw new Error("HTTP error!");
    }
    return response.json()
  })
  .then(data => {
    document.getElementById("joke").innerHTML = data.joke;
  })
  .catch(err => {
    console.log(err)
     document.getElementById("joke").innerHTML ='Failed to get joke 😕';
  });
  },1000);
});