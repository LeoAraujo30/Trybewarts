const loginEmailInput = document.getElementById('email');
const loginPasswordInput = document.getElementById('password');
const loginSubmitButton = document.getElementById('login-submit-btn');

const form = document.getElementById('evaluation-form');
const formNameInput = document.getElementById('input-name');
const formLastNameInput = document.getElementById('input-lastname');
const formEmailInput = document.getElementById('input-email');
const formHouseSelectInput = document.getElementById('house');
const formFamilyRadioInputs = document.getElementsByClassName('family-radio');
const formSubjectsCheckboxInputs = document.getElementsByClassName('subject');
const formRateRadioInputs = document.getElementsByClassName('rate-radio');
const formCommentInput = document.getElementById('textarea');
const formAgreementCheckboxInput = document.getElementById('agreement');
const formSubmitButton = document.getElementById('submit-btn');

const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

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

function getSelectedRadioItemValue(radioList) {
  for (let index = 0; index < radioList.length; index += 1) {
    if (radioList[index].checked) {
      return radioList[index].value;
    }
  }
}

function getListOfSubjects(checkboxList) {
  const selectedSubjects = [];
  for (let index = 0; index < checkboxList.length; index += 1) {
    if (checkboxList[index].checked) {
      selectedSubjects.push(checkboxList[index].value);
    }
  }
  return selectedSubjects;
}

function getFormData() {
  const selectedFamily = getSelectedRadioItemValue(formFamilyRadioInputs);
  const selectedRate = getSelectedRadioItemValue(formRateRadioInputs);
  const selectedSubjects = getListOfSubjects(formSubjectsCheckboxInputs);
  const formData = {
    name: `${formNameInput.value} ${formLastNameInput.value}`,
    email: formEmailInput.value,
    house: formHouseSelectInput.value,
    family: selectedFamily,
    subjects: selectedSubjects,
    rate: selectedRate,
    comment: formCommentInput.value,
  };
  return formData;
}

function addInfoToPage(prefix, info) {
  const newPTag = document.createElement('p');
  if (typeof info === 'object') {
    newPTag.innerText = `${prefix}: ${info.join(', ')}`;
  } else {
    newPTag.innerText = `${prefix}: ${info}`;
  }
  newPTag.className = 'submited-info';
  form.appendChild(newPTag);
}

function submitForm(event) {
  event.preventDefault();
  const formData = getFormData();
  form.innerHTML = '';
  addInfoToPage('Nome', formData.name);
  addInfoToPage('Email', formData.email);
  addInfoToPage('Casa', formData.house);
  addInfoToPage('Família', formData.family);
  addInfoToPage('Matérias', formData.subjects);
  addInfoToPage('Avaliação', formData.rate);
  addInfoToPage('Observações', formData.comment);
}

loginSubmitButton.addEventListener('click', submitCredentialsToLogin);
formAgreementCheckboxInput.addEventListener('change', (event) => {
  if (event.target.checked) {
    formSubmitButton.removeAttribute('disabled');
  } else {
    formSubmitButton.setAttribute('disabled', 'disabled');
  }
});

formSubmitButton.addEventListener('click', submitForm);

function caracteresCounter() {
  const caracteres = textarea.value;
  counter.innerText = 500 - caracteres.length;
}

textarea.addEventListener('keyup', caracteresCounter);
