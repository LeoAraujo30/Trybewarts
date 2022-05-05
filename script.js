const loginEmailInput = document.getElementById('email');
const loginPasswordInput = document.getElementById('password');
const loginSubmitButton = document.getElementById('submit-btn');

function validateData(inputValue, expectedValue) {
  return inputValue === expectedValue;
}

function submitCredentialsToLogin() {
  const emailValue = loginEmailInput.value;
  const passwordValue = loginPasswordInput.value;
  const isEmailValid = validateData(emailValue, 'tryber@teste.com');
  const isPasswordValid = validateData(passwordValue, '123456');
  if (isEmailValid && isPasswordValid) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
}

loginSubmitButton.addEventListener('click', submitCredentialsToLogin);
