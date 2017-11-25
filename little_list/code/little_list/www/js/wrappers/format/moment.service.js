(function () {
    'use strict';

    angular
        .module('momentjs',[])
        .factory('moment', function ($window) {
            if($window.moment){
                //Delete moment from window so it's not globally accessible.
                // We can still get at it through _thirdParty however.
                $window._thirdParty = $window._thirdParty || {};
                $window._thirdParty.moment = $window.moment;
                try { delete $window.moment; } catch (e) {$window.moment = undefined;
                /*<IE8 doesn't do delete of window vars, make undefined if delete error*/}
    }
    var moment = $window._thirdParty.moment;
    return moment;
  });
})();

