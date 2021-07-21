const AGILE = 'Agile Engineering Best Practices';
const PROGRAMMING = 'Application Development & Programming';
const ARCHITECTURE = 'Architecture Design';
const COMMUNICATION = 'Technical Communication & Presentation';
const LEADERSHIP = 'Technical Leadership';
const CONSULTING = 'Technology Advising & Consulting';
const REQUIREMENTS = 'Technical Requirements Analysis';

const NONE = '';
const DEVELOPING = 'Developing';
const SUPPORTING = 'Supporting';
const APPLYING = 'Applying';
const LEADING = 'Leading';
const SHAPING = 'Shaping';

export const jobTitles = [
  'Software Engineer Apprentice',
  'Software Engineer 1',
  'Software Engineer 2',
  'Software Engineer 3',
  'Software Engineer 4',
  'Software Engineer 5',
  'Lead Software Engineer',
  'Software Architect',
];

export const skillProficencies = {
  [AGILE]: [
    DEVELOPING,
    SUPPORTING,
    APPLYING,
    APPLYING,
    APPLYING,
    LEADING,
    LEADING,
    LEADING,
  ],
  [PROGRAMMING]: [
    DEVELOPING,
    SUPPORTING,
    APPLYING,
    APPLYING,
    LEADING,
    LEADING,
    LEADING,
    APPLYING,
  ],
  [ARCHITECTURE]: [
    NONE,
    DEVELOPING,
    DEVELOPING,
    SUPPORTING,
    SUPPORTING,
    APPLYING,
    LEADING,
    SHAPING,
  ],
  [COMMUNICATION]: [
    DEVELOPING,
    DEVELOPING,
    SUPPORTING,
    SUPPORTING,
    APPLYING,
    LEADING,
    LEADING,
    SHAPING,
  ],
  [LEADERSHIP]: [
    NONE,
    NONE,
    DEVELOPING,
    SUPPORTING,
    APPLYING,
    LEADING,
    LEADING,
    LEADING,
  ],
  [CONSULTING]: [
    NONE,
    NONE,
    DEVELOPING,
    SUPPORTING,
    SUPPORTING,
    APPLYING,
    LEADING,
    SHAPING,
  ],
  [REQUIREMENTS]: [
    DEVELOPING,
    SUPPORTING,
    APPLYING,
    APPLYING,
    APPLYING,
    APPLYING,
    LEADING,
    LEADING,
  ],
};

export const jobSkills = Object.keys(skillProficencies);
