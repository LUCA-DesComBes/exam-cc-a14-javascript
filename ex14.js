const fruits = [
	{ name: "Apple", quantity: 10 },
	{ name: "Banana", quantity: 5 },
	{ name: "Orange", quantity: 8 },
	{ name: "Mango", quantity: 3 },
];

function totalFruitQuantity(fruits) {
    let valeurInitiale = 0;
    return fruits.reduce(function (
        acc,
        valeurCourante,
      ) {
        return acc + valeurCourante.quantity;
      }, valeurInitiale)
}

console.log(totalFruitQuantity(fruits)); // Output : 26
