import React from 'react'

const {
    itemStyle,
    headerStyle,
    titleHeaderStyle,
    subTitleHeaderStyle,
    anchorStyle
} = require('../../../styles/itemStyle')

const Item = ({ product }) => {
    return (
        <div style={itemStyle(product.imgPath)} className="item-listing">
            <h3 style={titleHeaderStyle}>{product.name}</h3>
            <div style={{ position: 'relative', width: '90%', height: '1px', backgroundColor: '#fff', margin: '0.25rem' }} />
            <h4 style={subTitleHeaderStyle}>${product.price}</h4>
            <h4 style={subTitleHeaderStyle}>{product.stock > 0 ? `Stock: ${product.stock}` : 'Out of Stock!'}</h4>
            <a style={anchorStyle} href={`${process.env.PRODUCT_API}/${product.name}`}></a>
        </div>
    )
}

export default Item;