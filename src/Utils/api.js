export async function requestUI (url) {
    return fetch(url)
            .then(response => response.json())
}