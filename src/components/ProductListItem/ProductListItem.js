import React, { Component } from 'react';
import {connect} from 'react-redux';


class ProductListItem extends Component {

    state = {
      name: this.props.product.name,
      price: this.props.product.price
    }

    addProductToCart = () => {
        console.log(this.props.product);
        // TODO: Dispatch here
        this.props.dispatch({type: 'ADD_TO_CHECKOUT', payload: this.state});
        
    }

    render() {
        return (
            <li>
                {this.props.product.name}: {this.props.product.price} <button onClick={this.addProductToCart}>Add to Cart</button>
            </li>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(ProductListItem);