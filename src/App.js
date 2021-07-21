import { jobTitles, jobSkills } from './job-data';
import JobTitlesRow from './JobTitlesRow';
import SkillRow from './SkillRow';
import './app.css';

const App = () => {
  return (
    <div className="se-grid">
      <JobTitlesRow titles={jobTitles} />

      {jobSkills.map((skill) => (
        <SkillRow skill={skill} key={skill} />
      ))}
    </div>
  );
};

export default App;
