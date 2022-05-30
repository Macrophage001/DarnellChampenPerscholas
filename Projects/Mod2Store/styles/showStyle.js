const showStyle = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: "'Roboto', sans-serif",
}
const productStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%)',
    marginTop: '2rem',
    display: 'flex'
}

const productNavULStyle = {
    display: 'flex',
    justifyContent: 'space-evenly'
}
const productNavListStyle = {
    listStyle: 'none',
}
const productButtonStyle = {
    textDecoration: 'none',
    color: '#000',
    padding: '0.75rem 2rem',
    border: '1px solid #B5B5B5'
}

module.exports = { showStyle, productStyle, productNavULStyle, productNavListStyle, productButtonStyle }