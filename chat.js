document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    // Placeholder API simulation
    const fetchMessages = async () => {
        return [
            { sender: "seller", text: "Hello! How can I help you?" },
            { sender: "buyer", text: "I'm interested in buying your product." },
            { sender: "seller", text: "Great! Do you have any questions?" },
        ];
    };

    const renderMessages = (messages) => {
        chatMessages.innerHTML = "";
        messages.forEach((message) => {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message", message.sender);
            messageDiv.textContent = message.text;
            chatMessages.appendChild(messageDiv);
        });
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const addMessage = (text, sender) => {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    sendButton.addEventListener("click", () => {
        const text = messageInput.value.trim();
        if (text) {
            addMessage(text, "buyer");
            messageInput.value = "";

            // Simulate seller's response
            setTimeout(() => {
                addMessage("Thank you for your message. I will get back to you shortly!", "seller");
            }, 1000);
        }
    });

    messageInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendButton.click();
        }
    });

    // Initialize with API messages
    fetchMessages().then((messages) => renderMessages(messages));
});