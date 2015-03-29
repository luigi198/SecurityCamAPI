/*
* Error object for adding error codes or custom error functions,
* it will trigger catch in promises.
*/

function CamError (code) {
  this.code = code || 920;
};

CamError.prototype = new Error();
CamError.prototype.constructor = CamError;

exports.CamError = CamError;