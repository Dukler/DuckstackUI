import React, { useCallback } from 'react';
import MButton from '@material-ui/core/Button';
import { objectRequired } from '../../../Utils/customProptypes';
import { makeStyles } from "@material-ui/core/styles";
import useActions from '../../../Hooks/Actions/useActions';

const useStyles = makeStyles(theme => ({
  button: props => ({
    ...props
  })
}));

function TextButton(props) {
  const classes = useStyles(props.styles);
  const [actionDispatch] = useActions()

  const handleClick = useCallback(
    (props) =>
      (event) => {
        event.persist();
        // dispatch({ type: "SUBMIT_JSON", payload: { filter, post } })
        actionDispatch({
          type: "SUBMIT_WRAPPER_VALUES",
          payload: {
            id: "loginForm",
            callback: {
              type: "SAVE_LOGIN_TOKEN"
            }
          }
        })
        // actionDispatch({
        //   type: "REFRESH"
        // })
      },
    [actionDispatch]
  );
  const { label, ...extras } = props.extProperties;

  const { actions } = props;

  return (
    <MButton
      className={classes.button}
      onClick={handleClick({
        ids: ["userName", "userPassword"],
        action: actions.onClick
      })}
      {...extras}
    >
      {label}
    </MButton>
  );
};

TextButton.propTypes = {
  styles: objectRequired
};

export default TextButton;
