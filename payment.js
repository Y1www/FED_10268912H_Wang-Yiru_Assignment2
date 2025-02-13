document.getElementById('payment-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const cardholderName = document.getElementById('cardholder-name').value;

    const response = await fetch('https://paymentapi-2660.restdb.io/rest/payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': '67ab1cc0c3f508091cad2c13'
        },
        body: JSON.stringify({ cardNumber, expiryDate, cvv, cardholderName })
    });

    if (response.ok) {
        // Show the success modal
        const modal = document.getElementById('success-modal');
        modal.classList.remove('hidden');

        // Close the modal when the close button is clicked
        document.querySelector('.close-btn').addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // Close the modal after 3 seconds
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 3000);
    } else {
        alert('Payment failed. Please try again.');
    }
});