import * as dice from '../assets';

interface IDie {
    value: number;
}

const Die = ({ value }: IDie) => {
    const result = ('dice' + value) as keyof typeof dice;
    return <img src={dice[result]} width={40} style={{ margin: 10 }} />;
};

export default Die;
