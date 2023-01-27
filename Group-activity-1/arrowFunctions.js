// function add(a, b) {
//     return a + b;
//   }
// console.log(add(2, 3));

const add = (a, b) => a + b;

console.log(add(2, 3));


// function square(n) {
//     return n * n;
//   }
//   console.log(square(3));

const square = (n) => n * n;

console.log(square(2));


// function myFunc(a, b) {
//     let chuck = 42;
//     return a + b + chuck;
//   }

const myFunc = (a, b) => {
    let chuck = 42;
    return a + b + chuck;
}
console.log(myFunc(2, 3));

  
//   function sayHello() {
//     return 'Hello there';
//   }
const sayHello = () => 'Hello there';
console.log(sayHello());

  
//   function myObj() {
//     return { cost: 500 };
//   }
const myObj = () => {
    return { cost: 500 }
};

console.log(myObj());

const returnsString = (name, age) => {
    return `Hello, I am ${name}, and I am ${age} years old.`
};

console.log(returnsString('Gavril', 38));