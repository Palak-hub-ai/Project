document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    alert('Thank you for your message!');
    
    // Clear form fields
    this.reset();
});
