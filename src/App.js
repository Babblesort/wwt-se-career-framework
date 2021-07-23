import { useState } from 'react';
import { jobTitles, jobSkills } from './job-data';
import JobTitlesRow from './JobTitlesRow';
import SkillRow from './SkillRow';
import SkillDescription from './SkillDescription';
import './app.scss';

const App = () => {
  const [activeTitle, setActiveTitle] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <>
      <div className="se-grid">
        <JobTitlesRow
          titles={jobTitles}
          activeTitle={activeTitle}
          onTitleChange={setActiveTitle}
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
