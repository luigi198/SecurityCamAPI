var errorEnum = require('./errorEnum').errorNum,
    Response = require('./response');

/**
 * Encapsulates the process of sending a successful response
 * @param: response  the response object to send the result to
 * @param: data  the data to send in the response
 */
exports.Success = function (response, data) {
    if (!response) {
        throw new Error('illegal arguments');
    }

    var result = Response.CamResponse;
    response.status(200).json(result.Success(data));
};

/**
 * Encapsulates the process of sending an Error response
 * @param: response  the response object to send the result to
 * @param: data  the data to send in the response
 */
exports.Error = function (response, code) {
    if (!response) {
        throw new Error('illegal arguments');
    }

    var result = Response.CamResponse;
    if (errorEnum.hasOwnProperty(code)) {
        response.status(500).json(result.Error(code, errorEnum[code]));
    } else {
        response.status(500).json(result.Error(901, errorEnum[901]));
    }

};

/**
 * Encapsulates the process of sending a failed response
 * @param: response  the response object to send the result to
 * @param: data  the data to send in the response
 */
exports.Fail = function (response, code) {
    if (!response) {
        throw new Error('illegal arguments');
    }
    var result = Response.CamResponse;
    if (errorEnum.hasOwnProperty('' + code)) {
        response.status(400).json(result.Fail(code, errorEnum[code]));
    } else {
        response.status(400).json(result.Fail(901, errorEnum[901]));
    }
};