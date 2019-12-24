angular
    .module('xcLogger')
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider
                .when('/welcome', {
                    template: '<login-or-signup></login-or-signup>'
                })
                .when('/login', {
                    template: '<login></login>'
                })
                .when('/signup', {
                    template: '<signup></signup>'
                })
                .otherwise('/welcome');
        }
    ]);