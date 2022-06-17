class Product extends React.Component {
    state = {
        inShoppingCart: false
    }

    toggleInCart = () => {
        this.setState({
            inShoppingCart: !this.state.inShoppingCart
        });
    }

    render() {
        const { product } = this.props;
        return <li onClick={this.toggleInCart}>{product.name} {product.price} {this.state.inShoppingCart ? <span>in shopping cart!</span> : ''} </li>
    }
}

class ShoppingCart extends React.Component {
    render() {
        const { products } = this.props;

        return (
            <div className="cart">
                <h3>Shopping Cart</h3>
                <ul>
                    {products && products
                        .filter(product => product.inShoppingCart)
                        .map(product => <li>{product.name} {product.price} {this.state.inShoppingCart ? <span>in shopping cart!</span> : ''} </li>)}
                </ul>
            </div>
        )
    }
}

class ProductList extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <div className="products">
                <h3>Please Purchase our Excellent Products</h3>
                <ul>
                    {products && products.map(p => (<Product product={p} />))}
                </ul>
            </div>
        )
    }
}

class App extends React.Component {
    state = {
        products: data,
        name: "",
        price: 0,
        description: "Describe this item.",
        isHiring: true
    }

    handleIsHiring = (e) => {
        this.setState({
            isHiring: !this.state.isHiring
        });
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        };
        this.setState({
            products: [newItem, ...this.state.products],
            name: '',
            price: 0,
            description: 'Describe this item'
        });
    }

    render() {
        return (
            <div>
                <h1>Big Time Shopping</h1>
                {this.state.isHiring ? <h2>Yes, we are hiring</h2> : <h2>Sorry, try again tomorrow!</h2>}

                <button onClick={this.handleIsHiring}>Toggle Hiring</button>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name"></label>
                    <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} id="name" />
                    <label htmlFor="price"></label>
                    <input type="text" placeholder="Price" name="price" value={this.state.price} onChange={this.handleChange} id="price" />
                    <label htmlFor="description"></label>
                    <input type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange} id="description" />
                    <input type="submit" value="Submit" />
                </form>

                <div className="preview">
                    <h2>Preview our new item</h2>
                    <h3>{this.state.name}</h3>
                    <h4>{this.state.price}</h4>
                    <h5>{this.state.description}</h5>
                </div>

                <ProductList products={this.state.products} />
                <ShoppingCart products={this.state.products} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)