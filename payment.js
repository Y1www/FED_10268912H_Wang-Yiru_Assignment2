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
        alert('Payment successful!');
    } else {
        alert('Payment failed. Please try again.');
    }
});