var assert = require("assert"),
    reduce = require("../src/index");


describe("reduce(object, callback, accumulator, thisArg)", function() {
    it("should loop over array or object and accumulator the result", function() {
        var array = [0, 1, 2],
            object = {
                0: 0,
                1: 1,
                2: 2
            },
            value;

        value = reduce(array, function(accumulator, value) {
            return accumulator + value;
        });
        assert.equal(value, 4);

        value = reduce(object, function(accumulator, value) {
            return accumulator + value;
        });
        assert.equal(value, 4);
    });
});
