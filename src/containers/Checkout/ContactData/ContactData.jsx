import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Wrapper from './ContactDataStyled';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    const { history, totalPrice } = this.props;
    const { ingredients } = this.state;
    this.setState({ loading: true });
    const order = {
      ingredients,
      totalPrice: totalPrice.toFixed(2),
      customer: {
        name: 'Eugene Furmanov',
        address: {
          street: 'Lenina, 23',
          zipCode: '220113',
          country: 'New Zealand'
        },
        email: 'oleg@gmail.com'
      },
      deliveryMethod: 'fastest'
    };
    axios
      .post('http://localhost:3000', order)
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
    console.log(this.props.ingredients);
  };

  render() {
    return (
      <Wrapper>
        <h4>Enter your Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postal" placeholder="Postal Code" />
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </Wrapper>
    );
  }
}

export default ContactData;
