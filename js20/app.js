//******************************
//Q1

var list = ["S", "a", "y", "l", "a", "n", "i"];
//Run a loop on this array and show each
//character in consoles.

//Solution:
for(var i = 0; i < list.length; i++){
    console.log(list[i]);
}

//******************************
//Q2
//Take an input from user, convert it to an
//array, run the loop and show console each
//character

//Solution:
var text = prompt("Enter something");
text = text.split("");

for(var i = 0; i < text.length; i++){
    console.log(text[i]);
}

//Q3
//Take two inputs from user, convert it to an
//array, run the loop and show both each consoles
//together.
//Output:
// s w
// a e
// y l
// l f
// a a
// n r
// i e

//Solution:
var text1 = prompt("Enter something");
text1 = text1.split("");
var text2 = prompt("Enter something");
text2 = text2.split("");

for(var i = 0; i < text1.length || i < text2.length; i++){
    console.log(text1[i] || "-", text2[i] || "-");
}

//Q4***********************
var farm = {
    name: "Memon Farmhouse",
    size: "5000 sqft",
    pool: true
};
//Using this object
//1) Add a field `games` with false
//2) Add a field `rates` with 15000
//3) Add a field `unit` with RS
//4) Add a field `conversion` that will be a function, takes
// a parameter for the unit (For e.g.), make conversions for
// $, PKR, INR and AUS, and return the value!

//solution:
farm.games = false;
farm.rates = 15000;
farm.unit = "RS";
farm.conversion = function(unit){
    if(unit == "$"){
        return this.rates / 115;
    } else if(unit == "INR"){
        return this.rates / 2.5;
    } else {
        return this.rates;
    }
};
console.log(farm);
//farm.conversion("$");

//Q5***********************
var farms = [
    {
        name: "Memon Farmhouse",
        size: "5000 sqft",
        pool: true,
        games: false,
        rates: 12000
    },
    {
        name: "Ideal Farmhouse",
        size: "6000 sqft",
        pool: true,
        games: true,
        rates: 17000
    },
    {
        name: "Deluxe Farmhouse",
        size: "10000 sqft",
        pool: true,
        games: true,
        rates: 20000
    }
];
//1) Check if each farm's rate is less then or equal to 15000, console.log
//Cheap, else Expensive
//2) Add a field status, and assign Cheap or Expensive according to condition

//Solution:
for(var x = 0; x < farms.length; x++){
    if(farms[x].rates <= 15000){
        farms[x].status = "Cheap"
    } else {
        farms[x].status = "Expensive"
    }
}

console.log(farms);

//Q6
//Create 3 objects using constructor function for the above farms, and push them
//in an array. E.g.
//function Course(name, fees){
//    this.name = name;
//    this.fees = fees;
//}
//
//var course1 = new Course("Maths", 8000);
//console.log(course1);

//solution:
function Farm(name, size, pool, games, rates){
    this.name = name;
    this.size = size;
    this.pool = pool;
    this.games = games;
    this.rates = rates;
}

var farm1 = new Farm("Memon Farmhouse", "5000 sqft", true, false, 12000);
var farm2 = new Farm("Farmhouse2", "7000 sqft", true, true, 17000);
var farm3 = new Farm("Farmhouse3", "10000 sqft", true, true, 18000);

var farms = [];
farms.push(farm1);
farms.push(farm2);
farms.push(farm3);
console.log(farms);
//Q7
//Create a prototype function for the above farms, that will assign the Cheap
//or Expensive status to that object!
//E.g.
//Course.prototype.setStatus = function(){
//Your logic!
//};

Farm.prototype.setStatus = function(){
    if(this.rates <= 15000){
        this.status = "Cheap"
    } else {
        this.status = "Expensive"
    }
};

//console.log(farm1);
farm1.setStatus();
console.log(farm1);
console.log(farm2);
console.log(farm3);
