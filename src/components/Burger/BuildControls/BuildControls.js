import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Burger Price: <strong>{props.price / 100} $</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            type={ctrl.type}
            addIngredientHandler={props.addIngredientHandler}
            removeIngredientHandler={props.removeIngredientHandler}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.checkoutState}
        >ORDER NOW</button>
    </div>
);

export default BuildControls;