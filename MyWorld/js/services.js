'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('MyWorld.services', ['ngResource']).

    factory('URLParameters',function () {
        var urlParams;
        (window.onpopstate = function () {
            var match,
                pl = /\+/g,  // Regex for replacing addition symbol with a space
                search = /([^&=]+)=?([^&\/]*)/g,
                decode = function (s) {
                    return decodeURIComponent(s.replace(pl, " "));
                },
                query = window.location.search.substring(1);

            urlParams = {};
            while (match = search.exec(query))
                urlParams[decode(match[1])] = decode(match[2]);
        })();

        console.log(urlParams);

        return {
            get: function (key, default_value) {
                return urlParams[key] || default_value;
            },
            exists: function (key) {
                return (urlParams[key] !== undefined);
            }
        };
    }).


    factory('Environment',function (URLParameters) {
        var environment = URLParameters.get('environment');

        if (!environment) {
            var url_prefix = window.location.toString().match(/^https?:..([^.]+)/)[1];
            switch (url_prefix) {
                case 'app':
                    // production
                    console.log('Detected production environment');
                    environment = 'production';
                    break;
                case 'staging-app':
                    // staging
                    console.log('Detected staging environment');
                    environment = 'staging';
                    break;
                default:
                    // local development
                    console.log('Detected local development environment');
                    environment = 'local';
                    break;
            }
        }

        switch (environment) {
            case 'production':
                return {
                    serviceURL: '',
                    method: 'POST'
                };
            case 'staging':
                return {
                    serviceURL: '',
                    method: 'POST'
                };
            case 'local':
                return {
                    serviceURL: 'api/services.php/',
                    method: 'POST'
                };
        }

    }).

    factory('SetArgs',function ($resource) {
        return {
            method: '',
            data: ''
        }
    }).

    factory('ServiceParam',function ($resource, SetArgs) {
        return {
            setData: function (method, data) {
                SetArgs.method = method;
                SetArgs.data = data;
            }
        }
    }).

    factory('DataService', function ($http, $resource, Environment, SetArgs) {

        return {
            call: function (afterSuccess, afterError) {
                $http({
                    url: Environment.serviceURL + SetArgs.method,
                    method: Environment.method,
                    data: $.param(SetArgs.data),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).
                    success(function (response) {
                        //alert(response.status);
                        if (response.status) {
                            afterSuccess(response);
                        }
                        else {
                            afterError(response);
                        }

                    }).
                    error(function (response) {
                        //alert(response || "Request failed");
                        afterError(response);
                    });
            }
        }

    })
;
