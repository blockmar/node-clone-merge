var clone = require('clone'),
    _ = require('underscore');

module.exports = function (source, extend) {

    var copy = clone(source);

    if (_.isObject(extend)) {
        _.extend(copy, extend);
    }

    return copy;
};