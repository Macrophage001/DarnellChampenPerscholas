import React from 'react'

const Header = ({ title, links }) => {
    const { headerMain, headerTextStyle, navStyle, listStyle, anchorStyle } = require('../../styles/headerStyle')

    return (
        <div style={headerMain}>
            <h1 style={headerTextStyle}>{title}</h1>
            <nav style={{ backgroundColor: '#232f3e', margin: '-0.75rem', padding: '0.5rem 0' }}>
                <ul style={navStyle}>
                    {
                        links && links.map((link, i) => <li key={i} style={listStyle}> <a style={anchorStyle} href={link.link}>{link.title}</a> </li>)
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Header