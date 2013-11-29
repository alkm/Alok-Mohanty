'use strict';

/* Controllers */
angular.module('MyWorld.controllers', ['pascalprecht.translate']).

    controller('AppController',function ($scope, $rootScope, $location, $timeout, $document, $route, DataService, ServiceParam) {
        $scope.signUp = function () {
            $location.path('/registration');
        }
        //HTML components
        $scope.my_chat_component = '/myworld/partials/components/my_chat_component.html';
        $scope.my_chat_window='/myworld/partials/components/chatelements/my_chat_window.html';
        $rootScope.chatWindows=[];

        //Login Handler
        $scope.loginClick = function () {
            var loginData = {
                loginEmail: $scope.loginEmail,
                loginPassword: $scope.loginPassword
            };
            ServiceParam.setData('logIn', loginData);
            var successLogIn = function (message) {
                $('#logInStatus').html(message.msg);
                $rootScope.welcomeUser = message.firstname;
                $rootScope.email = message.email;
                $.jStorage.set('welcomeUser', $rootScope.welcomeUser);
                $.jStorage.set('email', $rootScope.email);
                $scope.resetLogIn();
                $location.path('/myhome');
            }

            var errorLogin = function (message) {
                $('#logInStatus').html(message.msg);
            }
            DataService.call(successLogIn, errorLogin);
        }

        $scope.resetLogIn = function () {

            $('#lEmail').val('');
            $('#lPassword').val('');
        }

        $scope.onIndexScreen = function () {
            return ($route.current != null && $route.current.current_screen == 'home');
        };

    }).
    controller('HomeController',function ($scope, $rootScope, $location, $route, ServiceParam, DataService) {
        //alert($route.current.current_screen);
        // Get the map container node.
        angular.element(document).ready(function () {
            $('.rs-slideshow').rsfSlideshow({
                slide_data_selectors: {class: {selector: 'a', attr: 'data-class'}}
            });

            $('#slideshow').bind('rsPostTransition', function (e, slide) {
                var html = '<h3>A transition has completed!</h3>';
                html += '<p>Slide data:</p><ul>';
                html += '<li>Slide key: ' + slide.slide_key + '</li>';
                for (var key in slide.slide) {
                    html += '<li>' + key + ': ' + slide.slide[key] + '</li>';
                }
                html += '</ul>';
                $('#callback-messages').html(html);
            });

            //	Do after transition into the first slide
            $('#slideshow').bind('rsFirstSlide', function (e, event_data) {
                $('#callback-messages').append('<p><strong>This is the first slide</strong></p>');
            });

            //	Do after transition into the last slide
            $('#slideshow').bind('rsLastSlide', function (e, event_data) {
                $('#callback-messages').append('<p><strong>This is the last slide</strong></p>');
            });

            //	Do when each slide is ready for transition
            $('#slideshow').bind('rsSlideReady', function (e, event_data) {
                if (event_data.slide.class) {
                    event_data.$slide.addClass(event_data.slide.class);
                    $('#slide-class-message').html('<p><strong>Added the class ‘' + event_data.slide.class + '’ to this slide using a custom handler for the rsSlideReady event.</strong></p>');
                }
                else {
                    $('#slide-class-message').html('<p><strong>There is no custom class for this slide.</strong></p>');
                }
            });
        });
        var mapContainer = $("#mapContainer");

        // Create the new Goole map controller using our
        // map (pass in the actual DOM object). Center it
        // above the first Geolocated IP address.
        var map = new google.maps.Map(
            mapContainer[ 0 ],
            {
                zoom: 11,
                center: new google.maps.LatLng(
                    40.700683,
                    -73.925972
                ),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        );

        //map.mapTypeId = google.maps.MapTypeId.SATELLITE;

        // I add a marker to the map using the given latitude
        // and longitude location.
        function addMarker(latitude, longitude, label) {

            // Center the marker on the map
            map.setCenter(new google.maps.LatLng(latitude, longitude));
            // Create the marker - this will automatically place it
            // on the existing Google map (that we pass-in).
            var marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(
                    latitude,
                    longitude
                ),
                title: (label || "")
            });

            // Return the new marker reference.
            return( marker );
        }


        // I update the marker's position and label.
        function updateMarker(marker, latitude, longitude, label) {
            // Update the position.
            marker.setPosition(
                new google.maps.LatLng(
                    latitude,
                    longitude
                )
            );

            // Update the title if it was provided.
            if (label) {

                marker.setTitle(label);

            }
        }


        // -------------------------------------------------- //
        // -------------------------------------------------- //
        // -------------------------------------------------- //
        // -------------------------------------------------- //


        // Check to see if this browser supports geolocation.
        if (navigator.geolocation) {

            // This is the location marker that we will be using
            // on the map. Let's store a reference to it here so
            // that it can be updated in several places.
            var locationMarker = null;


            // Get the location of the user's browser using the
            // native geolocation service. When we invoke this method
            // only the first callback is requied. The second
            // callback - the error handler - and the third
            // argument - our configuration options - are optional.
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    // Check to see if there is already a location.
                    // There is a bug in FireFox where this gets
                    // invoked more than once with a cahced result.
                    if (locationMarker) {
                        return;
                    }

                    // Log that this is the initial position.
                    console.log("Initial Position Found");

                    // Add a marker to the map using the position.

                    locationMarker = addMarker(
                        position.coords.latitude,
                        position.coords.longitude,
                        "Initial Position"
                    );

                },
                function (error) {
                    console.log("Something went wrong: ", error);
                },
                {
                    timeout: (5 * 1000),
                    maximumAge: (1000 * 60 * 15),
                    enableHighAccuracy: true
                }
            );


            // Now tha twe have asked for the position of the user,
            // let's watch the position to see if it updates. This
            // can happen if the user physically moves, of if more
            // accurate location information has been found (ex.
            // GPS vs. IP address).
            //
            // NOTE: This acts much like the native setInterval(),
            // invoking the given callback a number of times to
            // monitor the position. As such, it returns a "timer ID"
            // that can be used to later stop the monitoring.
            var positionTimer = navigator.geolocation.watchPosition(
                function (position) {

                    // Log that a newer, perhaps more accurate
                    // position has been found.
                    console.log("Newer Position Found");

                    // Set the new position of the existing marker.
                    updateMarker(
                        locationMarker,
                        position.coords.latitude,
                        position.coords.longitude,
                        "Updated / Accurate Position"
                    );

                }
            );


            // If the position hasn't updated within 5 minutes, stop
            // monitoring the position for changes.
            setTimeout(
                function () {
                    // Clear the position watcher.
                    navigator.geolocation.clearWatch(positionTimer);
                },
                (1000 * 60 * 5)
            );

        }
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.gender = ""
        $scope.email = "";
        $scope.password = "";

        $scope.onSignUpClick = function () {
            var data = {
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                gender: $scope.gender,
                email: $scope.email,
                password: $scope.password
            };
            ServiceParam.setData('signUp', data);
            var successSignUp = function (status) {
                $('#signUpStatus').html(status.msg);
                $scope.resetSignUp();
            }

            var errorSignUp = function () {
                alert("Signup Error");
            }
            DataService.call(successSignUp, errorSignUp);
        };

        $scope.resetSignUp = function () {
            $('#fName').val('');
            $('#lName').val('');
            $('#emal').val('');
            $('#mal').prop('checked', false);
            $('#fmal').prop('checked', false);
            $('#pwd').val('');
            $('#cpwd').val('');
        }

    }).

    controller('RegistrationController',function ($scope, $route, $location) {

    }).

    controller('MyHomeController', function ($scope, $rootScope,$route, $location) {
        $rootScope.welcomeUser = $.jStorage.get('welcomeUser');
        $rootScope.email = $.jStorage.get('email');


    })
;
