// Get the form element
const form = document.querySelector('#myForm');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting

    // Get the input values
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Perform validation or other operations with the input values
    // ...

    // Clear the form fields
    form.reset();
});