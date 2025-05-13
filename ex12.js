const produits = [
	{ name: "Laptop", price: 1000 },
	{ name: "Phone", price: 500 },
	{ name: "Tablet", price: 300 },
];

function ajouterTva(produits) {
	let res = 0;
	let result;
	for (let i = 0; i < produits.length; i++) {
		res = produits[i].price * 0.2;
		result = res + produits[i].price;
		produits[i].price = result;
	}
	return produits
}

console.log(ajouterTva(produits)); // Output : [{ name: 'Laptop', price: 1200 }, { name: 'Phone', price: 600 }, { name: 'Tablet', price: 360 }]
