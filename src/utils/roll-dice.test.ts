import { rollDice } from './roll-dice';

test('rollDice.rolls should be an array matching the amount passed in', () => {
    const result = rollDice(5);
    expect(result.rolls.length).toBe(5);
});

test('rollDice.total should be a number', () => {
    const result = rollDice(3);
    assertType<number>(result.total);
});

test('rollDice.pipsToMax should be the difference between the max possible roll, and the total', () => {
    const numDice = 4;
    const result = rollDice(numDice);
    expect(numDice * 6 - result.total).toBe(result.pipsToMax);
});
