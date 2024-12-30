function getInputValue(buttonElement) {
    // Find the parent container of the button
    const parentContainer = buttonElement.parentElement.parentElement;
  
    // Find the input element with the class "oop" within the parent container
    const inputElementCell = parentContainer.querySelector('.oop');
    const inputElement = inputElementCell.querySelector('.oop');
  
    // Check if the input element was found
    if (inputElement) {
      // Get the value of the input element
      const inputValue = inputElement.value;
      return inputValue;
    } else {
      // Handle the case where the input element was not found
      console.error("Input element with class 'oop' not found.");
      return null; 
    }
}

async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard:', text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
}

const buttons = document.querySelectorAll('.rar');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    copyToClipboard(getInputValue(button));
  });
});
