import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-mail",
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Zip Code",
        },
        value: "",
      },
      country: {
        elementType: "input",
        type: "text",
        elementConfig: {
          placeholder: "Country",
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        type: "text",
        elementConfig: {
          options: [
            { value: "Standard", displayName: "Standard" },
            { value: "Express", displayName: "Express" },
            { value: "Lightning", displayName: "Lightning" },
          ],
        },
        value: "",
      },
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

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = {
      ...this.state.orderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({
      orderForm: updatedOrderForm,
    });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    return (
      <div className={classes.ContactData}>
        <h3>Enter Your Contact Data</h3>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <form>
            {formElementsArray.map((formElement) => (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event) =>
                  this.inputChangedHandler(event, formElement.id)
                }
              />
            ))}
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
