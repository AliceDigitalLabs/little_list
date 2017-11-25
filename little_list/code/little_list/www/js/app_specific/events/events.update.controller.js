(function () {
    'use strict';

    angular
        .module('eventsjs')
        .controller('eventsUpdateCtrl', control);

    control.$inject = [
        '$state',
        'eventsSrvc'
        ];
    
    function control(
        $state,
        eventsSrvc
    ) {
        var vm = angular.extend(this, {
            
         });
        

      

        // TODO: Error Handling
        eventsSrvc.updateEvents().then(function(){
            $state.go('events_list');
        });    
    }
})();
