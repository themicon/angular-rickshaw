/**
 @toc
 1. setup - whitelist, appPath, html5Mode
 */

'use strict';

angular.module('myApp', [
    'ngRoute', 'ngSanitize', //additional angular modules
    'ui.bootstrap',
    'angular-rickshaw'
]).
        config(['$routeProvider', '$locationProvider', '$compileProvider', function($routeProvider, $locationProvider, $compileProvider) {
                /**
                 setup - whitelist, appPath, html5Mode
                 @toc 1.
                 */
                $locationProvider.html5Mode(false);		//can't use this with github pages / if don't have access to the server

                var staticPath;
                //staticPath = '/personal/angular-rickshaw/';		//local
                //staticPath = '/';		//nodejs (local)
                //staticPath = '';		//nodejs (local)
                staticPath = '/angular-rickshaw/';		//gh-pages
                var appPathRoute = '/';
                var pagesPath = staticPath + 'pages/';

                $routeProvider.when(appPathRoute + 'home', {templateUrl: pagesPath + 'home/home.html'});

                $routeProvider.otherwise({redirectTo: appPathRoute + 'home'});
            }]);