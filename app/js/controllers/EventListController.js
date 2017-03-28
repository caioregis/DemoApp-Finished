'use strict';

eventsApp.controller('EventListController',
    function EventListController($scope, eventData, $route) {
        $scope.events = $route.current.locals.events;
    }
);