function chat() {
  const input = document.getElementById("userInput");
  const chatlog = document.getElementById("chatlog");

  const userText = input.value.trim();
  if (!userText) return;

  const userMsg = `<p><strong>You:</strong> ${userText}</p>`;
  chatlog.innerHTML += userMsg;

  let botResponse = getBotResponse(userText.toLowerCase());

  chatlog.innerHTML += `<p><strong>AI:</strong> ${botResponse}</p>`;
  chatlog.scrollTop = chatlog.scrollHeight;

  input.value = '';
}

function getBotResponse(message) {
  if (message.includes("password")) {
    return "Use long, unique passwords and consider a password manager!";
  } else if (message.includes("2fa")) {
    return "2FA helps keep your accounts safer. Use SMS or app-based verification.";
  } else if (message.includes("phishing")) {
    return "Phishing attempts often look real. Double-check URLs and sender emails.";
  } else if (message.includes("vpn")) {
    return "A VPN helps encrypt your data on public networks. Definitely use one at cafes or airports.";
  } else {
    return "That’s a great question! Make sure to always use strong cybersecurity habits.";
  }
}