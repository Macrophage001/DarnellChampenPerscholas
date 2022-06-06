class InfoContainerSmall extends React.Component {
    render() {
        return (
            <div className="info-container-small">
                <h3>{this.props.title}</h3>
                {typeof this.props.desc === 'object'
                    ? this.props.desc.map((item, i) => <p>{item}</p>)
                    : <p>{this.props.desc}</p>}
            </div>
        )
    }
}
class InfoContainerLarge extends React.Component {
    render() {
        return (
            <div className="info-container-large">
                <h3>{this.props.title}</h3>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

class Display extends React.Component {
    render() {
        return (
            <div className="display">
                <div className="upper-display">
                    <InfoContainerSmall title="Reviews" desc="1,281" />
                    <InfoContainerSmall title="Average Rating" desc="4.6" />
                    <InfoContainerSmall title="Sentiment Analysis" desc={['960', '122', '321']} />
                </div>
                <div className="lower-display">
                    <InfoContainerLarge title="Website Visitors" desc="821" />
                </div>
            </div>
        )
    }
}

class Sidebar extends React.Component {
    render() {
        return (
            <div className="side-menu">
                <nav>
                    <ul>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Widget</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Online Analysis</a></li>
                        <li><a href="#">Settings</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Sidebar />
                <Display />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.main')
)