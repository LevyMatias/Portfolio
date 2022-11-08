export const requiredFields = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.formcontato__form .span__required');

function setErrorInput(index, text) {
    requiredFields[index].style.border = '1px solid red';
    requiredFields[index].style.borderRadius = '3px';
    spans[index].style.display = 'block';
    spans[index].innerHTML = text;
    
    if(requiredFields[index].value === '') {
        spans[index].innerHTML = 'Está Vazio!';
    }
}

function removeErrorInput(index) {
    requiredFields[index].style.border = '1px solid green';
    requiredFields[index].style.borderRadius = '3px';
    spans[index].style.display = 'none';
}

export {setErrorInput, removeErrorInput};