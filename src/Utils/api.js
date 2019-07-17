export async function requestUI(url) {
    let config
    config = {
        // header: new Headers({
        //     'Authorization': 'Bearer ' + localStorage.getItem('bToken'),
        // })
        headers: new Headers({
            // 'Authorization': 'Bearer '
        })
    }
    return fetch(url, config)
        .then(response => response.json())
}