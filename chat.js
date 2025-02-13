document.addEventListener('DOMContentLoaded', () => {
    const chatItems = document.getElementById('chat-items');
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    
    // Added more users
    const chats = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
        { id: 4, name: 'Bob Brown' },
        { id: 5, name: 'Emma Wilson' },
        { id: 6, name: 'Michael Lee' },
        { id: 7, name: 'Sophia Miller' },
        { id: 8, name: 'James Anderson' },
        { id: 9, name: 'Olivia Taylor' },
        { id: 10, name: 'Daniel Martinez' }
    ];
    
    const messages = {
        1: [{ sender: 'John', text: 'Hi there!' }],
        2: [{ sender: 'Jane', text: 'Is this item still available?' }],
        3: [{ sender: 'Alice', text: 'Hello! How much is the price?' }],
        4: [{ sender: 'Bob', text: 'I’m interested in your listing.' }],
        5: [{ sender: 'Emma', text: 'Can you deliver?' }],
        6: [{ sender: 'Michael', text: 'Hey, do you have more pictures?' }],
        7: [{ sender: 'Sophia', text: 'Is this new or used?' }],
        8: [{ sender: 'James', text: 'Would you accept offers?' }],
        9: [{ sender: 'Olivia', text: 'How soon can you meet up?' }],
        10: [{ sender: 'Daniel', text: 'Is the price negotiable?' }]
    };
    
    chats.forEach(chat => {
        const chatItem = document.createElement('div');
        chatItem.classList.add('chat-item');
        chatItem.textContent = chat.name;
        chatItem.addEventListener('click', () => loadChat(chat.id));
        chatItems.appendChild(chatItem);
    });
    
    function loadChat(chatId) {
        chatMessages.innerHTML = '';
        if (messages[chatId]) {
            messages[chatId].forEach(message => {
                chatMessages.appendChild(createMessageElement(message));
            });
        }
    }
    
    sendButton.addEventListener('click', () => {
        const text = messageInput.value.trim();
        if (text) {
            const newMessage = { sender: 'You', text };
            chatMessages.appendChild(createMessageElement(newMessage));
            chatMessages.scrollTop = chatMessages.scrollHeight;
            messageInput.value = '';
        }
    });
    
    function createMessageElement(message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', message.sender === 'You' ? 'sent' : 'received');
        messageDiv.textContent = message.text;
        return messageDiv;
    }
});