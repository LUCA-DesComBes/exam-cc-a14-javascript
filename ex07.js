function supprimerDoublon(tableau) {
	return tableau.filter(
		(value, index) =>
			tableau.indexOf(value) === index && tableau.lastIndexOf(value) === index
	);
}

console.log(
	supprimerDoublon([1, "foo", true, false, true, "bar", 1, "test", "test"])
); // Output: ["foo", false, "bar"]
