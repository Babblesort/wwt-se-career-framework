import classNames from 'classnames';
import React from 'react';
import { jobTitles, skillProficencies } from './job-data';

const SkillRow = ({
  skill,
  activeTitle,
  activeSkill,
  onSkillChange,
  onTitleChange,
}) => {
  const proficincies = skillProficencies[skill];

  const handleSkillClick = (skill) => {
    const nextActiveSkill = skill === activeSkill ? null : skill;
    onSkillChange(nextActiveSkill);
  };

  const handleProficiencyClick = (skill, title) => {
    onSkillChange(skill);
    onTitleChange(title);
  };

  const skillClasses = classNames('skill', {
    inactive: activeSkill !== null && skill !== activeSkill,
  });

  return (
    <>
      <button
        className={skillClasses}
        type="button"
        onClick={() => handleSkillClick(skill)}
      >
        {skill}
      </button>
      {proficincies.map((proficiency, i) => {
        const proficiencyClass = `proficiency ${proficiency.toLowerCase()}`;
        const proficiencyKey = `${jobTitles[i]}-${proficiency}`;

        const isInactiveProficiency =
          (activeTitle !== null && jobTitles[i] !== activeTitle) ||
          (activeSkill !== null && skill !== activeSkill);

        const classes = classNames(proficiencyClass, {
          inactive: isInactiveProficiency,
        });
        return (
          <button
            type="button"
            className={classes}
            onClick={() => handleProficiencyClick(skill, jobTitles[i])}
            key={proficiencyKey}
          >
            {proficiency}
          </button>
        );
      })}
    </>
  );
};

export default SkillRow;
