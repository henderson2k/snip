setTimeout(function(){

var clearform = document.getElementById('id="ctl00_ContentPlaceHolder1_btnClear');

if (clearform) {
    // Trigger a click event on the button
    clearform.click();
  } else {
    console.error('clear button not found.');
  }

    var usernameInput = document.getElementById('ctl00_ContentPlaceHolder1_txtProfReg');
    
    usernameInput.value = '123';
    
        var submitButton = document.getElementById('ctl00_ContentPlaceHolder1_btnSaveRecord');
    
    // Check if the button element exists
    if (submitButton) {
      // Trigger a click event on the button
      submitButton.click();
    } else {
      console.error('Submit button not found.');
    }
        
    }, 5000);