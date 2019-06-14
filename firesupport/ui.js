
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

const chatSend = document.querySelector('#chat-send');
const chatMsg = document.querySelector('#chat-msg');
const chatWrapper = document.querySelector(".chat-wrapper");

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle("burger-active");
});

chatMsg.addEventListener('keydown', (e) => {
    if(e.keyCode == 13 && !e.shiftKey && !e.repeat)
    {
        sendMessage();
        e.preventDefault();
    }
}, true);

chatSend.addEventListener('click', () => {
    sendMessage();
});

window.addEventListener('offline', () => {
    var chatMessage = document.createElement("div");
    chatMessage.classList.add("chat-message", "notification");
    chatMessage.innerHTML = '<p>You have lost connection to the internet.</p>';

    chatWrapper.appendChild(chatMessage);
});

function sendMessage()
{
    var message = chatMsg.value.trim();
    chatMsg.value = null;

    if(message === "") return;

    var date = new Date();

    var chatMessage = document.createElement("div");
    chatMessage.classList.add("chat-message", "message-customer");
    chatMessage.innerHTML = '<img src="img/avatars/jane.png" alt="Jane" class="avatar" /><p class="name">Jane</p><p>' + strip(message) + '</p><span class="timestamp">' + date.getHours() + '.' + date.getMinutes() +' </span>';

    chatWrapper.appendChild(chatMessage);
}

function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}