import throttle from 'lodash.throttle';
const FORM_DATA_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const formData = {};
const inputEl = document.querySelector("[name='email']");
const textareaEl = document.querySelector("[name='message']");

formEl.addEventListener('input', throttle(onFormInput, 500));

formEl.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(FORM_DATA_KEY)));
  evt.target.reset();
  localStorage.removeItem(FORM_DATA_KEY);
});

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formData));
}

function populateFormInputs() {
  const savedData = localStorage.getItem(FORM_DATA_KEY);
  if (savedData) {
    const objData = JSON.parse(savedData);
    inputEl.value = objData.email;
    textareaEl.value = objData.message;
  }
}
console.log(populateFormInputs());
