"use strict";
const form = document.querySelector("form"); // get form element
form.addEventListener("submit", (e) => {
    const labels = document.querySelectorAll("label"); // get all label elements
    // for each label element, perform the following instructions
    labels.forEach(label => {
        // grab input, error icon, and error text from label's nodelist
        const input = label.childNodes[1];
        const warning = label.childNodes[3];
        const error = label.childNodes[5];
        // If the input field is empty
        if (input.value === "") {
            e.preventDefault();
            warning.style.display = "block"; // display error text
            error.style.display = "block"; // display error icon
        }
        // If input field is not empty
        else {
            warning.style.display = "none"; // remove error text
            error.style.display = "none"; // remove error icon
        }
    });
    /*
    // email validation
    const email = document.querySelectorAll("input")[2]; // get email input element
    const pattern: RegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!email.value.match(pattern)) {
      e.preventDefault();
      console.log("error")
    }*/
});
