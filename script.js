document.addEventListener("DOMContentLoaded", function() {
    const sendBtn = document.getElementById("send-btn");
    const chatInput = document.getElementById("chat-input");
    const chatOutput = document.getElementById("chat-output");

    function appendMessage(message, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message", sender);
        const messageParagraph = document.createElement("p");
        messageParagraph.textContent = message;
        messageDiv.appendChild(messageParagraph);
        chatOutput.appendChild(messageDiv);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }

    sendBtn.addEventListener("click", function() {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            appendMessage(userMessage, "user");
            chatInput.value = "";
            setTimeout(() => {
                appendMessage("Thank you for reaching out. How can we assist you?", "bot");
            }, 1000);
        }
    });
    chatInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            sendBtn.click();
        }
    });
});
