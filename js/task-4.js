const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const email = formData.get('email')?.toString().trim() ?? '';
  const password = formData.get('password')?.toString().trim() ?? '';

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log({ email, password });
  event.currentTarget.reset();
});

