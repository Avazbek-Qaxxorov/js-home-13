let num = 10;
function nums(n) {
     let arr = [];
     for(let i = 1; i < n; i++) {
          if(i % 2 == 0) {
               arr.push(i)
          }
     }
     return Math.max(...arr);
}
let numbers = nums(num);
console.log(numbers)