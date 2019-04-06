import React, {Fragment, Component} from 'react'
import {loadProduct} from "../../store/actions/product-detail";
import connect from "react-redux/es/connect/connect";

class Basket extends Component {
    render() {
        return <Fragment>
            <div className='row'>
                {this.props.basket.products.map(product => {
                    return <div className='col-xs-12 col-sm-6 col-lg-4 mt-3' key={product.id}>
                        <div>{product.name}</div>
                    </div>
                })}
            </div>
        </Fragment>
    }
}

const mapStateToProps = (state) => ({
        basket: state.basket
});

const mapDispatchToProps = (dispatch) => ({
    loadProduct: (id) => dispatch(loadProduct(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Basket);