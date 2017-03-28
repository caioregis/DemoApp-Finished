'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {

        $scope.event = {};

        $scope.saveEvent = function(event, newEventForm) {
            if(newEventForm.$valid) {

                //pegar ultimo id do evento
                eventData.getAllEvents().$promise
                    .then(function(data) {

                        var lastEvent = data[data.length - 1];
                        event.id = lastEvent.id + 1;

                        eventData.save(event)
                            .$promise
                            .then(function(response) { console.log('success', response)})
                            .catch(function(response) { console.log('failure', response)});
                    });
            }
        };

        $scope.cancelEvent = function() {
            window.location = '/EventDetails.html';
        }

    }
);