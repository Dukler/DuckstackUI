import AsyncWrapper from "../BeLazy/AsyncWrapper";

function isLowerCase(str)
{
    return str === str.toLowerCase() && str !== str.toUpperCase();
}
export const getWrapper = name =>{
    let Container = null;
    if (isLowerCase(name.charAt(0))){
        Container = `${name}`;
    } else{
        Container = AsyncWrapper({
            componentName:name
        });
    }
    return Container
};