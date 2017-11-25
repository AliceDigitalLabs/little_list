(function () {
    'use strict';

    angular
        .module('eventsjs')
        .controller('eventsDetailCtrl', control);

    control.$inject = [
        '$state',
        '$stateParams',
        'eventsSrvc'
        ];
    
    function control(
        $state,
        $stateParams,
        eventsSrvc
    ) {
        var vm = angular.extend(this, {
            event : {
                name: "no name",
                date: new Date(),
                postcode : "no location"
            }
         });
        

        vm.done = function(){
            $state.go('events_list');
        }

        var params = $stateParams;

        vm.event = eventsSrvc.getEventAt(params.selected);

        

    }
})();
