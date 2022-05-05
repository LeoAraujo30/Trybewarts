const loginEmailInput = document.getElementById('email');
const loginPasswordInput = document.getElementById('password');
const loginSubmitButton = document.getElementById('login-submit-btn');
const agreementCheckboxInput = document.getElementById('agreement');
const formSubmitButton = document.getElementById('submit-btn');

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
    alert('Email ou senha inválidos.');
  }
}

loginSubmitButton.addEventListener('click', submitCredentialsToLogin);
agreementCheckboxInput.addEventListener('change', (event) => {
  console.log(event.target.checked);
  if (event.target.checked) {
    formSubmitButton.removeAttribute('disabled');
  } else {
    formSubmitButton.setAttribute('disabled', 'disabled');
  }
});

const textarea = document.getElementById('textarea')
const counter = document.getElementById('counter')

textarea.addEventListener('keyup', caracteresCounter)
function caracteresCounter () {
    const caracteres = textarea.value
    counter.innerText = 500 - caracteres.length
}
