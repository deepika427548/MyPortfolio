document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
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

        // Confirm Password validation
        if (confirmPassword.value !== password.value) {
            showError(confirmPassword, 'Passwords do not match.');
            valid = false;
        }

        if (valid) {
            alert('Signup successful!');
            clearForm();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function showError(input, message) {
        const errorText = input.parentNode.querySelector('.invalid-feedback');
        if (errorText) {
            errorText.innerText = message;
            errorText.style.display = 'block';
        }
        input.classList.add('is-invalid');
    }

    function clearErrors() {
        const errorTexts = document.querySelectorAll('.invalid-feedback');
        errorTexts.forEach(function (errorText) {
            errorText.style.display = 'none';
        });

        const invalidInputs = document.querySelectorAll('.is-invalid');
        invalidInputs.forEach(function (input) {
            input.classList.remove('is-invalid');
        });
    }

    function clearForm() {
        signupForm.reset();
    }
});
