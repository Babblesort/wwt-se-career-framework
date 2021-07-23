import React from 'react';
import { skillDescriptions } from './job-data';
import SkillLeveling from './SkillLeveling';

const SkillDescription = ({ activeTitle, activeSkill }) => {
  if (activeSkill === null) {
    return null;
  }

  const skillDefinition = skillDescriptions[activeSkill].definition;
  const skillBehaviors = skillDescriptions[activeSkill].behaviors;

  return (
    <div className="skill-description">
      <h1 className="skill-label">{activeSkill}</h1>
      <section>
        <h2 className="section-label">Definition</h2>
        <p className="skill-definition">{skillDefinition}</p>
      </section>
      <section>
        <h2 className="section-label">Behaviors</h2>
        <ul>
          {skillBehaviors.map((behavior, i) => (
            <li className="skill-behavior" key={i}>
              {behavior}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <SkillLeveling activeTitle={activeTitle} activeSkill={activeSkill} />
      </section>
    </div>
  );
};

export default SkillDescription;
