angular.module('loginOrSignup').component('loginOrSignup', {
    templateUrl: './loginOrSignup/login-or-signup.template.html',
    controller: function LoginOrSignupController() {
        this.loginMessage = "Login as Returning User";
        this.signupMessage = "Signup as New User";
    }
});