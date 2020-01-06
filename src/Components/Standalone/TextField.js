import React, { useCallback } from "react";
import MTextField from "@material-ui/core/TextField";
import useStandalone from "../../Hooks/State/useStandalone";
import { makeStyles } from "@material-ui/core/styles";
import { objectRequired } from "../../Utils/customProptypes";

const useStyles = makeStyles(theme => ({
	textField: props => ({
		...props
	})
}));

function TextField(props) {
	const classes = useStyles(props.styles);
	const [state, dispatch] = useStandalone(props.id);
	const { ...extras } = state.extProperties;

	const handleChange = useCallback(
		action => event => {
			event.persist();

			dispatch({
				type: action.type,
				payload: { ...action.payload, event, id: state.id }
			});
		},
		[dispatch, state.id]
	);

	const handleFocus = useCallback(event => {
		event.stopPropagation();
	}, []);

	return (
		<MTextField
			id={state.id}
			className={classes.textField}
			// value={state.value ? state.value : ""}
			value={state.value}
			onChange={handleChange({ type: "INPUT_VALUE" })}
			{...extras}
			onFocus={handleFocus}
		/>
	);
}

TextField.propTypes = {
	styles: objectRequired
};

export default TextField;
