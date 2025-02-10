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