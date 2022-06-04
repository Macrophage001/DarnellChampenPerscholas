import React from 'react'

const Footer = () => {
    const footerStyle = {
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '8vh',
        backgroundColor: '#131921',
        boxShadow: '0 0 8px black'
    }

    return <div style={footerStyle} className="footer"></div>
}

export default Footer