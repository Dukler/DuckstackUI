// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';

// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();

//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }

// const styles = theme => ({
//     paper: {
//         position: 'absolute',
//         width: theme.spacing.unit * 50,
//         backgroundColor: theme.palette.background.paper,
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing.unit * 4,
//         outline: 'none',
//     },
// });
// const DSModal = React.memo(function DSModal(props) {
//     const [state, setState] = useState({ open: false });

//     const handleOpen = () => {
//         setState({ open: true });
//     };

//     const handleClose = () => {
//         setState({ open: false });
//     };
//     const { classes, children } = props;

//     return (
//         <div>
//             <Button onClick={handleOpen}>Open Modal</Button>
//             <Modal
//                 aria-labelledby="simple-modal-title"
//                 aria-describedby="simple-modal-description"
//                 open={state.open}
//                 onClose={handleClose}
//             >
//                 <div style={getModalStyle()} className={classes.paper}>
//                     {children}
//                     <DSModalWrapped />
//                 </div>
//             </Modal>
//         </div>
//     );
// });

// DSModal.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// // We need an intermediary variable for handling the recursive nesting.
// const DSModalWrapped = withStyles(styles)(DSModal);

// export default DSModalWrapped;