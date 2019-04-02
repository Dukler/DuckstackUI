import React from 'react';
import Button from '@material-ui/core/Button';

const SubmitButton = props => {
    return (
        <Button onClick={props.handleSubmit}
                variant="contained"
                color="primary">
            {props.caption}
        </Button>
    )
};
export default SubmitButton;
