window.onload = load;
// onloadfunction//
function load() {
    "use strict";
    // taking the value from classes and putting it into the variable//
    var form = document.forms.formname;
    var hiddenmsg = document.querySelector(".hidden");
    var showname = document.querySelector(".hidden__span1");

    //taking the value from the form and inserting into the variable//
    var usernameinput = form.form__name;
    var MyPassword = form.form__pass;

    ////hidding the outputdiv on load///////
    hiddenmsg.style.display = "none";
    /////eventlistner////////
    form.onsubmit = validation;
    //Creating function for validation and to show the output div //
    function validation() {
        ///taking text value from the form and putting it into the variable//// 
        var Pass = MyPassword.value;
        var userinput = usernameinput.value;
        //// inserting the value in the  checklogin function///
        var result = checklogin(userinput, Pass);
        //// punching out the result on the page with inner HTML ////
        showname.innerHTML = result;
        ///  using return false to stop the page from load/// 
        return false;
    };
    //showing the hidden div with innerHTml values/
    hiddenmsg.style.display = "block";
    //Reseting the form///
    form.reset();
    return false;

}