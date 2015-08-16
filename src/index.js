var isArrayLike = require("is_array_like"),
    isNullOrUndefined = require("is_null_or_undefined"),
    fastBindThis = require("fast_bind_this"),
    arrayReduce = require("array-reduce"),
    objectReduce = require("object-reduce");


module.exports = reduce;


function reduce(value, callback, initialValue, thisArg) {
    callback = isNullOrUndefined(thisArg) ? callback : fastBindThis(callback, thisArg, 4);
    return isArrayLike(value) ?
        arrayReduce(value, callback, initialValue) :
        objectReduce(value, callback, initialValue);
}
