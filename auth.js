const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    alert('Sign up successful! You can now log in.');
    window.location.href = 'login.html';
  });
}

// Handle Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      alert('Login successful!');
      window.location.href = 'index.html'; // go to home or quiz page
    } else {
      alert('Incorrect email or password!');
    }
  });
}
