setTimeout(function(){

Var  document.getElementById('ctl00_ContentPlaceHolder1_btnSaveRecord');


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