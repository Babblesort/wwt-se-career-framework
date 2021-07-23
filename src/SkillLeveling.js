import React from 'react';
import { jobTitles, skillDescriptions, skillProficencies } from './job-data';

const SkillLeveling = ({ activeTitle, activeSkill }) => {
  let chosenLevel = null;
  if (activeTitle !== null) {
    const titleIndex = jobTitles.findIndex((item) => item === activeTitle);
    chosenLevel = skillProficencies[activeSkill][titleIndex];
  }

  const skillLevels = skillDescriptions[activeSkill].leveling;
  let levels = Object.keys(skillLevels);

  if (chosenLevel !== null) {
    levels = levels.filter((level) => level === chosenLevel);
  }

  return (
    <>
      {levels.map((level) => {
        return (
          <div key={level}>
            <h3 className={`proficiency readonly ${level.toLowerCase()}`}>
              {level}
            </h3>
            <ul>
              {skillLevels[level].map((levelBehavior, i) => (
                <li className="proficiency-item" key={i}>
                  {levelBehavior}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default SkillLeveling;
