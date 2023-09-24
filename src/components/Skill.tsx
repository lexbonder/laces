import { useState } from 'react';

interface ISkill {
  name: string;
  level: number;
  children: ISkill[];
}

function Skill<ISkill>() {
  const [name, setName] = useState('');
  const [level, setLevel] = useState(1);
  const children: ISkill[] = [];

  return (
    <>
    </>
  );
}

export default Skill;
