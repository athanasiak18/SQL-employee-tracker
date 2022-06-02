const inputCheck = require('../utils/inputCheck');

test('inputCheck()', () => {
    const obj = {name: 'martha'};

    expect(inputCheck(obj, 'name')).toBe(null);
});

test('inputCheck()', () => {
    const obj = {name: 'martha', occupation: ''};

    expect(inputCheck(obj, 'name', 'occupation')).toEqual(
        expect.objectContaining({
          error: expect.stringContaining('No occupation specified')
        })
      );
    });