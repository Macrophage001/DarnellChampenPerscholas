const formStyle = {
    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',

    width: '50%',
    margin: 'auto',

    alignSelf: 'center',
    alignItems: 'center',

    boxShadow: '0 0 12px #B5B5B5'
}
const formInputStyle = {
    border: '1px solid #B5B5B5',
    width: '14rem',
    margin: '0.25rem 0',
    height: '2rem'
}
const textAreaStyle = {
    ...formInputStyle,
    height: '4rem',
    minHeight: '4rem'
}

const inputSubmitStyle = {
    border: '1px solid #B5B5B5',
    width: '14rem',
    margin: '0.25rem 0',
    height: '2rem'
}

const inputLabelStyle = {
    fontSize: '12px',
    fontWeight: 'bold'
}

const divInputStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start'
}

module.exports = { formStyle, formInputStyle, textAreaStyle, inputSubmitStyle, inputLabelStyle, divInputStyle }