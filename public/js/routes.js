const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/todos', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/', {
            templateUrl: 'views/repertmain.html',
            controller: 'repController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        })

}
