import React from 'react';
import Button from '@material-ui/core/Button';

const CustomButton =  props => {
    return (
        <Button onClick={props.handleSubmit}
                variant="contained"
                color="primary">
            {props.attributes.caption}
        </Button>
    )
};
export default CustomButton;
