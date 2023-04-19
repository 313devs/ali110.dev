import React from 'react';
import data from '../public/data.json';

type skillData = {
  id: number;
  text: string;
};

const SkillList: React.FC = () => {
  return (
    <div className="flex flex-row h-fit w-fit flex-wrap">
      {data.map((item: skillData) => (
        <h1 key={item.id} className="text-sm font-popL ml-0 mb-4 px-1 py-1 text-black 2xl:text-4xl dark:text-white dark:hover:bg-white/20 hover:bg-black/20 rounded-sm cursor-none">{item.text}</h1>
      ))}
    </div>
  );
};

export default SkillList;
