import Pristine from 'pristinejs';

window.onload = function () {

    var form = document.getElementById("form_block_js");

    // create the pristine instance
    var pristine = new Pristine(form);

    form.addEventListener('submit', function (e) {
       e.preventDefault();
       
       // check if the form is valid
       var valid = pristine.validate(); // returns true or false
	   if(valid){alert("Thank you! Your data has been sent")}
    });
};
