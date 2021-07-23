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
      <h2>Leveling</h2>
      {levels.map((level) => {
        return (
          <div key={level}>
            <h3>{level}</h3>
            <ul>
              {skillLevels[level].map((levelBehavior, i) => (
                <li key={i}>{levelBehavior}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default SkillLeveling;
