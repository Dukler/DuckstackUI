import React, {useEffect} from 'react';
import MModal from '@material-ui/core/Modal';
import { isAbsolute } from 'path';
import { makeStyles } from '@material-ui/core/styles';


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

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing(50),
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
    }
}));
const Modal = React.memo(function Modal (props) {
    const { children, state, dispatch } = props;
    const classes = useStyles();

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


export default Modal;