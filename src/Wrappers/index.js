//import AsyncWrapper from "../BeLazy/AsyncWrapper";
import LazyComponent from './../BeLazy/LazyComponent';

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
        Wrapper = LazyComponent({
            className: wrapper.className,
            root:"Wrappers",
            type: wrapper.classType
        });   
    }
    return [Wrapper, isHtml]
};