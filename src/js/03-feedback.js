
import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const textInput = document.querySelector('.feedback-form textarea');

const LOCAL_KEY = 'feedback-form-state';
const formData = {};

getDataFromStorage();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


function onFormInput(event) {
    const formData = form.elements;

    const email = formData.email.value;
    const message = formData.message.value;
    const dataToSave = { email, message };

    localStorage.setItem( LOCAL_KEY, JSON.stringify(dataToSave));
}

function onFormSubmit(event) {
    event.preventDefault();

    const {elements: { email, message }}  = event.currentTarget;

    if (email.value === "" || message.value === "") {
        return window.alert("Усі поля повинні бути заповнені!");
    } 

    console.log(JSON.parse(localStorage.getItem( LOCAL_KEY)));
    
    event.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY);
}

function getDataFromStorage() {
    const savedData = JSON.parse(localStorage.getItem(LOCAL_KEY));

    if (savedData) {
        emailInput.value = savedData.email;
        textInput.value = savedData.message;
    }
}