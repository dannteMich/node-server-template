import {getNameString} from '../utils.js';

test('should test', () => {
    expect(getNameString('user')).toBe('hello user');
});