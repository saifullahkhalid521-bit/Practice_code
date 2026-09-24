// const person = {
//   name: "Saifullah",

//   great () {
//     console.log(this.name);
//   }
// }

// person.great();


// const product = {
//   name: "Laptop",
//   price: 55000,

//   showPrice: function () {
//     console.log(this.price);
//   }
// }

// product.showPrice();


// const student = {
//   name: "Sam",
//   age: 22,

//   details () {
//     console.log("Name: " +this.name);
//     console.log("Age: "+this.age);
//   }
// }

// student.details();


// const account = {
//   balance: 1000,

//   deposite (amount) {
//     this.balance+= amount;
//     console.log(this.balance); 
//   }
// }

// account.deposite(500);

// console.log(account.balance);


// const user = {
//   name:"Saif",

//   changeName (newName) {
//     this.name = newName;
//     console.log(this.name);
//   }
// }

// user.changeName("Khalid");

// console.log(user.name);


// const account2 = {
//   owner: "Saif",
//   balance: 1000,

//   deposit(amount){
//       this.balance+= amount;
//   },

//   withdraw(amount){
//     this.balance-= amount;
//   },
// }

// account2.deposit(500);
// account2.withdraw(300);

// const cart = {
//   items: 0,

//   addItem() {
//     this.items+= 1;
//   },

//   removeItem(){
//     this.items-= 1;
//   }
// };

// cart.addItem();
// cart.addItem();
// cart.addItem();

// cart.removeItem();

// console.log(cart.items);


// const player = {
//   name: "Saif",
//   score: 0,

//   increaseScore(pointes){
//     this.score+= pointes;
//   },

//   resetScore(){
//     this.score = 0;
//   }
// };

// player.increaseScore(20);
// player.increaseScore(15);

// console.log(player.score);

// player.resetScore();

// console.log(player.score);


// const preson1 = {
//   name: "Saif",

//   greet() {
//     console.log("Hello " + this.name);
//   }
// }

// const person2 = {
//   name: "Ali",

// };

// person2.greet = preson1.greet;

// person2.greet();console.log(account2.balance);


// const fist = () => {
//   userName = "Saifullah";
//   console.log(this.userName);
// };

// fist();

//Implesit
// const addTwo = (num1 , num2) => (num1 + num2);
const addTwo = (num1 , num2) => ({username: "Saifullah"});
console.log(addTwo(2 ,3))

//Explisit
const addThree = (num1 , num2 , num3) => {
  return num1 + num2 + num3;
}
console.log(addThree(2 , 3 , 4));



const userAccount = {
    name: "Saifullah Khlaid",

    balance: 0,

    deposit (amount) {
      this.balance+= amount;
    },

    withdraw (amount) {
      this.balance-= amount;
    },

    currentBalance(){
      return this.balance;
    }
  }

  const myAccount = userAccount;

 myAccount.deposit(1000);
 myAccount.withdraw(100);

 console.log(myAccount.currentBalance());