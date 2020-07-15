import React, { Component } from 'react';
import {connect} from 'react-redux';
import CheckoutListItem from '../CheckoutListItem/CheckoutListItem'

class Checkout extends Component {

    handleCheckout = () => {
        // TODO: Clear the cart and navigate to the product page
        this.props.dispatch({type: 'CLEAR_CHECKOUT'});

    }

    render() {
        return (
            <div>
                <h2>Checkout</h2>
                {/* TODO: Display items in the cart */}
                <ul>
                   {this.props.reduxState.checkoutReducer.map((product, i) => {
                       return (
                           <CheckoutListItem key={i} product={product} />
                       );
                   })} 
                </ul>
                <button onClick={this.handleCheckout}>Checkout</button>
            </div>
        )
    }
}

// This function says what to put on Component props
const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(Checkout);
