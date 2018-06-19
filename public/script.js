const input = document.querySelector('#time-input');
let url = "http://localhost:3000/";
const navigate = (event) => {
    if (event.keyCode === 13) {
        console.log(encodeURI(event.target.value));
        url = url + event.target.value;
        window.location.href = encodeURI(url);
    }
}