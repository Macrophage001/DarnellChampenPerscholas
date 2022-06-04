const itemStyle = (imgPath) => ({
    position: 'relative',
    margin: '0.5rem',
    padding: '1rem',

    background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(${imgPath})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

    width: '10vw',
    height: '16vh',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',

    boxShadow: '0 0 12px #B5B5B5'
})

const headerStyle = {
    margin: 0,
    padding: 0,
    color: '#fff'
}
const titleHeaderStyle = {
    ...headerStyle,
    fontSize: '16px'
}
const subTitleHeaderStyle = {
    ...headerStyle,
    fontSize: '14px'
}

const anchorStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%'
}

module.exports = { itemStyle, titleHeaderStyle, subTitleHeaderStyle, headerStyle, anchorStyle }