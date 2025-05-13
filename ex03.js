function pairOuImpair(nombre) {
    if (nombre % 2 === 0) {
        return "Pair"
    } else {
        return "Impair"
    }
}

console.log(pairOuImpair(10)) // Output: "Pair"
console.log(pairOuImpair(7))  // Output: "Impair"