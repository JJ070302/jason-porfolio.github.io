const form = document.getElementById("contact-form");
  const messagesList = document.getElementById("messages");

  // Retrieve messages from local storage on load
  const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
  savedMessages.forEach(displayMessage);

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get user input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check for empty fields
    if (!name || !email || !message) {
      alert("All fields are required!");
      return;
    }

    // Create message object
    const messageData = { name, email, message };

    // Save message to local storage
    savedMessages.push(messageData);
    localStorage.setItem("messages", JSON.stringify(savedMessages));

    // Display message in the list
    displayMessage(messageData);

    // Clear form inputs
    form.reset();
  });

  // Function to display a message
  function displayMessage({ name, email, message }) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <p><strong>${name}</strong> (${email}):</p>
      <p>${message}</p>
    `;
    messagesList.appendChild(listItem);
  }