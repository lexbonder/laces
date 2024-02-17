interface IDiceResult {
    rolls: number[];
    total: number;
    pipsToMax: number;
}

export const rollDice = (amount: number): IDiceResult => {
    const rolls: number[] = [];

    for (let i = 0; i < amount; i++) {
        rolls.push(Math.ceil(Math.random() * 6));
    }

    const total = rolls.reduce((sum, roll) => sum + roll, 0);
    const pipsToMax = 6 * amount - total;

    return { rolls, total, pipsToMax };
};
