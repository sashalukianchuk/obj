// 1. Створіть об'єкт city1 (var city1 = {}), вкажіть у нього властивості name (назва міста, рядок) 
// із значенням «ГородN» і population (населеність міста, число) зі значенням 10 млн.
// 2. Створіть об'єкт city2 через нотацію {name: "ГородM", population: 10^6}.
// 3. Створіть у об'єктів city1 і city2 методи getName (), які повернуть відповідні назви міст
// 4. Створіть методи exportStr () у кожного з об'єктів. Цей метод повинен повертати інформацію 
// про місто в форматі «name = ГородN \ npopulation = 10000000 \ n». Для другого міста буде рядок 
// зі своїми значеннями. Примітка: можна звертатися до кожного властивості через цикл for / in, 
// але методи об'єкта повертати не потрібно



var city1 = {}
city1.name = "ГородN";
city1.population = 10000000;

let a = function() {
    return (name);
  };
  
let b = function(){
    return ("name = " + name + "\n" + "population = " + population);
};

city1.getName = a;
city1.exportStr = b;

var city2 ={name: "ГородM", population: 10000000}
city2.getName = a;
city2.exportStr = b;