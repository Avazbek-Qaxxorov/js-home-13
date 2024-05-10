// function countsi(arr, K, L) {
//     let count = 0;
//     for (let i = K; i <= L; i++) {
//         count += arr[i];
//     }
//     return count;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let K = 2;
// let L = 5;

// let result = countsi(arr, K, L);
// console.log("Yig'indi:", result);

let n = 15
function newArr (n) {
    let arr = []
    for (let i = 1; i < n; i++) {
        arr.push(i)
    }
    return arr
}
let array = newArr(n)
function findIndex (arr, k, l) {
    let newArr = []
    for (let i = k; i <= l; i++) {
        newArr.push(i)
    }
    return newArr
}
let sumIndex = findIndex(array, 4, 11)
console.log(sumIndex.reduce((s, i) => s + i, 0))