const firstFn = () => {
  let a = +prompt("Type a number");
  let b = +prompt("Type second number");
  if (a > b) return `${b} меньше`;
  else return `${a} меньше`;
};

const secondFn = () => {
  let x = +prompt("Type a number");
  let n = +prompt("Type power");
  return `${x} ^ ${n} = ${x ** n}`;
};

const thirdFn = () => {
  let m = +prompt("Type range from");
  let g = +prompt("Type range to");
  while(m < g){
    if (m % 2 != 0) console.log(m);
    m++
  }
};

// const fourthFn = (y, z) => {
//   first: for (let i = y; i < z; i++) {
//     for (let j = y; j < i; j++) {
//       if (i % j == 0) continue first;
//     } 
//   }
// };

const task = +prompt("Задание. от 1 до 4");

switch (task) { 
  case 1:
    console.log(firstFn());
    break;
  case 2:
    console.log(secondFn());
    break;

  case 3:
    console.log(thirdFn());
    break;

  case 4:
    console.log("Не поняла");
    break;

  default:
    console.log("Error");
}
