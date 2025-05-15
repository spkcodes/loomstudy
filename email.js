emailjs.init('6yd9t5aFG1IaX6Pkb'); // Your public key

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;  // Get email value
    const messageField = document.getElementById('message');
    
    // Append phone number and email to the message
    messageField.value = `Phone Number: ${phone}\nEmail: ${email}\n\n${messageField.value}`;

    emailjs.sendForm('service_7nm4j6t', 'template_n0jptst', this)
        .then(() => {
            alert('Message sent successfully!');
            this.reset();
        }, (error) => {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
});
