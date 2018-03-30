module.exports = (value, onlyReturnUnit = false) => {
    const regex = /^(0?[-.]?\d+)(r?e[m|x]|v[h|w|min|max]+|p[x|t|c]|[c|m]m|%|s|in|ch)$/;
    const match = value.match(regex);

    if (onlyReturnUnit === true) {
        return match ? match[2] : undefined;
    }

    return match
        ? { value: (parseFloat(match[1]) || match[1]), unit: match[2] }
        : { value, unit: undefined };
};
