double(3);
doubleExp(4);

// Basic function declaration
function double(num) {
  return num * 2;
}

// function expression (this is an anonymous)
// When doing this, functions can only be used AFTER/under the expression code (line 2 wont work)
const doubleExp = function (num) {
  return num * 2;
};

// Double arrow functions -- does not rebind "this"
const doubleArrow1 = (num) => {
  return num * 2;
};

const doubleArrow2 = (num) => num * 2;

/* 
  CONST, LET, VAR
    const:
        will not allow you to store different 
        cannot rebind the variable to something new/a new place in memory
        * const one = [1, 2, 3] - this means you could add or subtract from the array using pop or push
    let:
        you can rebind the variable to something new
    var:
        similar to let, but the scope of var is "leaky"
        var can only be used within a function if in a function, or used anywhere if declared out of functions
        var is rarely used 
*/

function doStuff(num, callback) {
  const result = callback(num);
  return result;
}

const triple = (num) => num * 3;

doStuff(3, double);
doStuff(4, triple);

function manipulateList(list, callback) {
  const manipulated = [];
  list.forEach((element) => {
    manipulated.push(callback(element));
    return manipulated;
  });
}
// these two will do the same thing
const newList = manipulateList([1, 2, 3], double);
const mapList = [1, 2, 3].map(double);
// Map vs forEach - map returns something

const url = 'https://pokeapi.co/api/v2/pokemon/type';

const response = fetch(url);
