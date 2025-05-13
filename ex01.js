function verifierMajorite(age) {
    if (age >= 18) {
        return "Majeur"
    } else {
        return "Mineur"
    }
}

console.log(verifierMajorite(20)) // Output: "Majeur"
console.log(verifierMajorite(15)) // Output: "Mineur"