'use strict';

/* Directives */


angular.module('MyWorld.directives', []).

    directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]).

    directive('cycle',function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $(element).cycle({
                    fx: 'fade',
                    timeout: 10
                });
            }
        };
    }).

    directive('siteHeader',function (RefineSearchParam) {
        return {
            restrict: 'E',
            template: '<a class="button">{{back}}</a>',
            scope: {
                back: '@back',
                icons: '@icons'
            },
            link: function (scope, element, attrs) {
                $(element[0]).on('click', function () {
                    RefineSearchParam.isRefineSearch = false;
                    RefineSearchParam.backClick = true;
                    window.history.back();
                    scope.$apply();
                });
            }
        };
    }).

    directive('errSrc', function () {
        return {
            link: function (scope, element, attrs) {
                element.bind('error', function () {
                    element.attr('src', attrs.errSrc);
                });
            }
        }
    }).

    directive('keyEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.keyEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });

