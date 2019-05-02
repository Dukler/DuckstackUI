//import AsyncWrapper from "../BeLazy/AsyncWrapper";
import AsyncComponent from './../BeLazy/AsyncComponent';

export function isLowerCase(str)
{
    return str === str.toLowerCase() && str !== str.toUpperCase();
}
export const getWrapper = (wrapper) =>{
    let Wrapper = null;
    let isHtml = false;
    if (isLowerCase(wrapper.className.charAt(0))){
        Wrapper = `${wrapper.className}`;
        isHtml = true;
    } else{
        Wrapper = AsyncComponent({
            className: wrapper.className,
            root:"Wrappers",
            type: wrapper.classType
        });   
    }
    return [Wrapper, isHtml]
};