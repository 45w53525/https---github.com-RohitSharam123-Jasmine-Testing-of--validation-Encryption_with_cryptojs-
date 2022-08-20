describe(" Test checklogin Function", function() {
    ///Test TO PASS/////
    describe("checkLogin Test to Pass", function() {
        it("should return ‘Welcome back!’ when the correct username and password entered. and my Name :Gautam , Password :Rohit is added ", function() {
            var username = "Gautam";
            var userpassword = "Rohit";
            expect(checklogin(username, userpassword)).toEqual("Welcome back!");
        })

    });
    describe("checkLogin Test to Fail", function() {
        //////// Test To Fail///////////
        it("should return ‘Invalid Username or Password.’ when the incorrect username and password entered. and my Name :Gauti ,Password: Rohit", function() {
            var username = "Gauti";
            var userpassword = "Rohit";
            expect(checklogin(username, userpassword)).toEqual("Invalid Username or Password.");
        })
        it("should return ‘Invalid Username or Password.’ when the incorrect username and password entered. and my Name :Gautam ,Password:Roh", function() {
            var username = "Gautam";
            var userpassword = "Roh";
            expect(checklogin(username, userpassword)).toEqual("Invalid Username or Password.");
        })
        it("should return ‘Invalid Username or Password.’ when the incorrect username and password entered. and my Name :Rohit ,Password:Gautam", function() {
            var username = "Rohit";
            var userpassword = "Gautam";
            expect(checklogin(username, userpassword)).toEqual("Invalid Username or Password.");
        })
        it("should return ‘No username entered.’ when the no username  but password entered. and my Name : ,Password:Rohit'", function() {
            var username = "";
            var userpassword = "Rohit";
            expect(checklogin(username, userpassword)).toEqual("No username entered.");
        });
        it("should return ‘No username entered.’ when the no password  but username entered. and my Name :Gautam ,Password:", function() {
            var username = "Gautam";
            var userpassword = "";
            expect(checklogin(username, userpassword)).toEqual("No password entered.");
        });

    });

});
describe(" Test md5Encrypt Function", function() {
    ///// test to Pass for md5Encrypt///////////
    describe("md5Encrypt Test to Pass", function() {
        it("should match the password ‘Rohit’ with the Encrypted form of Rohit: 11af26128e1ec790e7fdd78fbe89197c", function() {
            var userpassword = "Rohit";
            expect(md5Encrypt(userpassword)).toMatch("11af26128e1ec790e7fdd78fbe89197c");
        })

    });




});