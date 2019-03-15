import AsyncContainer from "../BeLazy/AsyncContainer";

function isLowerCase(str)
{
    return str == str.toLowerCase() && str != str.toUpperCase();
}
export const getContainer = name =>{
    let Container = null;
    if (isLowerCase(name.charAt(0))){
        Container = `${name}`;
    } else{
        Container = AsyncContainer({
            componentName:name
        });
    }
    return Container
};