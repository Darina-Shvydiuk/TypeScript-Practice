var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
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
var age;
age = 50;
var name;
name = "Max";
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback = function (a) { return number; };
callback = function (a) {
    return 100 + a;
};
