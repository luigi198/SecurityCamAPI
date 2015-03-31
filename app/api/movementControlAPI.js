//----------------
//  Dependencies
//----------------

var checkRequest = require('../utils/checkRequest'),
  ApiResponse = require('../utils/ApiResponse');

//----------------
//  Methods
//----------------

exports.notifyMovementAPI = function(req, res) {
  var requestFormat = {};

  requestFormat = {
    movement: {
      type: 'boolean',
      errorNum: {
        noProperty: 603,
        invalidType: 602
      }
    }
  };

  if(req.hasOwnProperty('body')) {
    var result = checkRequest.checkRequest(req.body, requestFormat);
    if(result.isValid()) {
      console.log('received msg at: ', Date.now());
      if(req.body.hasOwnProperty('rasp')) {
        console.log('received from raspberry!');
      }
      if(req.body.hasOwnProperty('motion')) {
        console.log('motion detected!');
      }
      ApiResponse.Success(res, {'received': true});
    } else {
      ApiResponse.Fail(res, result.error);
    }
  }
  
};