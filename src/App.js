import { useState } from 'react';
import { jobTitles, jobSkills } from './job-data';
import JobTitlesRow from './JobTitlesRow';
import SkillRow from './SkillRow';
import './app.scss';

const App = () => {
  const [activeTitle, setActiveJobTitle] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="se-grid">
      <JobTitlesRow
        titles={jobTitles}
        activeTitle={activeTitle}
        onClick={setActiveJobTitle}
      />

      {jobSkills.map((skill) => (
        <SkillRow
          skill={skill}
          activeTitle={activeTitle}
          activeSkill={activeSkill}
          onTitleChange={setActiveJobTitle}
          onSkillChange={setActiveSkill}
          key={skill}
        />
      ))}
    </div>
  );
};

export default App;
