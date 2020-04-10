import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePurchaseState = () => {
    const sum = Object.keys(this.props.ingredients)
      .map((igKey) => this.props.ingredients[igKey])
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push("/checkout");
  };

  render() {
    const disabledInfo = {
      ...this.props.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {!this.props.ingredients ? (
            <Spinner />
          ) : (
            <OrderSummary
              ingredients={this.props.ingredients}
              price={this.props.totalPrice}
              confirmOrder={this.purchaseContinueHandler}
              cancelOrder={this.purchaseCancelHandler}
            />
          )}
        </Modal>
        {this.props.ingredients ? (
          <Aux>
            <Burger ingredients={this.props.ingredients} />
            <BuildControls
              ingredientAdded={this.props.onIngredientAdded}
              ingredientRemoved={this.props.onIngredientRemoved}
              disabled={disabledInfo}
              price={this.props.totalPrice}
              purchasable={this.updatePurchaseState()}
              ordered={this.purchaseHandler}
            />
          </Aux>
        ) : this.props.error ? (
          <h2 style={{ textAlign: "center" }}>
            Ingredients could not be fetched!
          </h2>
        ) : (
          <Spinner />
        )}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingredientName) =>
      dispatch(actionCreators.addIngredient(ingredientName)),
    onIngredientRemoved: (ingredientName) =>
      dispatch(actionCreators.removeIngredient(ingredientName)),
    onInitIngredients: () => dispatch(actionCreators.initIngredients()),
    onInitPurchase: () => dispatch(actionCreators.purchaseInit()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
