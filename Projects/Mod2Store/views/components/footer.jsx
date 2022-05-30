import React from 'react'

const Footer = () => {
    const footerStyle = {
        position: 'relative',
        bottom: '-65vh',
        width: '100%',
        height: '10vh',
        backgroundColor: '#131921'
    }

    return (
        <div style={footerStyle} className="footer"></div>
    )
}

module.exports = Footer