function checklogin(username, userpassword) {
    "use strict";
    //username , userpassword//
    var user = username; // username is  Gautam//
    var pass = userpassword; //password is Rohit///
    //// using mdEncrypt function to Encrypt the user password///////
    var MD5Encription = md5Encrypt(pass);
    /// Setting up the output value/////////
    var returnMessage = "";
    var emptyusername = "No username entered.";
    var emptypassword = "No password entered.";
    var incorrect = "Invalid Username or Password.";
    var welcome = "Welcome back!";
    //// if  username & password matches ///
    if ((user === "Gautam" && MD5Encription === "11af26128e1ec790e7fdd78fbe89197c") == true) {
        return welcome;
        ////if username is empty or null////
    } else if (user === "" || user === null) {
        return emptyusername;
        ///if password is empty or null///////
    } else if (pass === "" || pass === null) {
        return emptypassword;
        // if userpassword is not equal to the encripted user password///
    } else if (MD5Encription != "11af26128e1ec790e7fdd78fbe89197c") {
        return incorrect;
        ///if username is not equal to saved name Gautam/////
    } else if (user != "Gautam") {
        return incorrect;
        //if username is correct but password is wrong///////
    } else if (user === "Gautam" && MD5Encription != "11af26128e1ec790e7fdd78fbe89197c") {
        return incorrect;
        // if password is correct but username is wrong//////
    } else if (user != "Gautam" && MD5Encription === "11af26128e1ec790e7fdd78fbe89197c") {
        return incorrect;
    }
    return returnMessage;
}