const inputButton = document.getElementById('submit-button');
const inputMessage = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');
const socket = io('http://localhost:3000');

inputButton.addEventListener('click', (event) => {
    event.preventDefault();

    let message = inputMessage.value;

    if(message != "") {
        socket.emit('message', message);
        messagesContainer.innerHTML += `<div id="message"><p> ${message} </p></div>`;
        inputMessage.value = "";
    }
});


socket.on('message', (message) => {
    messagesContainer.innerHTML += `<div id="message"><p> ${message} </p></div>`;
});