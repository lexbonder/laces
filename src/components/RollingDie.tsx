import { useEffect, useState } from 'react';
import Die from './Die';

const RollingDie = () => {
    const [die, setDie] = useState(1);

    useEffect(() => {
        const rollingAnimation = setInterval(() => {
            setDie(Math.ceil(Math.random() * 6));
        }, 100);
        console.log('animation start');

        return () => {
            clearInterval(rollingAnimation);
            console.log('animation end');
        };
    }, []);

    return <Die value={die} />;
};

export default RollingDie;
