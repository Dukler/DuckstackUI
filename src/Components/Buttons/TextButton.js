import React, { useCallback } from 'react';
import MButton from '@material-ui/core/Button';
import { useDispatch } from 'redux-react-hook';
import { objectRequired } from '../../Utils/customProptypes';

const TextButton = props => {
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
    <MButton
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
