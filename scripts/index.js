"use strict";
// Declare variables
const form = document.querySelector("form");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
form.addEventListener("submit", (e) => {
    // For each label element, perform the following instructions
    labels.forEach(label => {
        // Grab input, error icon, and error text from label's nodelist
        const input = label.childNodes[1];
        const warning = label.childNodes[3];
        const error = label.childNodes[5];
        // If the input field is empty
        if (input.value === "") {
            e.preventDefault(); // Prevent form from submitting
            warning.style.display = "block"; // display error text
            error.style.display = "block"; // display error icon
        }
        // If input field is not empty
        else {
            warning.style.display = "none"; // remove error text
            error.style.display = "none"; // remove error icon
        }
    });
});
