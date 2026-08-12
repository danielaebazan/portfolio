document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdCuLWsr3oYRUd5zoO6nkMdSkZ4722QFDch58engNXeMwDNdw/formResponse";
    const formData = new FormData();
    formData.append("entry.1297566054", name);
    formData.append("entry.1072388475", email);
    formData.append("entry.388127881", message);

    fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: formData
    })
    .then(() => {
        document.getElementById('responseMessage').innerText = 'Thanks for reaching out! I’ll take a look at your message and get back to you soon.';
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        document.getElementById('responseMessage').innerText = 'There was an error sending your message. Please try again.';
    });
});
