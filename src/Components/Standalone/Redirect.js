import React from 'react'
import { Redirect as RedirectRouter } from "react-router-dom";

const Redirect = ({ route }) => {

    return (
        <RedirectRouter to={route} />
    )
}
export default Redirect
