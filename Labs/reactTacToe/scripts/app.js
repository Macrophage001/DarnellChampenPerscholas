class App extends React.Component {
    render() {
        return (
            <div className="app">
                <p>Hello there!</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.main')
);