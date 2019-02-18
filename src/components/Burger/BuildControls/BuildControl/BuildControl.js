import React, {Component} from 'react';
import classes from './BuildControl.css';

class BuildControl extends Component {

    handleMoreClick = () => {
        this.props.addIngredientHandler(this.props.type);
    }

    handleLessClick = () => {
        this.props.removeIngredientHandler(this.props.type);
    }

    render() {
        return (
            <div className={classes.BuildControl}>
                <div className={classes.Label}>{this.props.label}</div>
                <button className={classes.Less}
                disabled={this.props.disabled} 
                onClick={this.handleLessClick}>Less</button>
                <button className={classes.More} 
                onClick={this.handleMoreClick}>More</button>
            </div>
        )
    }
};

export default BuildControl;