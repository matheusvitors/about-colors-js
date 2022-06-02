const { hexToRGBA } = require('../src/index');


test('return a rgba color', () => {
    expect(hexToRGBA('#fff', 1)).toBe('rgba(255,255,255,1)'); 
})

test('failed to pass a hex', () => {
    expect(hexToRGBA('#xyz', 1)).toBe(false);
})