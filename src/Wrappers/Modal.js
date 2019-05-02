import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MModal from '@material-ui/core/Modal';
import { isAbsolute } from 'path';



function getModalStyle() {

    return {
        // top: `${top}%`,
        // margin:'auto',
        // left: `${left}%`,
        // transform: `translate(-${top}%, -${left}%)`,
        position: isAbsolute,
        top: `${'50'}%`,
        left: `${'50'}%`,
        transform: `translate(-${'50'}%, -${'50'}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    }
});
const Modal = React.memo(function Modal (props) {
    const { classes, children, state, dispatch } = props;

    useEffect(() => {
        dispatch({type:"OPEN"})
    })

    const handleClose = () => {
        dispatch({ type: "CLOSE" })
    };
    
    return (
        <div>
            <MModal
                className="modal"
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={state.open}
                onClose={handleClose}
                disableBackdropClick={true}
                style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div style={getModalStyle()} className={classes.paper}>
                    {children}
                </div>
            </MModal>
        </div>
    );
});

Modal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
//const DSModalWrapped = withStyles(styles)(DSModal);

export default withStyles(styles)(Modal);