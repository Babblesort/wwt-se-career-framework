import classNames from 'classnames';
import React from 'react';
import { jobTitles, skillProficencies } from './job-data';

const SkillRow = ({ skill, activeJobTitle }) => {
  const proficincies = skillProficencies[skill];

  return (
    <>
      <div className="skill">{skill}</div>
      {proficincies.map((proficiency, i) => {
        const proficiencyClass = `proficiency ${proficiency.toLowerCase()}`;
        const proficiencyKey = `${jobTitles[i]}-${proficiency}`;
        const classes = classNames(proficiencyClass, {
          inactive: activeJobTitle != null && jobTitles[i] !== activeJobTitle,
        });
        return (
          <div className={classes} key={proficiencyKey}>
            {proficiency}
          </div>
        );
      })}
    </>
  );
};

export default SkillRow;
