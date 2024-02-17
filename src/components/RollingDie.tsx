import { useEffect, useState } from 'react';
import Die from './Die';

const RollingDie = () => {
    const [die, setDie] = useState(1);

    useEffect(() => {
        const rollingAnimation = setInterval(() => {
            setDie(Math.ceil(Math.random() * 6));
        }, 100);

        return () => {
            clearInterval(rollingAnimation);
        };
    }, []);

    return <Die value={die} />;
};

export default RollingDie;
