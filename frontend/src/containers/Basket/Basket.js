import React, {Fragment, Component} from 'react'
import connect from "react-redux/es/connect/connect";

class Basket extends Component {

    render() {
        console.log('...', this.props);
        return <Fragment>
            <div className='row'>
                {this.props.products.map(product => {
                    return <div className='mt-3' key={product.id}>
                        <p>{product.name}</p>
                    </div>
                })}
            </div>
        </Fragment>
    }
}

const mapStateToProps = (state) => state.basket;


const mapDispatchToProps = () => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(Basket);