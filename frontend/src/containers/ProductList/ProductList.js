import React, {Fragment, Component} from 'react'
import ProductCard from "../../components/ProductCard/ProductCard"
import {connect} from "react-redux";


class ProductList extends Component {
    componentDidMount() {

    }


    render() {
        return <Fragment>
            <div className='row'>
                {this.props.productList.products.map(movie => {
                    return <div className='col-xs-12 col-sm-6 col-lg-4 mt-3'  key={product.id}>
                        <MovieCard product={product}/>
                    </div>
                })}
            </div>
        </Fragment>
    }
}

export default ProductList