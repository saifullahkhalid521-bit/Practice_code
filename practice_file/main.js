// .map() function 

const numbers = [2 , 4 , 6 , 8];

const result = numbers.map((multi) => {
  return 3 * multi ;
})

console.log(result);

const prices = [100 , 200 , 300];

const rupees = prices.map((rupee) => {
  return '₹'+rupee;
})

console.log(rupees);



const users = [
  {
    name: "Ali",
    age: 20
  },
  {
    name: "Saif",
    age: 22
  },
  {
    name: "John",
    age: 25
  }
]

const names = users.map((user)=>{
  return name.user;
});

console.log(names);



const students = ["Ali" , "Saif" , "John"];

const greet = students.map((greet) => {
  return "Hello " + greet;
});

console.log(greet);



const fruits = ["apple" , "banana" , "mango"];

const UCfruits = fruits.map((upCase) => {
  return upCase.toUpperCase();
});

console.log(UCfruits);



// .filter() function

const getnumbers = [1 , 2 , 3 , 4 , 5];

const getResult = getnumbers.filter((num) => {
  return num > 3;
});

console.log(getResult);



const numOne = [5 , 10 , 15 , 20 , 25];

const bigNum = numOne.filter((num) => {
  return num > 15 ;
});

console.log(bigNum);



const NumLtwo = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

const evenNum = NumLtwo.filter((num) => {
  return num % 2 === 0
});

console.log(evenNum);



const Cnames = ["Ali" , "Saif" , "Alexander" , "John" , "Muhammad"];

const Lname = Cnames.filter((name) => {
  return  name.length > 4 ;
});

console.log(Lname);



const Allprices = [100 , 500 , 1200 , 300 , 2000];

const Xprices = Allprices.filter((price) => {
  return price > 1000;
});

console.log(Xprices);



const allUsers = [
  {
    name: "Ali",
    age: 17
  },
  {
    name: "Saif",
    age: 22
  },
  {
    name: "John",
    age: 15
  },
  {
    name: "Ahmed",
    age: 30
  }
]

const AdultUsers = allUsers.filter((user) => {
  return user.age >= 18 ;
});

console.log(AdultUsers);



const marks = [35 , 80 , 90 , 40 , 15];

const pass = marks.filter((marks) => {
  return marks >= 40 ;
});

console.log(pass);



//find() function

const Fnumbers = [2 , 4 , 6 , 8 , 10];

const Anum = Fnumbers.find((num) => {
  return num > 5; 
});

console.log(Anum);



const aUsers = [
  {name:"Ali" , age:20},
  {name:"Saif" , age:22},
  {name:"John" , age:25}
]

const sUser = aUsers.find((name) => {
  return name.name === "Saif" ;
});

console.log(sUser);



const ekNumbers = [ 10 , 15 , 20 , 25 , 30];

const gtNum = ekNumbers.find((num) => {
  return num > 18;
});

console.log(gtNum);



const mFruits = ["apple" , "banana" , "mango" , "orange"];

const mango = mFruits.find((fruit) => {
  return fruit === "mango";
});

console.log(mango);



const usersEk = [
  {id:1 , name:"Ali"},
  {id:2 , name:"Saif"},
  {id:3 , name:"John"}
]

const doId = usersEk.find((user) => {
  return user.id === 2;
});

console.log(doId);

const gtMarks = [25 , 35 , 45 , 55 , 65];

const passGT = gtMarks.find((pass) => {
  return pass >= 50;
});

console.log(passGT);



const products = [
  {name: "Laptop" , price: 50000},
  {name: "Phone" , price: 20000},
  {name: "Tablet" , price: 30000}
];

const Phone = products.find((pro) => {
  return pro.name === "Phone";
});

console.log(Phone);



//forEach() loop

const getnum = [1 , 2 , 3];

getnum.forEach((num) => {
  console.log(num);
});



const eNumb = [10 , 20 , 30 , 40];

eNumb.forEach((num) => {
  console.log(num);
});



const EachName = ["Ali" , "Saif" , "Jhon"];

EachName.forEach((names) => {
  console.log("Hello " + names);
});



const Users = [
  {name: "Ali" , age: 20},
  {name: "Saif" , age: 22},
  {name: "Jhon" , age: 25}
];

Users.forEach((names) => {
  console.log(names.name);
});



const fProducts = [
  {name: "Laptop" , price: 50000},
  {name: "Phone" , price: 20000},
  {name: "Tablet" , price: 30000}
];

fProducts.forEach((pName) => {
  console.log(pName.name);
});



const marksE = [35 , 80 , 22 , 90];

marksE.forEach((result) => {
  if (result >= 40){
    console.log(result + " - Pass");
  }
  else {
    console.log(result + " - Fail");
  }
});