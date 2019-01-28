import React from 'react';
import {Route} from "react-router-dom";
import {compose} from "recompose";
import {hasProps, isList} from "../DSComposer/Composer";
import Widget from "../DSWidgets/Widget";

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.widgets = compose(
            hasProps({
                filter:this.props.id,
                className:"Widgets",
                actions:this.props.actions
            }),
            isList({type:"widget",tag:'div'})
        )(Widget);
    }

    render() {
        // let Widgets = compose(
        //     hasProps({
        //         filter:this.props.id,
        //         className:"Widgets",
        //         data:this.props.data,
        //         actions:this.props.actions
        //     }),
        //     isList({type:"widget",tag:'div'})
        // )(Widget);
        return (
            <Route id={this.props.id} exact path={this.props.path} component={
                    this.widgets
            }/>
        );
    }
};