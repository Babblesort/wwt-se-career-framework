import { useState } from 'react';
import { jobTitles, jobSkills } from './job-data';
import JobTitlesRow from './JobTitlesRow';
import SkillRow from './SkillRow';
import SkillDescription from './SkillDescription';
import './app.scss';

const App = () => {
  const [activeTitle, setActiveTitle] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);

  const handleReset = () => {
    setActiveTitle(null);
    setActiveSkill(null);
  };

  return (
    <>
      <div className="se-grid">
        <JobTitlesRow
          titles={jobTitles}
          activeTitle={activeTitle}
          activeSkill={activeSkill}
          onTitleChange={setActiveTitle}
          onReset={handleReset}
        />

        {jobSkills.map((skill) => (
          <SkillRow
            skill={skill}
            activeTitle={activeTitle}
            activeSkill={activeSkill}
            onTitleChange={setActiveTitle}
            onSkillChange={setActiveSkill}
            key={skill}
          />
        ))}
      </div>
      <SkillDescription activeTitle={activeTitle} activeSkill={activeSkill} />
    </>
  );
};

export default App;
