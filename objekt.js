const arrayOfString = ["sträng-1", "sträng-2", "sträng-3"] //string-array
const arrayOfNumbers = [1, 2, 3, 4, 5] //number-array
const arrayOfBooleans = [true, false, false, true] //boolean-array
const arrayOfObjects = [{}, {}, {}] //object-array
const mixedArray = ["sträng-1", false, 100, true, "1"] // string, number, boolean etc..


const Square = {
  sides: 4,
  size: 10,
};

const Triangle = {
  sides: 3,
  size: null,
  a: 10,
  b: 15,
  c: 10,
  circle: null,
};

const Triangle2 = {
  sides: 3,
  size: 10,
  circle: {
    friendlyName: "Triangle2Circle",
    radius: 5,
  }
};



console.log('Square:: ', Square);
console.log('Triangle:: ', Triangle);
console.log('Triangle 2:: ', Triangle2);
console.log('Triangle 2:: Print Circle:: ', Triangle2.circle);
console.log('Triangle 2:: Print Circle:: Radius:: ', Triangle2.circle.radius);
