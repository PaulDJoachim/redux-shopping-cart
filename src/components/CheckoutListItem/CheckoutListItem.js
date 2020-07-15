import React, { Component } from 'react';
import {connect} from 'react-redux';


class CheckoutListItem extends Component {


    render() {
        return (
            <li>
                {this.props.product.name}: {this.props.product.price}
            </li>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(CheckoutListItem);