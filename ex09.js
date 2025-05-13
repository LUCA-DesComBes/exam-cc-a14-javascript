function trierDecroissant(tableau) {
   return tableau.sort(function (a, b) {
        return a - b
    }).reverse();
}

console.log(trierDecroissant([4, 1, 10, 2, 3, 6])) // Output: [10, 6, 4, 3, 2, 1]