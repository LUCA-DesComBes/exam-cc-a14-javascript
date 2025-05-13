const orders = [
	{
		id: 1,
		products: [
			{ name: "Laptop", price: 1000 },
			{ name: "Mouse", price: 50 },
		],
	},
	{
		id: 2,
		products: [
			{ name: "Phone", price: 600 },
			{ name: "Charger", price: 30 },
		],
	},
	{
		id: 3,
		products: [
			{ name: "Tablet", price: 300 },
			{ name: "Case", price: 20 },
		],
	},
];

function findMostExpensiveProduct(orders, orderId) {
	for (let i = 0; i < orders.length; i++) {
		if (orderId === orders[i].id) {
			if (orders[i].products[0] > orders[i].products[1]) {
				return orders[i].products[1];
			} else {
				return orders[i].products[0];
			}
		}
	}
}

console.log(findMostExpensiveProduct(orders, 1)); // Output : { name: 'Laptop', price: 1000 }
