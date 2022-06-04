import React from 'react'

import Item from './item';

const { itemListingGridStyle } = require('../../../styles/contentStyle')

const ItemListing = (props) => (
    <div style={itemListingGridStyle} className="item-listing-grid">
        {props.products && props.products.map((product, i) => <Item key={i} index={i} product={product} />)}
    </div>
);

export default ItemListing;