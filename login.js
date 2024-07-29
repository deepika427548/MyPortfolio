document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const email = document.getElementById('email');
        const password = document.getElementById('password');
        let valid = true;

      
        clearErrors();

        // Email validation
        if (!validateEmail(email.value)) {
            showError(email, 'Please enter a valid email address.');
            valid = false;
        }

        // Password validation
        if (password.value.trim() === '') {
            showError(password, 'Please enter your password.');
            valid = false;
        } else if (password.value.length < 6) {
            showError(password, 'Password must be at least 6 characters long.');
            valid = false;
        }

        
        if (valid) {
            alert('Login successful!');
            clearForm();
        }
    });

   
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Function to show error messages
    function showError(input, message) {
        const errorText = document.createElement('div');
        errorText.className = 'error-text';
        errorText.innerText = message;
        input.parentNode.appendChild(errorText);
        input.classList.add('is-invalid');
    }

    // Function to clear previous error messages
    function clearErrors() {
        const errorTexts = document.querySelectorAll('.error-text');
        errorTexts.forEach(function (errorText) {
            errorText.remove();
        });

        const invalidInputs = document.querySelectorAll('.is-invalid');
        invalidInputs.forEach(function (input) {
            input.classList.remove('is-invalid');
        });
    }

    // Function to clear the form fields
    function clearForm() {
        loginForm.reset();
    }
});
