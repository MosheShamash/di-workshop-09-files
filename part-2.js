var fs = require('fs')
var shopping_basket = fs.readFileSync('shopping-basket.json', 'utf-8')
var data = JSON.parse(shopping_basket)
// console.log(data)

var totalCostOfBasket = 0

for (var item of data.basket) {
    var priceOfItem = item.price
    var quantityOfItem = item.quantity
    var totalCost = priceOfItem * quantityOfItem
    totalCostOfBasket += totalCost
    console.log("The total cost of this item is: " + totalCost)
}

console.log("The total cost of this basket is: " + totalCostOfBasket)

for (item of data.basket) {
    if (item.name == 'Candles') {
        item.quantity = 10
    }
}
var jsonString = JSON.stringify(data, null, 2)
fs.writeFileSync('new-basket.json', jsonString, 'utf-8')