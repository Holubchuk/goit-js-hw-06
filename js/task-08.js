const registerForm = document.querySelector(".login-form");
const elements = registerForm.elements;

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All fields of the form must be filled out");
  }

  const object = {};

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.name === "email" || element.name === "password") {
      object[element.name] = element.value;
    }
  }
  console.log(object);
  form.reset();
}
