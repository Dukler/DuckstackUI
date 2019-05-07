export function isLowerCase(str)
{
    return str === str.toLowerCase() && str !== str.toUpperCase();
}
export const getWrapper = (props) =>{
    let Wrapper = null;
    let isHtml = false;
    const {wrapper, instance} = props; 
    if (isLowerCase(wrapper.className.charAt(0))){
        Wrapper = `${wrapper.className}`;
        isHtml = true;
    } else{
        Wrapper = instance;
    }
    return [Wrapper, isHtml]
};