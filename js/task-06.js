const textInput = document.querySelector('#validation-input');
const dataLength = parseInt(textInput.getAttribute('data-length'));

textInput.addEventListener("blur", (event) => {
    if (textInput.value.length === dataLength) {
        textInput.style.borderColor = '#4caf50';
    } else {
        textInput.style.borderColor = '#f44336';
    }
});
