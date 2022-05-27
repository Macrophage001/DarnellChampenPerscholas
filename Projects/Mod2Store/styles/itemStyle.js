const itemStyle = (imgPath) => ({
    position: 'relative',
    margin: '0.5rem',
    padding: '1rem',

    background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(${imgPath})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
    border: '4px solid #fff',
    borderTopLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    
    width: '16vw',
    height: '20vh',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end'
})

const headerStyle = {
    margin: 0,
    padding: 0,
    color: '#fff'
}

const anchorStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%'
}
module.exports = { itemStyle, headerStyle, anchorStyle }