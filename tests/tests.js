var clonemerge = require('../');

exports.clonemerge = {

    "Clone": function(test) {
        var source = { a: 1, b: 2 };
        var copy = clonemerge(source);

        copy.b = 3;

        test.expect(2);

        test.equal(source.b, 2);
        test.equal(copy.a, 1);

        test.done();
    },

    "Merge": function(test) {
        var first = { a: 1, b: 2 };
        var second = { b: 3, c: 4};

        var copy = clonemerge(first, second);

        test.expect(5);

        test.equal(first.c, undefined);
        test.equal(second.a, undefined);

        test.equal(copy.a, 1);
        test.equal(copy.b, 3);
        test.equal(copy.c, 4);

        test.done();
    }
}