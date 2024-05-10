function generateArray(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
      let value = parseInt(prompt("Qiymatni kiriting: "));
      array.push(value);
    }
    return array;
  }
  function calculateSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  let n = parseInt(prompt("N sonini kiriting: "));
  let myArray = generateArray(n);
  let sum = calculateSum(myArray);
  console.log("Massiv:", myArray);
  console.log("Massiv elementlarining yig'indisi:", sum);