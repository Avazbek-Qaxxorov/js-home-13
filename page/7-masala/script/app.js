// users = [
//     {
//         ism : "Abdulloh",
//         age : 18,
//     },
//     {
//         ism : "Kamron",
//         age : 24,
//     },
//     {
//         ism : "Abdulaziz",
//         age : 30,
//     }
// ];

// function usersAge(a, b, c) {
//     let sum = Math.abs(a - b);
//     let avg = Math.abs(b - c);
//     let count = Math.abs(a - c);


//     let result = [sum, avg, count];
//     return result
// }

// let res = usersAge(users[0].age, users[1].age, users[2].age);
// console.log(res);


// let users = [
//     {
//         name: "Kamol",
//         age: 35
//     },
//     {
//         name: "Abdulloh",
//         age: 23
//     },
//     {
//         name: "Abdulaziz",
//         age: 36
//     }
// ]


// for(let i = 0; i < users.length; i++){
//     if(users[i + 1]){
//         let difference = users[i].age - users[i + 1].age;
//         if(difference < 0){
//             console.log(`${users[i].name} ${Math.abs(difference)} yosh kichkina ${users[i + 1].name} dan` )
//         }
//         else{
//             console.log(`${users[i].name} ${Math.abs(difference)} yosh katta ${users[i + 1].name} dan` )
//         }

//     }
// }
// let dif = users[users.length - 1].age - users[0].age;
// console.log(`${users.slice(-1).name} ${Math.abs(dif)} ${difference < 0 ? "kichkina" : "katta"} ${users[0].name} dan` )


let users = [
    {
        name: "Kamol",
        age: 50
    },
    {
        name: "Ali",
        age: 28
    },
    {
        name: "HusanboyVaSindor",
        age: 20
    },
    {
        name: "Vali",
        age: 39
    }
]


for(let i = 0; i < users.length; i++){
    if(users[i + 1]){
        let difference = users[i].age - users[i + 1].age;
        if(difference < 0){
            console.log(`${users[i].name} ${Math.abs(difference)} yosh kichkina ${users[i + 1].name} dan` )
        }
        else{
            console.log(`${users[i].name} ${Math.abs(difference)} yosh katta ${users[i + 1].name} dan` )
        }
    }
}

let dif = users[users.length - 1].age - users[0].age;


console.log(`${users[users.length - 1].name} ${Math.abs(dif)} yosh ${dif < 0 ? "kichik" : "katta"} ${users[0].name} dan` )