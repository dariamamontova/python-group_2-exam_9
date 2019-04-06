import React, {Component, Fragment} from 'react'
import connect from "react-redux/es/connect/connect";
import ProductCategories from "../../components/ProductCategories/ProductCategories"
import {loadProduct, loadCategories} from "../../store/actions/product-detail";
import {addProduct} from "../../store/actions/basket"

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
                    return <div className='w-25 m-3 ' key={photo.id}>
                        <img className="w-100" src={photo.photo} alt=""/>
                    </div>
                })}
            </div>
            <button onClick={() => this.props.addProduct(id)}>Добавить в корзину</button>
            <button>Оформить заказ</button>

        </div>;
    }
}

const mapStateToProps = state => ({
    product: state.productDetail
})


const mapDispatchToProps = dispatch => ({
    loadProduct: (id) => dispatch(loadProduct(id)),
    addProduct: (id) => dispatch(addProduct(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);