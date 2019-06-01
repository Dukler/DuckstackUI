import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'redux-react-hook';
import { objectRequired } from '../Utils/customProptypes';

const SubmitButton = props => {
  const filter = ["tes2", "tes3"]
  const dispatch = useDispatch()

  const post = (json) => {
    console.log(json);
  }

  const handleClick = useCallback(
    (props) =>
      (event) => {
        event.persist();
        dispatch({ type: "SUBMIT_JSON", payload: { filter, post } })
        //const json = getPairByIds({ ids: props.ids, pair: props.pair });
        //eventHandler[props.action]({ json });
      },
    [dispatch, filter]
  );
  const { label, ...extras } = props.extProperties;

  const { actions } = props;

  return (
    <Button
      onClick={handleClick({
        ids: ["userName", "userPassword"],
        action: actions.onClick
      })}
      {...extras}
    >
      {label}
    </Button>
  );
};

SubmitButton.propTypes = {
  styles: objectRequired
};

export default SubmitButton;
