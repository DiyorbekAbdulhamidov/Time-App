/*
   SMCAR001 = HM0001 = name,poz,HM0002
*/

/* 
 HM0002 = console.log(this);
  console.log(`${this.name} is going`);
 */

// const car = {
//     name: 'tico',
//     poz: '3',
//     yur(){
//         console.log(this);
//         console.log(`${this.name} is going`);
//     }
// }

// car.yur(); //HM0001 = HM0002

// // SM002 = HM0002;
// const _yur = car.yur;
// _yur();

// const person = {
//     name: 'Diyorbek',
//     birthYear : 2007,
//     currentYear : 2023
// }

// function showData(){
//     console.log(`${this.name} age ${this.currentYear} - ${this.birthYear} = ${calcAge.call(this)} `);
// }

// function calcAge(){
//     return this.currentYear - this.birthYear;
// }

// showData.call(person);

// function creatAnimal(name,age){
//     return {
//         name,
//         age,
//         run(){("Animal is running...");}
//     }
// }
// const sher = creatAnimal("Sher", 16);
// const maymun = creatAnimal("Maymun", 18);

// console.log(sher);
// console.log(maymun);

// function Camel(name,age){
//     this.name = name;
//     this.age = age;
//     this.run = function(){(console.log(`${this.name} is running...`))};
// }
// let sher = new Camel("Sher", 16);
// sher.run();

/*
   SMCAR001 = HM0001 = name,poz,HM0002
*/

/* 
 HM0002 = console.log(this);
  console.log(`${this.name} is going`);
 */

// const car = {
//     name: 'tico',
//     poz: '3',
//     yur(){
//         console.log(this);
//         console.log(`${this.name} is going`);
//     }
// }

// car.yur(); //HM0001 = HM0002

// // SM002 = HM0002;
// const _yur = car.yur;
// _yur();

// const person = {
//     name: 'Diyorbek',
//     birthYear : 2007,
//     currentYear : 2023
// }

// function showData(){
//     console.log(`${this.name} age ${this.currentYear} - ${this.birthYear} = ${calcAge.call(this)} `);
// }

// function calcAge(){
//     return this.currentYear - this.birthYear;
// }

// showData.call(person);

// function creatAnimal(name,age){
//     return {
//         name,
//         age,
//         run(){("Animal is running...");}
//     }
// }
// const sher = creatAnimal("Sher", 16);
// const maymun = creatAnimal("Maymun", 18);

// console.log(sher);
// console.log(maymun);

// function Camel(name,age){
//     this.name = name;
//     this.age = age;
//     this.run = function(){(console.log(`${this.name} is running...`))};
// }
// let sher = new Camel("Sher", 16);
// sher.run();
 
function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let meridiem = "AM";
    
    if (hours === 0) hours = 12;
      else if (hours > 12) {
      hours = hours - 12;
      meridiem = "PM";
    }
  
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
  
    const soat = document.querySelector(".soat");
    const minut = document.querySelector(".minut");
    const sekund = document.querySelector(".sekund");
    const meridiemm = document.querySelector(".meridiem");
  
    
    soat.innerHTML = `${hours} :`
    minut.innerHTML = `${minutes} :`
    sekund.innerHTML = `${seconds} `
    meridiemm.innerHTML = `${meridiem}`
  }
  
  function addZero(time) {
    if (time < 10) time = "0" + time;
    return time;
  }
  
  setInterval(showTime, 1000);
  