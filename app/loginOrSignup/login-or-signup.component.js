angular.module('loginOrSignup').component('loginOrSignup',{
    templateUrl: './loginOrSignup/login-or-signup.template.html',
    controller: function loginOrSignupController() {
        this.loginMessage = "Login as Returning User";
        this.signupMessage = "Sign up as New User";
    }
});