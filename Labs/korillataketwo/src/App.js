import React, { useState } from 'react'
import './App.css';

const Receipt = ({ togglePaid, index, receipt }) => {
  console.log(receipt);

  return (
    <div onClick={() => togglePaid(index)} className="receipt" style={receipt.paid ? { display: 'none' } : { display: 'block' }}>
      <h2>{receipt.person}</h2>
      <h3><span>Main: </span> {receipt.order.main}</h3>
      <h3><span>Protein: </span>{receipt.order.protein}</h3>
      <h3><span>Rice: </span>{receipt.order.rice}</h3>
      <h3><span>Sauce: </span>{receipt.order.sauce}</h3>
      <h3><span>Drink: </span>{receipt.order.drink}</h3>
      <h3><span>Total: </span> ${receipt.order.cost}</h3>
      <h3><span>Paid: </span>{receipt.paid ? 'Yes' : 'No'}</h3>
    </div>
  )
}

const App = function () {
  const [receipts, setReceipts] = useState([
    {
      person: 'Karolin',
      order: {
        main: 'Burrito',
        protein: 'Organic Tofu',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: [
          'Baby Bok Choy', 'Cucumber Kimchi'
        ],
        drink: 'Korchata',
        cost: 22
      },
      paid: false
    },
    {
      person: 'Jerrica',
      order: {
        main: 'Rice Bowl',
        protein: 'Ginger Soy Chix',
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: [
          'Yuzu Pickled Sweet Pepper', 'Kale'
        ],
        drink: 'Korchata',
        cost: 19
      },
      paid: false
    },
    {
      person: 'Matt',
      order: {
        main: 'Salad Bowl',
        protein: 'Organic Tofu',
        rice: 'none',
        sauce: "K'lla",
        toppings: [
          'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
        ],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20
      },
      paid: false
    }
  ])

  const togglePaid = index => {
    let receipt = receipts[index];
    receipt.paid = !receipt.paid;
    setReceipts([...receipts, receipt]);
    console.log(receipt);
  }

  return (
    <div className="app">
      {receipts && receipts.map((receipt, i) => <Receipt key={i} togglePaid={togglePaid} index={i} receipt={receipt} />)}
    </div>
  )
}

export default App;
