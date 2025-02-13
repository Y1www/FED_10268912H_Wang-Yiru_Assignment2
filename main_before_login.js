// Register button and modal references
const registerButton = document.getElementById('register-btn');
const registerPopup = document.getElementById('register-popup');
const closeRegisterPopupButton = document.getElementById('close-popup');

// Email button and modal references
const emailButton = document.getElementById('email-btn');
const emailPopup = document.getElementById('email-popup');
const closeEmailPopupButton = document.getElementById('close-email-popup');

// Login button and modal references
const loginButton = document.querySelector('.auth-buttons button:nth-child(2)');
const loginPopup = document.getElementById('login-popup');
const closeLoginPopupButton = document.getElementById('close-login-popup');

// "Log in" link in the register popup
const loginLink = document.getElementById('login-link');

// Success modal references
const successModal = document.getElementById('success-modal');
const closeSuccessModalButton = document.querySelector('.modal .close-btn');

// Login success modal references
const loginSuccessModal = document.getElementById('login-success-modal');
const closeLoginSuccessModalButton = document.querySelector('#login-success-modal .close-btn');

// Top bar references
const authButtons = document.querySelector('.auth-buttons');
const topBar = document.querySelector('.top-bar');

// Show the register popup when the register button is clicked
registerButton.addEventListener('click', () => {
    registerPopup.classList.remove('hidden');
});

// Close the register popup when clicking the "X" button
closeRegisterPopupButton.addEventListener('click', () => {
    registerPopup.classList.add('hidden');
});

// Show the email popup when the email button is clicked
emailButton.addEventListener('click', () => {
    emailPopup.classList.remove('hidden');
});

// Close the email popup when clicking the "X" button
closeEmailPopupButton.addEventListener('click', () => {
    emailPopup.classList.add('hidden');
});

// Show the login popup when the login button is clicked
loginButton.addEventListener('click', () => {
    loginPopup.classList.remove('hidden');
});

// Close the login popup when clicking the "X" button
closeLoginPopupButton.addEventListener('click', () => {
    loginPopup.classList.add('hidden');
});

// Show the login popup when the "Log in" link is clicked
loginLink.addEventListener('click', (event) => {
    event.preventDefault();
    registerPopup.classList.add('hidden');
    loginPopup.classList.remove('hidden');
});

// Close popups when clicking outside of them
window.addEventListener('click', (event) => {
    if (event.target === registerPopup) {
        registerPopup.classList.add('hidden');
    }
    if (event.target === emailPopup) {
        emailPopup.classList.add('hidden');
    }
    if (event.target === loginPopup) {
        loginPopup.classList.add('hidden');
    }
});

// Search function
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const searchPopup = document.getElementById('search-popup');
const searchResult = document.getElementById('search-result');
const closeSearchPopupButton = document.getElementById('close-search-popup');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const items = document.querySelectorAll('.item');

    // Clear previous results
    searchResult.innerHTML = '';

    let hasResults = false;

    items.forEach(item => {
        const description = item.querySelector('p').textContent.toLowerCase();
        if (description.includes(query)) {
            // Clone the item element to avoid referencing the original
            const resultItem = item.cloneNode(true);
            searchResult.appendChild(resultItem);
            hasResults = true;
        }
    });

    if (!hasResults) {
        searchResult.innerHTML = '<p>No results found.</p>';
    }

    searchPopup.classList.remove('hidden');
});

// Close the search popup when clicking the "X" button
closeSearchPopupButton.addEventListener('click', () => {
    searchPopup.classList.add('hidden');
});

// Close the search popup when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === searchPopup) {
        searchPopup.classList.add('hidden');
    }
});

// Handle registration form submission
const emailForm = document.getElementById('email-form');
emailForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = emailForm.querySelector('input[type="email"]').value;
    const username = emailForm.querySelector('input[type="text"]').value;
    const password = emailForm.querySelector('input[type="password"]').value;

    const response = await fetch('https://assign2-1328.restdb.io/rest/registeration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': '67aaf7e957206d84d9e4b76b'
        },
        body: JSON.stringify({ email, username, password })
    });

    if (response.ok) {
        // Close the email registration popup
        emailPopup.classList.add('hidden');

        // Show the success modal
        successModal.classList.remove('hidden');

        // Close the modal when the close button is clicked
        closeSuccessModalButton.addEventListener('click', () => {
            successModal.classList.add('hidden');
        });

        // Close the modal after 3 seconds
        setTimeout(() => {
            successModal.classList.add('hidden');

            // Update the top bar to show "Hello, xxx" and keep the sell button
            authButtons.innerHTML = `<span>Hello, ${username}</span><button class="sell-btn" style="margin-left: 10px;">Sell</button>`;
        }, 3000);
    } else {
        alert('Registration failed. Please try again.');
    }
});

// Handle login form submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    const response = await fetch('https://assign2-1328.restdb.io/rest/registeration', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': '67aaf7e957206d84d9e4b76b'
        }
    });

    const users = await response.json();
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Close the login popup
        loginPopup.classList.add('hidden');

        // Show the login success modal
        loginSuccessModal.classList.remove('hidden');

        // Close the modal when the close button is clicked
        closeLoginSuccessModalButton.addEventListener('click', () => {
            loginSuccessModal.classList.add('hidden');
        });

        // Close the modal after 3 seconds
        setTimeout(() => {
            loginSuccessModal.classList.add('hidden');

            // Update the top bar to show "Hello, xxx" and keep the sell button
            authButtons.innerHTML = `<span>Hello, ${user.username}</span><button class="sell-btn" style="margin-left: 10px;">Sell</button>`;
        }, 3000);
    } else {
        alert('Login failed. Please check your email and password.');
    }
});