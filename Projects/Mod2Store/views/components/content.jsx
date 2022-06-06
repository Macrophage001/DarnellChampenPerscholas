import React from 'react'

const { contentStyle } = require('../../styles/contentStyle')

const Content = (props) => {
    return (
        <div style={contentStyle}>
            {props.children}
        </div>
    )
}

export default Content