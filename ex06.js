function fusionnerTableaux(tableau1, tableau2) {
    let array = tableau1.concat(tableau2)
    return array
}

console.log(fusionnerTableaux([3, 7, 9], [1, 3, 4])) // Output: [3, 7, 9, 1, 3, 4]