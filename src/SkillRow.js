import React from 'react';
import { jobTitles, skillProficencies } from './job-data';

const SkillRow = ({ skill }) => {
  const proficincies = skillProficencies[skill];

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
