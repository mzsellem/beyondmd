// Get a reference to the button element by its ID
const redirectButton = document.getElementById('redirectButton');

// Add a click event listener to the button
redirectButton.addEventListener('click', function () {
    // Define the URL you want to redirect to
    const targetURL = 'https://beyondmd.care/'; // Replace with your desired URL

    // Redirect the user to the target URL
    window.location.href = targetURL;
});
