import React from 'react'

const Header = ({ title, links }) => {
    const { headerMain, headerStyleTop, headerStyleBottom, navStyle, listStyle, anchorStyle } = require('../../styles/headerStyle')

    return (
        <div style={headerMain}>
            <div style={headerStyleTop}>
                <h2 style={{color: '#FFF', textAlign: 'center', margin: 0, padding: '1rem'}}>{title}</h2>
            </div>
            <div style={headerStyleBottom}>
                <nav>
                    <ul style={navStyle}>
                        {links && links.map((link, i) => <li key={i} style={listStyle}> <a style={anchorStyle} href={link.link}>{link.title}</a> </li>)}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

module.exports = Header