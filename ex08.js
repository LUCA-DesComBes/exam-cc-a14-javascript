function additionerrPar(tableau, multiplicateur) {
    let array = []
    for (let i = 0; i < tableau.length; i++) {
        array.push(tableau[i] + multiplicateur)
    }
    return array
}

const tableau = [1, 2, 3, 4, 5];
const nombre = 10;
console.log(additionerrPar(tableau, nombre)); // Output: [11, 12, 13, 14, 15]