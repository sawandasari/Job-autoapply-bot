(function autoFillForm() {
    // Example - customize for each site
    const inputName = document.querySelector('input[name="name"]');
    const inputEmail = document.querySelector('input[name="email"]');
    const inputResume = document.querySelector('input[type="file"]');
  
    if (inputName) inputName.value = "John Doe";
    if (inputEmail) inputEmail.value = "john@example.com";
    if (inputResume) {
      // File upload cannot be done with JS alone for security reasons.
      console.log("Please upload resume manually.");
    }
  
    const submitButton = document.querySelector('button[type="submit"]');
    if (submitButton) submitButton.click();
  })();
  