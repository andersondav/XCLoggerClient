angular.module('signup').component('signup', {
    templateUrl: './signup/signup.template.html',
    controller: function SignupController() {
        this.submitInfo = function() {
            console.log(this.firstName);
            console.log(this.lastName);
            console.log(this.email)
            console.log(this.username);
            console.log(this.password);
            console.log(this.confirmPassword);
            console.log(this.password == this.confirmPassword ? 'Passwords match!' : 'Passwords do not match!');
        }
    }
})