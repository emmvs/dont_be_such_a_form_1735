// Livecode: EventListners & Iterators

// Events >>> User Actions
// Clicking a button
// Change & Blur
// Typing (key-up, key-down)
// Touching phone (OnTouch)

// PSEUDOCODE
// We want to trigger the validation on an event
// If a input is valid == .is-valid
// If input is invalid == .is-invalid
// Focus & Blur

// Select DOM elements that we need
const allInputs = document.querySelectorAll('.form-control');
const button = document.querySelector('.btn');

// Function to add validation classes based on input validity
const updateValidationClasses = (input) => {
  const inputIsValid = input.value.trim() !== "";
  if (inputIsValid) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
  }
};

// Function to check if all inputs are valid
const allInputsValid = () => {
  return Array.from(allInputs).every(input => input.classList.contains('is-valid'));
};

// Function to update button state and text based on validation
const updateButtonState = () => {
  if (allInputsValid()) {
    button.disabled = false;
    button.textContent = "Almost all is valid, lol";
  } else {
    button.disabled = true;
    button.textContent = "Please fill all fields";
  }
};

// Event listener for input validation on blur
allInputs.forEach((input) => {
  input.addEventListener('blur', () => {
    updateValidationClasses(input);
    updateButtonState(); // Update button state and text
  });
});

// Initial button state
button.disabled = true;
button.textContent = "Please fill all fields";
