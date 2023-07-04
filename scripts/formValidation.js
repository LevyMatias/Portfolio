import {setErrorInput, removeErrorInput, requiredFields} from "./errorsInput.js";

const form = document.querySelector('.formcontato__text #form');
const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

form.addEventListener('submit', event => {
    event.preventDefault();
    validateName();
    validateEmail();
    validateSubject();
    validateMessage();
});

const validateName =    () => requiredFields[0].value.length < 3 ? setErrorInput(0, "O nome deve ter no mínimo 3 caracteres") : removeErrorInput(0);
document.querySelector('.formcontato__form #nome').addEventListener('input', validateName);

const validateEmail =   () => !emailRegex.test(requiredFields[1].value) ? setErrorInput(1, "Ex: Fulano@email.com") : removeErrorInput(1);
document.querySelector('.formcontato__form #email').addEventListener('input', validateEmail);

const validateSubject = () => requiredFields[2].value.length > 50 || requiredFields[2].value.length < 4 ? setErrorInput(2, "Deve ter no máximo 50 caracteres <br> E no mínimo 4 caracteres") : removeErrorInput(2);
document.querySelector('.formcontato__form #assunto').addEventListener('input', validateSubject);

const validateMessage = () => requiredFields[3].value.length > 300 || requiredFields[3].value.length < 6 ? setErrorInput(3, "Máximo de 300 caracteres <br> Mínimo de 6 caracteres") : removeErrorInput(3);
document.querySelector('.formcontato__form #mensagem').addEventListener('input', validateMessage);
