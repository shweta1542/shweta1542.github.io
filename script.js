document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const errorModal = document.getElementById('error-modal');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (!isValidName(nameInput.value)) {
      showError('Please enter a valid name (at least 3 characters).');
      return;
    }

    if (!isValidEmail(emailInput.value)) {
      showError('Please enter a valid email address.');
      return;
    }

    if (!isValidMessage(messageInput.value)) {
      showError('Please enter a message (at least 10 characters).');
      return;
    }

    // If all validations pass, you can proceed with form submission
    // For demonstration, we'll show a success message
    showSuccess('Form submitted successfully!');
    form.reset();
  });

  function isValidName(name) {
    return name.length >= 3; // At least 3 characters for the name
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidMessage(message) {
    return message.length >= 10; // At least 10 characters for the message
  }

  function showError(message) {
    errorModal.textContent = message;
    errorModal.style.display = 'block';
    setTimeout(() => {
      errorModal.style.display = 'none';
    }, 3000); // Hide the error message after 3 seconds
  }

  function showSuccess(message) {
    alert(message); // You can replace this with a styled success message or modal
  }
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Check if fields are filled
    if (name && email && message) {
      // Show message in a div
      var messageDisplay = document.getElementById('messageDisplay');
      messageDisplay.style.display = 'block';
      messageDisplay.innerHTML = `Thank you, ${name}! Your message has been sent.`;
  
      // Optional: Reset form fields after submission
      document.getElementById('contactForm').reset();
    } else {
      alert('Please fill in all fields.'); // Show an alert if any field is empty
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const errorModal = document.getElementById('error-modal');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
  
      if (!isValidName(nameInput.value)) {
        showError('Please enter a valid name (at least 3 characters).');
        return;
      }
  
      if (!isValidEmail(emailInput.value)) {
        showError('Please enter a valid email address.');
        return;
      }
  
      if (!isValidMessage(messageInput.value)) {
        showError('Please enter a message (at least 10 characters).');
        return;
      }
  
      // If all validations pass, proceed with form submission
      showSuccess('Form submitted successfully!');
      form.reset();
    });
  
    function isValidName(name) {
      return name.length >= 3;
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function isValidMessage(message) {
      return message.length >= 10;
    }
  
    function showError(message) {
      errorModal.textContent = message;
      errorModal.style.display = 'block';
      setTimeout(() => {
        errorModal.style.display = 'none';
      }, 3000);
    }
  
    function showSuccess(message) {
      alert(message); // You can replace this with a styled success message or modal
    }
  });
  