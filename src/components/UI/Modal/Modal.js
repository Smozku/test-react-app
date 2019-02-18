import React, {Fragment} from 'react';
import classes from './Modal.css';

const Modal = (props) => {

    let displayModal = {
        transform: props.show ? 'translateY(0)' : 'translateY(-200vh)'
    }

    return (
        <Fragment>
            <div className={props.show ? classes.Backdrop : null} onClick={props.handleModal}>
            </div>
            <div className={classes.ModalWrapper} style={displayModal}>
                <div className={classes.Modal} >
                    <span onClick={props.handleModal} className={classes.close}>&times;</span>
                    {props.children}
                </div>
            </div>
        </Fragment>  
    )
};

export default Modal;