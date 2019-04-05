import AsyncWrapper from "../BeLazy/AsyncWrapper";

export function isLowerCase(str)
{
    return str === str.toLowerCase() && str !== str.toUpperCase();
}
export const getWrapper = (wrapper) =>{
    let Wrapper = null;
    let isHtml = false;
    if (isLowerCase(wrapper.charAt(0))){
        Wrapper = `${wrapper}`;
        isHtml = true;
    } else{
        Wrapper = AsyncWrapper({
            componentName: wrapper
        });   
    }
    return [Wrapper, isHtml]
};