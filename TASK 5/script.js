

document.getElementById('signupForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

   
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

   
    errorMessage.textContent = "";

    
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters!";
        return;
    }

    if (password!==confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return;
    }

    alert("Signup Successful!");
   
});