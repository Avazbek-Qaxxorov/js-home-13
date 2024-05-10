let num = 10;

function numbers(num) {
    let array = [];

    for (let i = 2; i < num; i++) {
        if(i <= 1){
            break
        }
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                break
            }
            arr.push(i)
        }
    }
    return arr
}

let arr = numbers(num)

console.log(... new Set(arr))