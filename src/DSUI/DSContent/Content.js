import React from 'react';
import {Route} from "react-router-dom";
import WidgetList from "../DSWidgets/WidgetList";
import {compose} from "recompose";
import Widget from "../DSWidgets/Widget";
import {hasProps, isList} from "../DSComposer/Composer";
import {hasData} from "../DSComposer/hasData";


export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        };
        this.setContainer = this.setContainer.bind(this);
    }
    setContainer(List){
        this.setState({list:List});
    }
    getList(){
        return this.state.list;
    }
    componentDidMount() {
    }
    render() {
        const attributes = this.props.attributes;
        let container = {
            list: this.state.list,
            set: this.setContainer,
            handleSubmit: this.props.handleSubmit
        };
        let Widgets = compose(
            hasProps({
                filter:attributes.id,
                className:"Widgets",
                item:new Widget({attributes:{}})
            }),
            hasData({
                url: "ui/update/Login",
                params: {
                    _limit: 10,
                    page: 2
                },
                loadingMessage: 'Loading posts from JSON Placeholder...'
            }),
            isList("widget")
        )(Widget);
        return (
                <Route id ={attributes.id} exact path={attributes.path} render={()=>
                    <>
                        <h2>{attributes.caption}</h2>
                        <Widgets/>
                    </>
                }/>
        );
        // return (
        //     <Route id ={attributes.id} exact path={attributes.path} component={
        //         <WidgetList url = {this.props.url}
        //                     filter={attributes.id}
        //                     container={container}/>
        //     }/>
        // );
    }
}