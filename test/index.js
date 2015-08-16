var tape = require("tape"),
    reduce = require("..");


tape("reduce(object, callback[, initialValue[, thisArg]]) applies a function against an accumulator and each value of the object (from left-to-right) to reduce it to a single value", function(assert) {
    assert.equals(
        reduce({
            a: 0,
            b: 1,
            c: 2
        }, function(currentValue, value) {
            return currentValue + value;
        }),
        3
    );
    assert.equals(
        reduce([0, 1, 2, 3, 4], function(currentValue, value) {
            return currentValue + value;
        }),
        10
    );
    assert.end();
});
