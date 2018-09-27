angular.module('myApp', [])

.config([ '$provide', function($provide) {

  $provide.decorator('$log', [
    '$delegate',
    function $logDecorator($delegate) {

      var originalWarn = $delegate.warn;
      $delegate.warn = function decoratedWarn(msg) {
        msg = 'Decorated Warn: ' + msg;
        originalWarn.apply($delegate, arguments);
      };

      return $delegate;
    }
  ]);
}]);
