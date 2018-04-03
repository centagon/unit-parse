module.exports = (value, onlyReturnUnit = false) => {
    const match = value.match(/^(0?[-.]?\d+)(r?e[m|x]|v[h|w|min|max]+|p[x|t|c]|[c|m]m|%|s|in|ch)$/);
    const res = match
        ? { value: (parseFloat(match[1]) || match[1]), unit: match[2] }
        : { value, unit: undefined };

    return onlyReturnUnit ? res.unit : res;
};
