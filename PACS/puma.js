setTimeout(function() {
  // Read text from clipboard
setTimeout(function() {
var clearform = document.getElementById('ctl00_ContentPlaceHolder1_btnClear');

if (clearform) {
  // Trigger a click event on the button
  clearform.click();
} else {
 console.error('clear button not found.');
}
}, 1000); 




  
  navigator.clipboard.readText()
      .then(text => {
          console.log('Text from clipboard:', text);

          // Set clipboard text into input field
          var usernameInput = document.getElementById('ctl00_ContentPlaceHolder1_txtProfReg');
          usernameInput.value = text;

          // After setting the value, wait a bit before submitting the form
          setTimeout(function() {
              var submitButton = document.getElementById('ctl00_ContentPlaceHolder1_btnSaveRecord');

              // Check if the submit button exists
              if (submitButton) {
                  // Trigger a click event on the submit button
                  submitButton.click();
              } else {
                  console.error('Submit button not found.');
              }
          }, 1000); // Adjust this timeout as necessary to ensure the field value is set before submission
      })
      .catch(err => {
          console.error('Failed to read clipboard contents: ', err);
      });

}, 100); // Wait 5 seconds before executing the clipboard read and form submission
