let Store = [
    {name: 'Chicken', price: 12},
    {name: 'Rice', price: 8},
    {name: 'Broccoli', price: 4},
    {name: 'Soup', price: 10},
]

let currentBalance = 33;
let shoppingCart = [];
let numOfItemsInStore = 4;

for (let i = 0; i < numOfItemsInStore; i++)
{
    let storeItem = Store[i];

    if (currentBalance >= storeItem.price)
    {
        console.log("You've bought: " + storeItem.name + " for " + storeItem.price + " dollars");
        shoppingCart[i] = storeItem.name;
        currentBalance = currentBalance - storeItem.price;
    }
    else
    {
        console.log("Your balance is low, you can not buy: " + storeItem.name + " at " + storeItem.price + " dollars");
        console.log("Current Balance: " + currentBalance);
    }
}

console.log(shoppingCart);