const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

// let age1: number;
// age1 = 50;
// let name1: string;
// name1 = "Max";
// let toggle1: boolean;
// toggle1 = true;
// let empty1: null;
// empty1 = null;
// let notInitialize1: undefined;
// notInitialize1 = undefined;
// let callback = (a: number) => (a: number) => {
//   return 100 + a;
// };

// let age: number;
// age = 50;
// let name: string;
// name = "Max";
// let toggle: boolean;
// toggle = true;
// let empty: null;
// empty = null;
// let notInitialize: undefined;
// notInitialize = undefined;
// let callback = (a: number) => number;
// callback = (a) => {
//   return 100 + a;
// };

// let anything: any;
// anything = -20;
// anything = "Text";
// anything = {};

// let some: unknown;
// some = "Text";

// let str: string;
// if (typeof some==='string') {
//   str = some;
// }
