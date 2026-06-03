let product ='';

let card = [
  {
    heading:"Heading 1",
    button:"More info 1",
  },
  {
    heading:"Heading 2",
    button:"More info 2",
  }
];

card.forEach((card) => {
  product += `<div class="card">
    <h1>${card.heading}</h1>
    <button>${card.button}</button>
  </div>`
});

document.querySelector('.container').innerHTML = product;

const st_card = document.querySelector('.st_card')


function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 80%)`;
}

function Add_card () {

  const randomColor = getRandomColor();
  st_card.innerHTML += `
    <div class = "box" style="background-color:${randomColor};">
    <button onClick ="del_box(this)" >Delete</button>
    </div>
  `
}

function del_box (button) {
  button.parentElement.remove();
}

