// Handle the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Message sent! Thank you for reaching out.');
  } else {
    alert('Please fill in all fields before submitting.');
  }

  // Optionally, reset the form
  document.getElementById('contact-form').reset();
});

