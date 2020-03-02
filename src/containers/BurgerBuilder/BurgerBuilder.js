import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 10,
    cheese: 15,
    meat: 40,
    bacon: 20
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 10,
        purchasable: false,
        purchasing: false,
        loading: false
    };

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map((igKey) => ingredients[igKey])
            .reduce((sum, el) => { return sum + el;}, 0);
        this.setState({
            purchasable: sum > 0
        });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = oldCount + 1;
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = oldCount - 1;
            const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: updatedPrice
            });
            this.updatePurchaseState(updatedIngredients);
        }
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    purchaseConfirmHandler = () => {
        this.setState({
            loading: true
        });

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'John Smith',
                address: {
                    house: 'A-51',
                    street: 'Bakers Street',
                    zipCode: '142312',
                    country: 'United Kingdom'
                }
            },
            deliveryMethod: 'Lightning'
        };
        
        axios.post('/orders.json', order).then((response) => {
            this.setState({
                purchasing: false,
                loading: false
            });
            console.log(response);
        }).catch((error) => {
            this.setState({
                purchasing: false,
                loading: false
            });
            console.log(error);
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = (disabledInfo[key] <= 0);
        }
        
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    { this.state.loading ? 
                        <Spinner /> :  
                        <OrderSummary
                            ingredients={this.state.ingredients}
                            price={this.state.totalPrice}
                            confirmOrder={this.purchaseConfirmHandler}
                            cancelOrder={this.purchaseCancelHandler} />
                    }
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);