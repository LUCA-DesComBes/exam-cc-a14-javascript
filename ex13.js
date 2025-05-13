const livres = [
	{ title: "Book A", year: 1995 },
	{ title: "Book B", year: 1987 },
	{ title: "Book C", year: 2005 },
	{ title: "Book D", year: 1999 },
];

function trierLivres(livres) {
  let arr = livres.sort(function (a, b) {
        if (a.year < b.year)
           return -1;
        if (a.year > b.year )
           return 1;
        return 0;
      });
      return arr
}

console.log(trierLivres(livres)); // Output : [{ title: 'Book B', year: 1987 }, { title: 'Book A', year: 1995 }, { title: 'Book D', year: 1999 }, { title: 'Book C', year: 2005 }]
