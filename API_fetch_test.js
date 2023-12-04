const url = "host:port/namespace"

const username = "your id";
const password = "your password";

const basicAuth = btoa(`${username}:${password}`); //Base64 Encoding

fetch(url, {
    method: "GET",
    headers: {
        "Authorization": `Basic ${basicAuth}`
    }
}).then(response => {
    return response.text();
}).then(text => {
    const data = JSON.parse(text);
    console.log(data);
}).catch(error => {
    console.warn(`"${error}" is occured`);
});