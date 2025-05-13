const etudiants = [
	{ name: "Alice", grade: 15 },
	{ name: "Bob", grade: 8 },
	{ name: "Charlie", grade: 12 },
	{ name: "David", grade: 9 },
];

function filtrerEtudiants(etudiants) {
	return etudiants.filter((value) => value.grade >= 10);
}

console.log(filtrerEtudiants(etudiants)); // Output : [{ name: 'Alice', grade: 15 }, { name: 'Charlie', grade: 12 }]
