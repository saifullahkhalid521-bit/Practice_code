document.getElementById('btn1').addEventListener('click', () => {
  document.getElementById("jock").innerHTML = "getting your jock..."
  setTimeout(()=>{
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
  .then(response => {
     if(!response.ok){
      throw new Error("HTTP error!");
    }
    return response.json()
  })
  .then(data => {
    document.getElementById("jock").innerHTML = data.joke;
  })
  .catch(err => {
    console.log(err)
     document.getElementById("jock").innerHTML ='Failed to get joke 😕';
  });
  },1000);
});


