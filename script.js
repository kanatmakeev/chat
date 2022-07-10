const author = document.getElementById("author");
const message = document.getElementById("message");
const sendButton = document.getElementById("send");
const password = document.getElementById("pass");
const login = document.getElementById("login");


const messages = [];

login.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("form").style.display = "block";
  document.getElementById("log").style.display = "none";
});

function renderMessage() {
  messages.forEach((item) => {
    const text = `<div class="sms">
        <h2>${item.author}</h2>
        <p>${item.message}</p>
    </div>`;

    form.innerHTML += text;
  });
}
function reset(inputMessage) {
  inputMessage.value = "";
}

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (message.value) {
    const newMessage = {
      author: author.value,
      message: message.value,
    };

    messages.push(newMessage);
  } else {
    alert("ERROR empty message");
  }
  renderMessage();
  reset(message);
});
