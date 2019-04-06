import React, {Fragment, Component} from 'react'
import ProductCard from "../../components/ProductCard/ProductCard"
import {connect} from "react-redux";
import {loadProducts} from "../../store/actions/product-list";

class ProductList extends Component {

    componentDidMount() {
        this.props.loadProducts();
    }

    render() {
        return <Fragment>
            <div className='row'>
                {this.props.productList.products.map(product => {
                    return <div className='col-xs-12 col-sm-6 col-lg-4 mt-3' key={product.id}>
                        <ProductCard product={product}/>
                    </div>
                })}
            </div>
        </Fragment>
    }

}

const mapStateToProps = (state) => ({
        productList: state.productList
});

const mapDispatchToProps = (dispatch) => ({
    loadProducts: () => dispatch(loadProducts())
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);