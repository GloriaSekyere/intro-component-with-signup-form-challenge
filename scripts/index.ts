const form =  document.querySelector("form")!; // get form element

// Add event listener for these instructions when submit button is clicked
form.addEventListener("submit", (e: Event) => {

  const labels =  document.querySelectorAll("label"); // get all label elements
  
  // for each label element, perform the following instructions
  labels.forEach(label => {

    // grab input, error icon, and error text from label's nodelist
    const input = label.children[0] as HTMLInputElement;
    const warning = label.children[1] as HTMLParagraphElement;
    const error = label.children[2] as HTMLImageElement;
    
    // If the input field is empty
    if (input.value === "") {
      e.preventDefault(); // prevent form from submitting
      warning.style.display = "block"; // display error text
      error.style.display = "block"; // display error icon
      input.style.cssText = `
          border-color: hsl(0, 100%, 74%);
          border-width: 2px;`;
    } 
    // If input field is not empty
    else { 
      warning.style.display = "none"; // remove error text
      error.style.display = "none"; // remove error icon
      input.style.cssText = `
          border-color: #dedede;
          border-width: 1px;`;
    }
  });

  // Email format validation
  const emailInput = labels[2].children[0] as HTMLInputElement; // get email input element
  const emailWarning = labels[2].children[1] as HTMLParagraphElement; // get email error text
  const emailError = labels[2].children[2] as HTMLImageElement; // get email error icon
  const pattern: RegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; // define regex for email validation
  
  // If email format does not match pattern, show error styles
  if (!emailInput.value.match(pattern)) {
    e.preventDefault(); // prevent form from submitting
    emailWarning.style.display = "block"; // display error text
    emailError.style.display = "block"; // display error icon
    emailInput.style.cssText = `
        border-color: hsl(0, 100%, 74%);
        border-width: 2px;
        caret-color: hsl(0, 100%, 74%);
        color: hsl(0, 100%, 74%);`;
  }

});
