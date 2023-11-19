document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const errorModal = document.getElementById('error-modal');
    const messageDisplay = document.getElementById('messageDisplay');
  
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
      messageDisplay.style.display = 'block';
      messageDisplay.innerHTML = `Thank you, ${nameInput.value}! Your message has been sent.`;
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
  