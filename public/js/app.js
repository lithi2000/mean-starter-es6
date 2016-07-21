angular.module('app', ['ngRoute'])
        .service('todoService', todoService)
        .controller('mainController', mainController)
        .service('repertService', repertService)
        .controller('repController', repController)
        .config(routes)

        ;
