import React from 'react';
import Card from "../UI/Card/Card";

const ProductCard = props => {
    const {product} = props;

    const {name, id} = product;
    const {photo} = product.photos

    const link = {
        text: 'Read more',
        url: '/products/' + id
    };

    return <Card header={name} image={photo} link={link} className='h-100'/>;
};


export default ProductCard;