function Indeks(massiv) {
    let arr = massiv.sort(function(a, b){return b - a});
    return arr;
}

let indekslar = [5, 4, 8, 3, 2, 6, 9, 1, 7];
let arr = Indeks(indekslar);
console.log(arr); 

 