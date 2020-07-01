import React from "react";
import useContainer from "./../../../Hooks/Component/useContainer";
import Container from "./Container";
import Item from "./Item";

function ResponsiveLayout({
    children,
    container = false,
    item = false,
    ...rest
}) {
    const {componentsState, containerState} = rest;
    const {All} = useContainer({
        componentsState,
        containerState,
        parents: ["All"],
    });

    return (
        <Container>
            {All.map((item, index) => {
                return (
                    <Item
                        key={index}
                        static={
                            !containerState.extProperties.Responsive[item.key]
                        }
                    >
                        {All[index]}
                    </Item>
                );
            })}
        </Container>
    );
}

export default ResponsiveLayout;
