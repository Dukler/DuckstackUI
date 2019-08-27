import { isLoggedIn, getLoginToken } from "./auth";

export async function requestUI(url) {
    let config
    const header = isLoggedIn() ? { 'Authorization': getLoginToken() } : null;
    config = {
        // header: new Headers({
        //     'Authorization': 'Bearer ' + localStorage.getItem('bToken'),
        // })
        headers: new Headers({
            ...header
        })
    }
    return fetch(url, config)
        .then(response => response.json())
}

export async function submitJson({ url, body }) {
    let config
    config = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    }
    return fetch(url, config)
        .then(response => response.json())
}

// export const submitJson = async ({ url, body }) => {
//     // const location = window.location.hostname;
//     const settings = {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     };

//     const data = await fetch(url, settings)
//         .then(response => response.json())
//         .then(json => {
//             console.log(json)
//             return json;
//         })
//         .catch(e => {
//             return e
//         });

//     return data;


// }