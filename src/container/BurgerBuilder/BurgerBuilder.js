import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 50,
    cheese: 60,
    meat: 120,
    bacon: 70
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 400,
        purchasable: false,
        checkoutState: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
                    .map(igKey => {
                        return ingredients[igKey]
                    })
                    .reduce((sum, el) => {
                        return sum + el;
                    }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const igs = {...this.state.ingredients};
        igs[type] = igs[type] + 1;

        const igsPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + igsPrice;
        this.setState({ ingredients: igs, totalPrice: newPrice });
        this.updatePurchaseState(igs);
    }

    removeIngredientHandler = (type) => {
        const igs = {...this.state.ingredients};
        if(igs[type] < 1) {
            return;
        } else {
            igs[type] -= 1;
        }

        const igsPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - igsPrice;

        this.setState({ ingredients: igs, totalPrice: newPrice });
        this.updatePurchaseState(igs);
    }

    checkoutStateHandler = () => {
        this.setState({ checkoutState: true });
    }

    handleModal = () => {
        this.setState({ checkoutState: false });
    }

    purchaseContinueHandler = () => {
        alert('Continue!');
    }

    render() {
        const disabledButton = {
            ...this.state.ingredients
        };
        for (let key in disabledButton) {
            disabledButton[key] = disabledButton[key] <= 0
        }
        return (
            <Fragment>
                <Modal show={this.state.checkoutState} handleModal={this.handleModal}>
                    <OrderSummary 
                        price={this.state.totalPrice}
                        purchaseCanceled={this.handleModal}
                        purchaseContinue={this.purchaseContinueHandler}
                        ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                price={this.state.totalPrice} 
                addIngredientHandler={this.addIngredientHandler} 
                removeIngredientHandler={this.removeIngredientHandler}
                disabled={disabledButton}
                purchasable={this.state.purchasable}
                checkoutState={this.checkoutStateHandler}
                />
            </Fragment>
        );
    }
}

export default BurgerBuilder;