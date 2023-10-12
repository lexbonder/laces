export const rollDice = (amount: number): number[] => {
    const rolls: number[] = [];

    for (let i = 0; i < amount; i++) {
        rolls.push(Math.ceil(Math.random() * 6));
    }

    return rolls;
};
