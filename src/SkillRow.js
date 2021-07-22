import classNames from 'classnames';
import React from 'react';
import { jobTitles, skillProficencies } from './job-data';

const SkillRow = ({ skill, activeJobTitle, activeSkill, onClick }) => {
  const proficincies = skillProficencies[skill];

  const handleClick = (skill) => {
    const nextActiveSkill = skill === activeSkill ? null : skill;
    onClick(nextActiveSkill);
  };

  const skillClasses = classNames('skill', {
    inactive: activeSkill !== null && skill !== activeSkill,
  });

  return (
    <>
      <button
        className={skillClasses}
        type="button"
        onClick={() => handleClick(skill)}
      >
        {skill}
      </button>
      {proficincies.map((proficiency, i) => {
        const proficiencyClass = `proficiency ${proficiency.toLowerCase()}`;
        const proficiencyKey = `${jobTitles[i]}-${proficiency}`;

        const isInactiveProficiency =
          (activeJobTitle !== null && jobTitles[i] !== activeJobTitle) ||
          (activeSkill !== null && skill !== activeSkill);

        const classes = classNames(proficiencyClass, {
          inactive: isInactiveProficiency,
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
