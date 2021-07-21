import React from 'react';
import { jobTitles } from './job-data';

const SkillRow = ({ skill, proficincies }) => {
  return (
    <>
      <div className="skill">{skill}</div>
      {proficincies.map((proficiency, i) => {
        const proficiencyClass = `proficiency ${proficiency.toLowerCase()}`;
        const proficiencyKey = `${jobTitles[i]}-${proficiency}`;
        return (
          <div className={proficiencyClass} key={proficiencyKey}>
            {proficiency}
          </div>
        );
      })}
    </>
  );
};

export default SkillRow;
