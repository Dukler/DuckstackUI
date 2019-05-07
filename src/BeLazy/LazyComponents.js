import LazyComponent from './LazyComponent';


const LazyComponents = props => {
    try {
        const pool = {};
        Object.keys(props).forEach(component => {
            pool[component] = LazyComponent({
                className: component,
                root: props[component]
            });
        })
        return pool;
    } catch (error) {
        console.log("error in component pool")
    }
    
};

export default LazyComponents;