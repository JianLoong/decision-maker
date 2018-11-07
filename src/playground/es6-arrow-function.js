const square = function(x) {
  return x * x;
};

// In ES6, the arrow keyword is no more
const squareArrow = x => x * x;

//console.log(square(8));
// console.log(squareArrow(4));

const getFirstName = firstName => firstName.split(" ")[1];

// console.log(getFirstName("Jian Liew"));

// const add = function(a, b){
//     console.log(arguments);
//     return a + b;
// }

const addArrow = (a, b) => {
  //ES6 has no access to arguments
  //console.log(arguments);
  return a + b;
};

// ES6 this keyword no longer bound
const user = {
  name: "Jian Liew",
  cities: ["Malaysia", "Australia"],
  //In ES6 you can define methods like that..
  printPlacesLived() {
    //console.log(this.name);
    //console.log(this.cities);

    //Map can transform the item
    const cityMessages = this.cities.map(city => {
      return this.name + " has lived in " + city;
    });

    return cityMessages;
    // this.cities.forEach((city) => {
    //     console.log(this.name + ' has lived in' + city)
    // });
  }
};

user.printPlacesLived();

// console.log(add(2,5));
// console.log(addArrow(2,5));

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};
