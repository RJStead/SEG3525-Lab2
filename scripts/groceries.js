	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organique: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organique: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organique: false,
		price: 10.00
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organique: false,
		price: 15.00
	},
	{
		name: "cheese pizza",
		vegetarian: true,
		glutenFree: false,
		organique: false,
		price: 12.00
	},
	{
		name: "tomato",
		vegetarian: false,
		glutenFree: true,
		organique: true,
		price: 6.00
	},
	{
		name: "carrots",
		vegetarian: true,
		glutenFree: true,
		organique: true,
		price: 4.00
	},
	{
		name: "pistachios",
		vegetarian: true,
		glutenFree: true,
		organique: false,
		price: 10.00
	},
	{
		name: "eggs",
		vegetarian: false,
		glutenFree: true,
		organique: false,
		price: 8.00
	},
	{
		name: "nachos",
		vegetarian: false,
		glutenFree: false,
		organique: false,
		price: 13.00
	}
];	

//[vegan, GlutenFree, Organic, None]
var restrictions = [false, false, false]
// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
function restrictListProducts(prods, restriction) {
	let product_names = [];
	if (restriction.includes("Vegetarian"))
		restrictions[0] = !restrictions[0];
	else if (restriction.includes("GlutenFree"))
		restrictions[1] = !restrictions[1];
	else if (restriction.includes("Organic"))
		restrictions[2] = !restrictions[2];
	
	for (let i=0; i<prods.length; i+=1) {		
		if ((!restrictions[0] || prods[i].vegetarian == restrictions[0])
			&& (!restrictions[1] || prods[i].glutenFree == restrictions[1])
			&& (!restrictions[2] || prods[i].organique == restrictions[2])) {
			product_names.push(prods[i].name + ": $" + prods[i].price);
		}
	}
	return product_names;
}

/* 	Pour le bubble sort algorithm j'ai
*	consulté le site https://www.geeksforgeeks.org/bubble-sort/
*/
function sortItems(array) {
	var size = array.length;
	for (let i = 0; i<size-1; i++) {
		for(let j = 0; j<size-i-1; j++) {
			if (parseInt(array[j].split("$")[1]) > parseInt(array[j+1].split("$")[1])) {
				//SWAP
				var temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}
	
	return array;
}

function getPrice(name) {
	for (let i=0; i<prods.length; i++) {
		if(prods[i].name == name)
			return prods[i].price;
	}
}	

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
