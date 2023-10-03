const textInput = document.querySelector('#validation-input');
const dataLength = parseInt(textInput.getAttribute('data-length'));

textInput.addEventListener("blur", (event) => {
    if (textInput.value.length === dataLength) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }
});
