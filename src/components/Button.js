import React from 'react';
const  Buttons = (props) => {
    const classes = `btn ${props.variant}`
    return (
        <>
            <button style={{width: '40%'}} type={props.type} className={classes} onClick={props.handler}>{props.value}</button> 
            
        </>
    )
}
export default Buttons;
