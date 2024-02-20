import React from "react";
import classes from './MyInput.module.css';

 const MyInput = React.forwardRef((props, ref) => {
    return (
        <input type="text" ref={ref} className={classes.myInput} {...props} />
    )
})

export default MyInput;