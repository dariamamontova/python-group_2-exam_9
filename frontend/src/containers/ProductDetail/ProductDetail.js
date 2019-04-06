import React, {Component, Fragment} from 'react'
import {NavLink} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import ProductCategories from "../../components/ProductCategories/ProductCategories"
import {loadProduct, loadCategories} from "../../store/actions/product-detail";
import ProductCard from "../../components/ProductCard/ProductCard";


class ProductDetail extends Component {

    componentDidMount() {
        this.props.loadProduct(this.props.match.params.id);
    }


    render() {
        if (!this.props.product.product) return null;
        const {name, id, description, price, categories, photos} = this.props.product.product;

        return <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}</p>
            {categories.length > 0 ? <ProductCategories categories={categories}/> : null}
            <div className='row'>
                {photos.map(photo => {
                    return <div className='col-xs-12 col-sm-3 col-lg-4 mt-3 w-50' key={photo.id}>
                        <img src={photo.photo} alt=""/>
                    </div>
                })}
            </div>

        </div>;
    }
}

const mapStateToProps = state => ({
    product: state.productDetail
})


const mapDispatchToProps = dispatch => ({
    loadProduct: (id) => dispatch(loadProduct(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);