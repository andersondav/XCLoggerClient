angular.module('login').component('login', {
    templateUrl: './login/login.template.html',
    controller: function LoginController() {
        this.submitInfo = function() {
            console.log(this.username);
            console.log(this.password);
        }
    }
})