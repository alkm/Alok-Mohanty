'use strict';

/* Filters */

angular.module('MyWorld.filters', ['pascalprecht.translate']).
    filter('keys',function () {
        return function (obj) {
            if (!(obj instanceof Object)) {
                return obj;
            }

            console.log(obj);

            var arr = [];
            for (var key in obj) {
                arr.push(key);
            }
            return arr;
        }
    }).
    filter('values',function () {
        return function (obj) {
            if (!(obj instanceof Object)) {
                return obj;
            }

            var arr = [];
            for (var key in obj) {
                arr.push(obj[key]);
            }
            return arr;
        }
    }).
    filter('homeButtonClass', [function () {
        return function (button) {
            return (button.use_custom_image == true) ? 'custom-image-button' : 'text-button';
        }
    }]).
    filter('formatPriceMini', ['$translate', function (translate) {
        return function (property, $scope) {
            var formatted = '';
            if (property.current_price > 0) {
                //console.log(property);
                if (property.sale_or_rent == 'rent') {
                    formatted += numeral(property.current_price).format('$0,0') + ' / ' + translate('month');
                }
                else {
                    formatted += numeral(property.current_price).format('$0,0');
                }
            }

            return formatted;
        }
    }]).
    filter('formatPrice', ['$translate', function (translate) {
        return function (property, $scope) {
            var formatted = '';
            if (property.current_price > 0) {
                //console.log(property);
                if (property.sale_or_rent == 'rent') {
                    formatted += "Rental Price: " + numeral(property.current_price).format('$0,0') + ' / ' + translate('month');
                }
                else {
                    formatted += "List Price: " + numeral(property.current_price).format('$0,0');
                }
            }

            return formatted;
        }
    }]).
    filter('formatPropertyDescription', ['$filter', function (filter) {
        return function (property, $scope) {
            if (!(property instanceof Object)) {
                return property;
            }

            var formatted = '';

            if ($scope.office.show_mls_in_listings) {
                formatted += "MLS #" + property.mls_number;
                formatted += "<br>";
            }

            var formatPrice = filter('formatPrice');
            if (property.current_price > 0) {
                formatted += formatPrice(property, $scope);
                formatted += "<br /><br />";
            }

            formatted += property.property_desc_short;

            if ($scope.office.custom_mls_credit != null && $scope.office.custom_mls_credit.length > 0) {
                formatted += "<br /><br />";
                formatted += $scope.office.custom_mls_credit;
            }
            else if (property.listing_office != null && property.listing_office.length > 0) {
                formatted += "<br /><br />";
                formatted += "Listed by: ";
                formatted += property.listing_office;
            }

            return formatted;
        }
    }]).
    //Created for pagination
    filter('startFrom', function () {
        return function (input, start) {
            start = +start;
            if (input != null && input.slice !== undefined) //Checking for null input else slice will not work
            {
                return input.slice(start);
            }
        }
    });