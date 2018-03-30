/* global test, expect */

const parseUnit = require('./index');

// https://www.w3schools.com/cssref/css_units.asp
const units = [
    'em', 'ex', '%', 'px',
    'cm', 'mm', 'in', 'pt',
    'pc', 'ch', 'rem', 'vh',
    'vw', 'vmin', 'vmax', 's',
];

units.forEach((unit) => {
    const parsedUnit = parseUnit(`20${unit}`);

    test(`can convert ${unit}`, () => {
        expect(parsedUnit).toEqual({
            unit,
            value: 20,
        });
    });
});

test('can convert negative values', () => {
    expect(parseUnit('-15%')).toEqual({
        value: -15,
        unit: '%',
    });
});

test('can convert values with decimal point', () => {
    expect(parseUnit('0.5s')).toEqual({
        value: 0.5,
        unit: 's',
    });
});

test('can return only the unit', () => {
    expect(parseUnit('19rem', true)).toBe('rem');
});

test('returns undefined when asking for a value without a unit', () => {
    expect(parseUnit('50', true)).toBe(undefined);
});

test('cannot convert unknown units', () => {
    const unit = parseUnit('20m');

    expect(unit).toEqual({
        value: '20m',
        unit: undefined,
    });
});
