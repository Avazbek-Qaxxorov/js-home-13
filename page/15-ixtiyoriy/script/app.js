let arr = [1,3,2,4,6,8,7,9,5]

let array = 0
function numbers(arr) {
    let res = []
for (let i = 0; i < arr.length; i++) {
    let result = arr[i]
    if(arr[i] % 2 !== 0) {
        array += arr[i]
    }
}
return array
}
let result = arr
console.log(numbers(arr))