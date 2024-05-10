let arr = [1,4,3,2,9,6,8]

let newArr = arr.sort((a,b) => a - b)
for (let i = 0; i < arr.length; i++) { 
    if(arr.indexOf(newArr[i]) % 2 !== 0) {
        console.log(arr.indexOf(newArr[i]),  "toq", newArr[i]);
    }
}
