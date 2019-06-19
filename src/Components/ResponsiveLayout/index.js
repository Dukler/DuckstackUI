import React from "react";


function ResponsiveLayout({ children,
    container = false,
    item = false,
    ...rest
}) {
    const Render = container ? require('./Container').default : require('./Item').default;

    return (
        <Render {...rest}>
            {children}
        </Render>
        // React.createElement(ThisShit)
        // <div ref={ref} style={style}>{children}</div>
    );
}


export default ResponsiveLayout;
