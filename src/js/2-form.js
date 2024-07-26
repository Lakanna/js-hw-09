let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const inputForm = document.querySelector('.form-input');

const textarea = document.querySelector('textarea');

const localeStorageKey = 'feedback-form-state';


if (localStorage.getItem(localeStorageKey)) {
  formData = JSON.parse(localStorage.getItem(localeStorageKey));
  inputForm.value = formData.email;
  textarea.value = formData.message;
}

form.addEventListener('input', handlerInput);

function handlerInput(evt) {
  const { email, message } = evt.currentTarget.elements;
  formData.email = email.value;
  formData.message = message.value;

  localStorage.setItem(localeStorageKey, JSON.stringify(formData));
}

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const { email, message } = evt.currentTarget.elements;

  if (email.value === '' || message.value === '') {
    alert('Fill please all fields');
    return;
  }

  console.log('actual Data:', formData);

  formData = {
    email: '',
    message: '',
  };

  localStorage.removeItem(localeStorageKey);

  form.reset();
}
