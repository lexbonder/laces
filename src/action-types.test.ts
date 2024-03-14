import { isGenericAction } from './action-types';

test('isGenericAction returns true when an action has a type and payload', () => {
    const mockValidAction = {
        type: 'ASDF',
        payload: { foo: 'bar' },
    };

    expect(isGenericAction(mockValidAction)).toBe(true);
});

test('isGenericAction returns false when an action is missing a payload', () => {
    const mockInvalidAction = {
        type: 'ASDF',
    };

    expect(isGenericAction(mockInvalidAction)).toBe(false);
});

test('isGenericAction returns false when an action is missing a type', () => {
    const mockInvalidAction = {
        payload: { foo: 'bar' },
    };

    expect(isGenericAction(mockInvalidAction)).toBe(false);
});
