function appliquerRemise(prix, remise) {
	if (remise >= 50) {
		return prix - remise;
	} else {
		return prix;
	}
}

console.log(appliquerRemise(100, 60)); // Output: 40
console.log(appliquerRemise(100, 30)); // Output: 100
