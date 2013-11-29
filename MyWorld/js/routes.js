'use strict';

// Declare app level module which depends on filters, and services
angular.module('MyWorld', ['ngRoute', 'MyWorld.filters', 'MyWorld.services', 'MyWorld.directives', 'MyWorld.controllers', 'MyWorld.translations']).

    config(['$sceProvider', function ($sceProvider) {
        $sceProvider.enabled(false);
    }]).

    config(['$routeProvider', function ($routeProvider) {
        var routes = {
            '/error': { controller: 'ErrorController'},
            '/registration': { controller: 'RegistrationController'},
            '/home': { controller: 'HomeController'},
            '/myhome': { controller: 'MyHomeController'},
            '/search_results/:key_or_search_id': { controller: 'SearchResultsController' },
            '/search_results': { controller: 'SearchResultsController' },
            '/saved_searches': { controller: 'SavedSearchesController' },
            '/property/:id': { controller: 'PropertyController'      },
            '/request/:id': { controller: 'RequestController'       },
            '/search': { controller: 'SearchController'        }
        };

        for (var route in routes) {
            var screen = route.split('/')[1];
            $routeProvider.when(route, angular.extend({
                templateUrl: 'partials/' + screen + '.html',
                current_screen: screen,
                screen_settings_key: screen + '_view'
            }, routes[route]));
        }

        $routeProvider.otherwise({ redirectTo: '/home' });
    }]);
