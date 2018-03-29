module.exports = function (value) {
    var regex = /^(0?[-.]?\d+)(r?e[m|x]|v[h|w|min|max]+|p[x|t|c]|[c|m]m|%|s|in|ch)$/;
    var match = value.match(regex);

    return match
        ? { value: (parseFloat(match[1]) || match[1]), unit: match[2] }
        : { value, unit: undefined };
};
