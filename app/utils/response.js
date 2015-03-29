//---------------------------------------------------------------------------
//  Object to validate any response needed and keeps custom Errors in array
//---------------------------------------------------------------------------

var Status = {
  Error: 'Error',
  Success: 'Success',
  Fail: 'Fail'
};

var CamResponse = {
  Success: function (data) {
    this.status = Status.Success;
    this.data = data;
    return {status: this.status, data: this.data};
  },

  Error: function (code, message) {
    this.status = Status.Error;
    this.message = message;
    this.code = code;
    return {status: this.status, code: this.code, message: this.message};
  },

  Fail: function (code, message) {
    this.body = {};
    this.data = {};
    this.body.status = Status.Fail;
    this.body.code = code;
    this.data.message = message;
    this.body.data = this.data;
    return this.body;
  }
};

exports.CamResponse = CamResponse;

var Response = function() {

    this.valid = true;
    this.error = 0;
    this.data = {};

    this.isValid = function() {
      return this.valid;
    };

    this.errorFound = function(err) {
      this.valid = false;
      this.error = err;
    };

};

exports.Response = Response;