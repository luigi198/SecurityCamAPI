// Dependencies
var movementControlApi = require('./app/api/movementControlAPI');

// Methods
exports.routes = function(router) {
  router.post('/notifyMovement', movementControlApi.notifyMovementAPI);
};