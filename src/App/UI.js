import { MuiThemeProvider } from "@material-ui/core";
import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import DynamicList from "../Components/DynamicList";
import { constants } from '../Constants';
import useListData from "../Hooks/useListData";
import { dsTheme } from "../Utils/dsTheme";

const UI = React.memo(function UI() {
    const [loading] = useListData(constants.ui.home);
    const mapState = useCallback(
        state => ({
            theme: state["theme"]
        })
    );
    const { theme } = useMappedState(mapState);

    return (
        <div className='UI'>
            {(loading) ? null :
                <MuiThemeProvider theme={dsTheme(theme)}>
                    <DynamicList
                        className="components"
                        wrapper="root"/>
                </MuiThemeProvider>
            }
        </div>
    )
})

export default UI