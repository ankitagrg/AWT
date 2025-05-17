function Maths(operation, x, y) {
    return operation(x, y);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
  }
console.log(Maths(add, 6, 4));       
console.log(Maths(subtract, 6, 4));