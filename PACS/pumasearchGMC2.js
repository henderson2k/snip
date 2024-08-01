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

  
//                    0          1       2     3     4             5            6         7           8      9
 //// Clipboard:  Firstname, Lastname, Grade, GMC, eMail, MothersMaidenName, Username, Description, Group, Spec



 // console.log('Text from clipboard:', text);

  // Split the clipboard text by commas into an array  (Firstname, Lastname, Speciality/Department, Group, eMail, GMC/Registration, Description, UserName)
var valuesArray = text.split(',').map(value => value.trim());


  
          var usernameInput = document.getElementById('ctl00_ContentPlaceHolder1_txtProfReg');
          usernameInput.value = valuesArray[3];
          
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
