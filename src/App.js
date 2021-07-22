import { useState } from 'react';
import { jobTitles, jobSkills } from './job-data';
import JobTitlesRow from './JobTitlesRow';
import SkillRow from './SkillRow';
import './app.scss';

const App = () => {
  const [activeJobTitle, setActiveJobTitle] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="se-grid">
      <JobTitlesRow
        titles={jobTitles}
        activeJobTitle={activeJobTitle}
        onClick={setActiveJobTitle}
      />

      {jobSkills.map((skill) => (
        <SkillRow
          skill={skill}
          activeJobTitle={activeJobTitle}
          activeSkill={activeSkill}
          onClick={setActiveSkill}
          key={skill}
        />
      ))}
    </div>
  );
};

export default App;
