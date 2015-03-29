//----------------
//  Dependencies
//----------------

var Response = require('./response');

//----------------
//  Methods
//----------------

//---------------
//  Private
//---------------

var checkObjectFormat = function(obj) {
  var responseBool = true;
  for(key in obj) {
    if(!obj[key].hasOwnProperty('type')) {
      responseBool = false;
    }
    if(!obj[key].hasOwnProperty('errorNum')) {
      responseBool = false;
    }
    if(!obj[key].errorNum.hasOwnProperty('noProperty')) {
      responseBool = false;
    }
    if(!obj[key].errorNum.hasOwnProperty('invalidType')) {
      responseBool = false;
    }
  }
  return responseBool;
};

//----------------
//  Public
//----------------
/*
* @param data {Object} - body request with all keys to check
* @param keysTypes {Object} - key is the name and value is an object with type and errorNum
* @return {Object} - Response
*/
exports.checkRequest = function(data, keysTypes) {
  var responseObj = {},
  response = new Response.Response();

  if(checkObjectFormat(keysTypes)) {
    for(key in keysTypes) {
      if(!data.hasOwnProperty(key)) {
        response.errorFound(keysTypes[key].errorNum.noProperty);
        break;
      } else if(typeof data[key] !== keysTypes[key].type) {
        response.errorFound(keysTypes[key].errorNum.invalidType);
        break;
      } else {
        responseObj[key] = data[key];
      }
    }
    response.data = responseObj;
  } else {
    response.errorFound(601);
  }

  return response;
};