import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const Burger = (props) => {
    // const transformedIngredients = Object.keys(props.ingredients);
    // console.log(transformedIngredients);

    // const addedIngredients = Object.entries(props.ingredients)
    // .map(entry => {
    //     let igName = entry[0];
    //     let igValue = entry[1];
    //     return [...Array(igValue)].map((_, i) => {
    //         return <BurgerIngredient key={igName + i} type={igName} />
    //     });   
    // });

    let addedIngredients = Object.entries(props.ingredients)
    .map(entry => {
        let igName = entry[0];
        let igValue = entry[1];

        const burgerIg = (name, value) =>  {
            let burger = [];
            for (let i = 1; i <= value; i++) {
            burger.push(<BurgerIngredient key={name + i} type={name} />);
            }
            return burger;
        }
        return burgerIg(igName, igValue);
    })
    .reduce((prev, curr) => {
        return prev.concat(curr);
    }, []);
    
    if (addedIngredients.length === 0 ){
        addedIngredients = <p>Please start adding ingredients</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {addedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;