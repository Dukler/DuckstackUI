export function objectRequired(props, propName, componentName) {
    if (!/object/.test(props[propName])) {
        return new Error(`${propName} object not found in the component id: ${props.id}.`);
    }
}