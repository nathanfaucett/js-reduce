var keys = require("keys"),
    isNullOrUndefined = require("is_null_or_undefined"),
    fastBindThis = require("fast_bind_this"),
    isObjectLike = require("is_object_like"),
    isLength = require("is_length");


function reduceArray(array, callback, accumulator, initFromArray) {
    var length = array.length,
        i = -1,
        il = length - 1;

    if (initFromArray && length) {
        accumulator = array[++i];
    }

    while (i++ < il) {
        accumulator = callback(accumulator, array[i], i);
    }

    return accumulator;
}

function reduceObject(object, callback, accumulator, initFromArray) {
    var objectKeys = keys(object),
        length = objectKeys.length,
        i = -1,
        il = length - 1,
        key;

    if (initFromArray && length) {
        accumulator = object[objectKeys[++i]];
    }

    while (i++ < il) {
        key = objectKeys[i];
        accumulator = callback(accumulator, object[key], key);
    }

    return accumulator;
}

module.exports = function reduce(object, callback, accumulator, thisArg) {
    callback = isNullOrUndefined(thisArg) ? callback : fastBindThis(callback, thisArg, 3);
    return (isObjectLike(object) && isLength(object.length)) ? reduceArray(object, callback, arguments.length < 3) : reduceObject(object, callback, arguments.length < 3);
};
