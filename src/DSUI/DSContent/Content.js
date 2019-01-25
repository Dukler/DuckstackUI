import React from 'react';
import {Route} from "react-router-dom";
import WidgetList from "../DSWidgets/WidgetList";


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
        return (
                <Route id ={attributes.id} exact path={attributes.path} render={()=>
                    <>
                        <h2>{attributes.caption}</h2>
                        <WidgetList url = {this.props.url}
                                    filter={attributes.id}
                                    container={container}/>
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