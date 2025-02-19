document.addEventListener("DOMContentLoaded", function () {
  const chatbotContainer = document.getElementById("chatbotContainer");
  const chatbotBody = document.getElementById("chatbotBody");
  const chatbotInput = document.getElementById("chatbotInput");

  function toggleChatbot() {
    chatbotContainer.classList.toggle("active");
  }

  function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage === "") return;

    // Display user message
    appendMessage("You", userMessage, "user");

    // Generate bot response
    const botResponse = getBotResponse(userMessage);
    setTimeout(() => {
      appendMessage("Bot", botResponse, "bot");
    }, 500);

    chatbotInput.value = "";
  }

  function appendMessage(sender, message, senderClass) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", senderClass);
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatbotBody.appendChild(messageElement);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }

  function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
      return "Hello! How can I assist you today?";
    } else if (input.includes("your name")) {
      return "I'm Thumeka's chatbot assistant!";
    } else if (input.includes("skills")) {
      return "I have expertise in JavaScript, SQL, HTML, Java, PHP, and GitHub.";
    } else if (input.includes("education")) {
      return "Thumeka has a National Diploma in Information Technology from Walter Sisulu University (2017 - 2021).";
    } else if (input.includes("experience")) {
      return "Thumeka was an ICT Intern at Walter Sisulu University in 2022.";
    } else if (input.includes("contact")) {
      return "You can reach Thumeka at thumekaxuba433@gmail.com or LinkedIn: linkedin.com/in/thumekaxuba";
    } else {
      return "I'm not sure about that. Try asking about skills, education, experience, or contact info!";
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }

  // Expose functions globally
  window.toggleChatbot = toggleChatbot;
  window.sendMessage = sendMessage;
  window.handleKeyPress = handleKeyPress;
});

