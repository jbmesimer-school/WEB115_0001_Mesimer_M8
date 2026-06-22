    // JavaScript code for form validation

    // Create elements that store calls to elements in html
    let myForm = document.getElementById("myForm");
    let inputField = document.getElementById("inputField");

    // Create element to store innerHTML messages to set back to webpage
    let message = document.createElement("p")

    // Append the created message to the webpage
    myForm.appendChild(message);

	// Prevent form from submitting
    myForm.addEventListener("submit", function(event) {
        event.preventDefault();
        /* Keeping this in causes the form to not "submit"
        * Removing this allows the form to submit on success
        * But causes the page to immediately refresh
        * Which causes the success message to barely show
        */
        
        // Retrieve the input field value
        let inputValue = inputField.value;

        // Regular expression pattern for alphanumeric input
        let regex = /^[a-zA-Z0-9]+$/;

        // Check if the input value matches the pattern
        if (regex.test(inputValue)) {

            // Valid input: display confirmation and submit the form
            message.innerHTML = "Form submitted successfully.";
            message.style.color = "green";
        } else {
            
            // Invalid input: display error message
            message.innerHTML = "Error: Only alphanumeric characters allowed.";
            message.style.color = "red";
            event.preventDefault();
        }
    });