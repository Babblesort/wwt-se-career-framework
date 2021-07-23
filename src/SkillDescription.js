import React from 'react';
import { skillDescriptions } from './job-data';

const SkillDescription = ({ activeTitle, activeSkill }) => {
  if (activeSkill === null) {
    return null;
  }

  const skillDefinition = skillDescriptions[activeSkill].definition;
  const skillBehaviors = skillDescriptions[activeSkill].behaviors;

  return (
    <div className="skill-description">
      <h1>{activeSkill}</h1>
      <section>
        <h2>Definition</h2>
        <p className="definition">{skillDefinition}</p>
      </section>
      <section>
        <h2>Behaviors</h2>
        <ul>
          {skillBehaviors.map((behavior, i) => (
            <li key={i}>{behavior}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SkillDescription;
