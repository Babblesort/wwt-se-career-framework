import { jobTitles, skillProficencies } from './job-data';
import JobTitlesRow from './JobTitlesRow';
import SkillRow from './SkillRow';
import './app.css';

function App() {
  const skills = Object.keys(skillProficencies);

  return (
    <div className="se-grid">
      <JobTitlesRow titles={jobTitles} />

      {skills.map((skill) => (
        <SkillRow
          skill={skill}
          proficincies={skillProficencies[skill]}
          key={skill}
        />
      ))}
    </div>
  );
}

export default App;
