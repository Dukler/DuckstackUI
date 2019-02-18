import React from "react";
import {hasProps, isList} from "../DSComposer/Composer";
import {compose} from "recompose";
import Content from "../DSContent/Content";
import Menu from "../DSNavMenu/Menu";

const NavMenu = (props) =>{
  return  compose(
      hasProps({
          className:"NavMenu",
          actions:props.actions
      }),
      isList({type:"header",tag:'ul'})
  )(Menu)();
};
const ContentList = (props) =>{
    return compose(
        hasProps({
            className:"Content",
            actions:props.actions
        }),
        isList({type:"content",tag:'div'}),
    )(Content)();
};
export default class Screen extends React.Component {
//export const Screen = props => {
    // const NavMenu = compose(
    //     hasProps({
    //         className:"NavMenu",
    //         actions:props.actions
    //     }),
    //     isList({type:"header",tag:'ul'})
    // )(Menu);
    // const ContentList = compose(
    //     hasProps({
    //         className:"Content",
    //         actions:props.actions
    //     }),
    //     isList({type:"content",tag:'div'}),
    // )(Content);
    render(){
        return (
            <div>
                <NavMenu{...this.props}/>
                <ContentList{...this.props}/>
            </div>
        );
    }
};