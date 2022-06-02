const inputCheck = require('../utils/inputCheck');

test('inputCheck()', () => {
    const obj = {name: 'martha'};

    expect(inputCheck(obj, 'name')).toBe(null);
});

test('inputCheck()', () => {
    const obj = {name: 'martha', occupation: ''};