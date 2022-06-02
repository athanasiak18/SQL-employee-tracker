const scriptCheck = require('../utils/script');

test('scriptCheck()', () => {
    const obj = {name: 'james'};

    expect(scriptCheck(obj, 'name')).toBe(null);
});

test('scriptCheck()', () => {
    const obj = {name: 'james', occupation: ''};

    expect(scriptCheck(obj, 'name', 'occupation')).toEqual(
        expect.objectContaining({
        })
      );
    });