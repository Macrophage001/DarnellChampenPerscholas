class Receipt extends React.Component {
    render() {
        const { receipt, togglePaid } = this.props;
        return (
            <div onClick={togglePaid} className="receipt" style={receipt.paid ? { display: 'none' } : { display: 'block' }}>
                <h2>{receipt.person}</h2>
                <h3><span>Main: </span> {receipt.order.main}</h3>
                <h3><span>Protein: </span>{receipt.order.protein}</h3>
                <h3><span>Rice: </span>{receipt.order.rice}</h3>
                <h3><span>Sauce: </span>{receipt.order.sauce}</h3>
                <h3><span>Drink: </span>{receipt.order.drink}</h3>
                <h3><span>Total: </span> ${receipt.order.cost}</h3>
            </div>
        )
    }
}

class App extends React.Component {
    state = {
        receipts: [
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
                paid: true
            }
        ]
    }

    togglePaid = (index) => {
        const { receipts } = this.state;
        receipts[index].paid = !receipts[index].paid;
        console.log(receipts);
        this.setState({ receipts });
    }

    render() {
        const { receipts } = this.state;
        return (
            <div className="app">
                {receipts && receipts.map((receipt, i) => <Receipt togglePaid={() => this.togglePaid(i)} receipt={receipt} />)}
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('.container')
)