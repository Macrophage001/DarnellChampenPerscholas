import React from 'react'

const { contentStyle } = require('../../styles/contentStyle')

const Content = ({ component }) => {
    return (
        <div style={contentStyle}>
            {component}
        </div>
    )
}

export default Content