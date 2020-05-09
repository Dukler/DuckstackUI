import React, {useEffect} from "react";

// export default function LazyHooker(WrappedComponent) {
//     return class extends React.Component {
//         // componentDidMount = async() => {
//         //     console.log(this.props);
//         // }
//         // componentDidUpdate(prevProps) {
//         //     console.log("Current props: ", this.props);
//         //     console.log("Previous props: ", prevProps);
//         // }
//         render() {
//             // Wraps the input component in a container, without mutating it. Good!
//             return <WrappedComponent {...this.props} />;
//         }
//     };
// }
const LazyHooker = (Component) => {
    // const randomNum = Math.floor(Math.random() * 100);
    // console.log(Component);
    // return component({...props});
    useEffect(() => {
        console.log("asd");
    }, []);
    return <Component />;
};

export default LazyHooker;
