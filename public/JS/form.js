
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault(); 

   
    const name = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('mensaje').value;

    try {
        const response = await axios.post('/api/contact', {
            name: name,
            email: email,
            message: message
        });

        alert(response.data.message);
        } catch (error) {
            console.error('Error sending contact form:', error);
            alert('There was an error sending the message. Please try again later.');
        }
    });