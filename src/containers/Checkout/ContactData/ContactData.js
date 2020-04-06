import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: this.state.name,
        address: this.state.address,
      },
      deliveryMethod: "Lightning",
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({
          loading: false,
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
        console.log(error);
      });
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h3>Enter Your Contact Data</h3>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <form>
            <Input
              inputtype="input"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <Input
              inputtype="input"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <Input
              inputtype="input"
              type="text"
              name="street"
              placeholder="Street"
            />
            <Input
              inputtype="input"
              type="number"
              name="postalCode"
              placeholder="Postal Code"
            />
            <Button buttonType="Success" clicked={this.orderHandler}>
              ORDER
            </Button>
          </form>
        )}
      </div>
    );
  }
}

export default ContactData;
