let Store = [
    Produce = [
        {name: 'Carrots', price: 12},
        {name: 'Avocadoes', price: 8},
        {name: 'Broccoli', price: 4},
        {name: 'Potatoes', price: 10},
        {name: 'Leeks', price: 10}
    ],
    Furniture = [
        {name: "Chair", price: 24},
        {name: "Table", price: 18},
        {name: "Vase", price: 12}
    ],
    Meat = [
        {name: "Steak", price: 21},
        {name: "Lamb", price: 19},
        {name: "Pork", price: 32}
    ]
]

let shoppingCart = [];
let cartCount = document.getElementById('cart');
let cartItemsDisplay = document.getElementById('cart-display');
let checkoutDisplay = document.getElementById('checkout-id')


// Will display all of the items you've currently 'bought' and the current total price.
const updateCheckoutDisplay = () => {
    let newElements = []
    let totalPrice = 0;
    for (let i = 0; i < shoppingCart.length; i++)
    {
        let shoppingCartItem = shoppingCart[i];
        let shoppingCartItemName = shoppingCartItem.name;
        let shoppingCartItemPrice = shoppingCartItem.price;

        totalPrice += shoppingCartItemPrice;

        let htmlElement = "<div class='checkout-item'><p>" + shoppingCartItemName +  "</p><p>$" + shoppingCartItemPrice + "</p></div><hr><br>";
        newElements[i] = htmlElement;
    }

    checkoutDisplay.innerHTML = ""
    for (let i = 0; i < newElements.length; i++)
    {
        checkoutDisplay.innerHTML += newElements[i] + '\n';
    }

    let totalPriceCheckoutElement = "<div class='checkout-item'><h3>Total</h3><h3>$" + totalPrice + "</h3></div>";
    checkoutDisplay.innerHTML += totalPriceCheckoutElement;
}

const addItemToShoppingCart = (index, itemIndex) => {
    let grocerySection = Store[index];
    console.log(grocerySection);
    let storeItem = grocerySection[itemIndex];
    console.log(storeItem);

    if (storeItem !== undefined)
    {
        console.log(`Found ${storeItem.name}, adding to cart`);
        shoppingCart[shoppingCart.length] = storeItem;
        console.log(shoppingCart);
        cartCount.innerHTML = `Cart: ${shoppingCart.length}, Last Added Item: ${storeItem.name}`;
    }
    else
    {
        alert("Should not get to this point but just in case...hi how are you? =D")
    }

    updateCheckoutDisplay();
};

const removeItemFromShoppingCart = (index, itemIndex) => {
    // Doesn't make sense to try to remove an item from an empty cart
    if (shoppingCart.length > 0)
    {
        let cartItem = undefined;
        let grocerySection = Store[index];
        let groceryItem = grocerySection[itemIndex];
        for (let i = 0; i < shoppingCart.length; i++)
        {
            let currentShoppingCartItem = shoppingCart[i];
            if (currentShoppingCartItem === groceryItem)
            {
                cartItem = currentShoppingCartItem;
                break;
            }
        }
        console.log(cartItem);

        if (cartItem !== undefined)
        {
            console.log(`Found ${cartItem.name}, removing from cart`);
            shoppingCart.splice(shoppingCart.indexOf(cartItem), 1);
            console.log(shoppingCart);
            cartCount.innerHTML = `Cart: ${shoppingCart.length}`
        }

        updateCheckoutDisplay();
    }
};