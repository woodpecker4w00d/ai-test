// Function to display messages in the chat box
function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender + '-message');
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
}

// Function to handle sending a message
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        // Display user message
        displayMessage(userInput, 'user');
        document.getElementById('user-input').value = ''; // Clear input field

        // Respond with bot message
        setTimeout(() => {
            let botResponse = getBotResponse(userInput);
            displayMessage(botResponse, 'bot');
        }, 1000);
    }
}

// Simple rule-based chatbot response function
function getBotResponse(input) {
    input = input.toLowerCase();

    if (/hello|hi|hey/.test(input)) {
        return "Hello! How can I assist you today?";
    } else if (/how are you/.test(input)) {
        return "I'm just a bot, but I'm doing great! How about you?";
    } else if (/whats your name|yo whats ur name?|hey whats your name?/.test(input)) {
        return "im a nigger";
    } else if (/bye/.test(input)) {
        return "Goodbye! Have a great day!";
    } else if (/weather|rain|sun/.test(input)) {
        return "I can't check the weather right now, but you can try searching online!";
    } else {
        return "Sorry, I didn't understand that. Can you rephrase?";
    }
}

let lastMessage = "";

function getBotResponse(input) {
    input = input.toLowerCase();
    let response = "";

    if (lastMessage === "how are you?" && /fine|good|great/.test(input)) {
        response = "I'm glad to hear that!";
    } else if (/how are you/.test(input)) {
        response = "I'm doing well, thank you for asking!";
    } else {
        response = "Sorry, I didn't understand that.";
    }

    lastMessage = input;
    return response;
}
