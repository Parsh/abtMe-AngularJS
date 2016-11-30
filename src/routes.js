angular.module("myWebApp")
    .config(RoutesConfig);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"]

function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home')

    $stateProvider
        .state('home', {

            url: '/home',
            templateUrl: 'src/templates/home.html'

        })
        .state('mLAndAI', {

            url: '/machineLearningAndAI',
            templateUrl: 'src/templates/MLandAI.html'

        })
        .state('webDev', {

            url: '/webAppsDevelopment',
            templateUrl: 'src/templates/webDev.html'

        })
}
