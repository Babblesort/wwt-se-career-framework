const AGILE = 'Agile Engineering Best Practices';
const PROGRAMMING = 'Application Development & Programming';
const ARCHITECTURE = 'Architecture Design';
const COMMUNICATION = 'Technical Communication & Presentation';
const LEADERSHIP = 'Technical Leadership';
const CONSULTING = 'Technology Advising & Consulting';
const REQUIREMENTS = 'Technical Requirements Analysis';

export const NONE = '';
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

export const skillDescriptions = {
  [AGILE]: {
    definition:
      'Deploys agile engineering best practices as appropriate throughout the software development lifecycle.',
    behaviors: [
      'Has a deep understanding of software development lifecycle and various agile engineering practices.',
      'Leverages knowledge of agile vs. traditional engineering methodologies to determine most effective approach and strategies for software development projects.',
      'Has a proven track record applying agile engineering practices and methods to current and past projects.',
      'Is actively assisting on software development projects where agile engineering methods (e.g.,Extreme Programming, Feature Driven Development) are applied.',
    ],
    leveling: {
      [DEVELOPING]: [
        'Has a common knowledge or an understanding of basic techniques and concepts.',
        'Is actively increasing their understanding of the software development lifecycle and the various agile engineering practices that can be used (e.g., in planning, requirements analysis, design, coding, unit testing, acceptance testing, etc.).',
        'Is actively learning the pros and cons of agile methodologies.',
      ],
      [SUPPORTING]: [
        'Understands the software development lifecycle and how various agile engineering practices can be used (e.g., in planning, requirements analysis, design, coding, unit testing, acceptance testing).',
        'Understands when to apply agile methodologies vs. traditional methodologies to achieve the best development outcome.',
        'Applies Agile Engineering practices (e.g., Extreme Programming techniques such as Pair Programming and Test-first Development) in own software development projects.',
        'Focus on developing through on-the-job experience.',
      ],
      [APPLYING]: [
        'Able to successfully apply Agile Engineering best practices as necessary. Help from an expert may be required from time to time but can usually perform independently.',
        'Stays current on industry trends and serves as an expert on the software development lifecycle and agile engineering practices, coaching others when needed.',
        'Recommends and plans for application of agile methodologies vs. traditional methodologies, based on comparison of various approaches to achieve the most effective development outcome.',
        'Identifies appropriate agile engineering practices (e.g., Extreme Programming techniques such as pair programming and test-driven development) and coaches others in applying in software development projects.',
      ],
      [LEADING]: [
        'Identifies and recommends improvements to the software development lifecycle and best practices in agile engineering.',
        'Provides input into various software development strategies (e.g., unit testing, acceptance testing, continuous delivery and integration, release and deployment for frequent and reliable release), providing the case for using agile vs. traditional methodologies.',
        'Develops the roadmap and guidelines for tailoring agile practices to a complex and dynamic software development project.',
      ],
      [SHAPING]: [
        'Demonstrated consistent excellence in applying Agile Engineering best practices across multiple projects and/or organizations.',
        'Considered the “go to” person in this area within Application Services and/or throughout WWT and beyond.',
        'Leads the development of reference and resource materials necessary for implementation of improvements to the software development lifecycle and leading agile engineering practices across the organization.',
        'Leads the development of software development strategies (e.g., unit testing, acceptance testing, continuous delivery and integration, release and deployment for frequent and reliable release) and presents recommendations to appropriate stakeholders.',
        'Shapes the organization’s strategy for applying agile engineering best practices in anticipation of the changing software development environment.',
      ],
    },
  },
  [PROGRAMMING]: {
    definition:
      'Develops, tests and maintains software applications and related programs and procedures; demonstrates creativity and innovation using available software development tools and following design requirements.',
    behaviors: [
      'Has a deep understanding of Data Structures and Algorithms and can apply it effortlessly',
      'Has command of at least one programming language in depth; able to support development across multiple languages',
      'Leverages knowledge of automated testing across the full application stack and utilizes appropriate testing frameworks',
      'Skilled in data access protocols and services (HTTP, REST, SOAP, Databases, etc.)',
      'Is well-versed in source control tools, IDEs and/or Text Editors',
      'Works as an individual contributor or as part of a team',
    ],
    leveling: {
      [DEVELOPING]: [
        'Has theoretical knowledge or an understanding of basic software engineering techniques and concepts.',
        'Is highly focused on developing skills through both on-the-job experience and applied personal training/practice.',
      ],
      [SUPPORTING]: [
        'Develops and tests standard software applications and related programs and procedures to ensure they meet predetermined requirements.',
        'Continues to develop skills through both on-the-job experience and through personal training/practice.',
        'Has worked with multiple frameworks within their tech stack and can describe the pros and cons of each framework given a set of circumstances.',
        'Has entry-level understanding of database basic design techniques, ACID properties, transactions, and can autonomously write and retrieve information to and from the DB.',
        'Is energetic, stays engaged and absorbs from the team as much knowledge as possible with a positive attitude.',
      ],
      [APPLYING]: [
        'Continue honing their craft with a focus on enhancing productivity and efficiency. They are competent enough in their tech stack to be a source of Software-Engineering advice in their team.',
        'Able to successfully produce source code as necessary. Can successfully troubleshoot and debug code independently. Help from an expert may be required from time to time but can usually perform independently. They have a proven track record of writing clean, refactored and reusable code.',
        'Experience with database management. They can design normalized DB schemas while considering the queries that will be used. Well versed in using views, stored procedures, triggers and user defined data types (UDT) and have experience in utilizing an ORM in their tech stack.',
        'Actively collaborate with all team members, including UX & FEEs, QAs, Business Analysts, Delivery Lead, Agile Coach and Architects.',
      ],
      [LEADING]: [
        'Proven track record of using their extensive knowledge and experience to mentor their peers',
        'Identifies and recommends improvements to peers and can provide spot-coaching when working with less experienced Software Engineers.',
        'Able to propose effective solutions to complex problems; they foresee issues and resolve them before they happen. As a problem-solver, they think in advance about the system bottlenecks, and keep in mind vulnerabilities and problems caused by the improper use of tools.',
        'Deep understanding of the various indicators of inefficiencies within the software development cycle. They see potential pitfalls and take actions to avoid them, effectively communicating with their teammates when doing so.',
      ],
      [SHAPING]: [
        'Demonstrated consistent excellence in application development and programming across multiple projects and/or organizations.',
        'Skilled with multiple languages and tech stacks. They aim to acquire transferable knowledge that will allow them to recognize and write effective code in any programming language. This knowledge also helps them adapt to constant technical changes.',
        'Is an adept technician and a good instructor that has a profound methodological foundation. They are considered the “go to” person in at least one programming language within Application Services and/or throughout WWT and beyond.',
        'Deeply knowledgeable in the business domain they support. Able to provide help with marketing and overall business development to deliver successful outcomes from engagement to final delivery.',
      ],
    },
  },
  [ARCHITECTURE]: {
    definition:
      'Analyzes infrastructure requirements and designs the architecture for central or distributed processing to meet user requirements',
    behaviors: [
      'Is a software expert who has both broad and deep technical knowledge, making high-level design choices and provides guidance on technical standards, including software coding standards, tools, and platforms.',
      'Is very effective in communicating with customers in the language of business, managers of all levels, Business Analysts, and Software Engineers.',
      'Is able to cater to a variety of stakeholders such as business managers, owners, users, and operators, all while balancing their concerns with respect to the system and demonstrate that they are addressed in the design of the system in a multidisciplinary way.',
      'Can reduce complexity by separating the concerns that drive the design. Produce documentation showing all stakeholder concerns are addressed by modeling and describing the architecture from separate points of view associated with the various stakeholder concerns.',
    ],
    leveling: {
      [DEVELOPING]: [
        'Has theoretical knowledge or an understanding of basic techniques and concepts.',
        'Actively seeks to develop skills through on-the-job experience and personal training/practice.',
      ],
      [SUPPORTING]: [
        'Actively develops their skills through on-the-job experience and personal training/practice.',
        'Proficient in using Architecture Description Languages, such as ArchiMate, SysML or UML, to communicate the design of an application.',
        'Helps produce Architecture Design and/or Technical documentation.',
        'Is energetic, stays engaged and absorbs from the team as much knowledge as possible with a positive attitude.',
      ],
      [APPLYING]: [
        'Hones their craft with a focus on enhancing productivity, efficiency and effective communication among all stakeholders.',
        'Works with all team members from all practices in order to produce a well-rounded, optimal solution.',
        `Experienced in creating architectural documentation from at least one of the following viewpoints:
    • Functional viewpoint
    • Logical viewpoint
    • Information / Data viewpoint
    • Module viewpoint
    • Concurrency / process / runtime / thread / execution viewpoint
    • Performance viewpoint
    • Security viewpoint
    • Physical / Deployment / Installation viewpoint
    • User action/feedback viewpoint`,
      ],
      [LEADING]: [
        'Proven track record of using their extensive knowledge and experience to mentor their peers.',
        'Identifies and recommends improvements to peers and is able to provide spot-coaching when working with less experienced teammates.',
        'Is an expert user of at least one Architecture Description Language, such as ArchiMate, SysML or UML, for analysis, design, and implementation of software-based systems as well as for modeling business and similar processes.',
        'Effectively communicates with customers in the language of business, managers of all levels, Business Analysts, and Software Engineers.',
        'Excellent communication skills; advocates for well-crafted Architecture design and technical documentation',
      ],
      [SHAPING]: [
        'Extensive professional experience with multiple programming languages, frameworks and their corresponding best practices.',
        'Proven track record using various Architectural Frameworks and View Models (e.g. 4+1, RM-ODP, TOGAF or GERAM)',
        'Deeply knowledgeable in the business domain they support. Able to provide help with marketing and overall business development to deliver successful outcomes from engagement to final delivery.',
      ],
    },
  },
  [COMMUNICATION]: {
    definition:
      'Communicates with clarity and precision, presenting complex information in a concise format that is audience appropriate.',
    behaviors: [
      'Breaks down complex technical information into understandable terminology and actionable concepts',
      'Creates clear, concise and organized communication materials',
      'Produces communications for various audiences based on their specific needs and comprehension level',
    ],
    leveling: {
      [DEVELOPING]: [
        'Has theoretical knowledge or an understanding of basic techniques and concepts.',
        'Seeks relevant information to ensure own understanding of complex information.',
        'Assists team members in the creation of routine technical communication materials (e.g. policies & procedures, guidelines, presentations, messages).',
        'Develops an understanding of the different audience groups in the business unit/function that receive technical communications and how they differ from each other.',
        'Actively seeks to develop skills through on-the-job experience and personal training/practice.',
      ],
      [SUPPORTING]: [
        'Confirms comprehension and understanding of complex information (e.g., legal, operational risk, and regulatory data) by correctly and clearly answering routine questions.',
        'Creates clear, concise and organized communication materials (e.g., policies & procedures, guidelines, presentations, messages).',
        'Considers and understands the audience’s specific needs and comprehension level to determine the most appropriate message and delivery method, limiting or explaining technical language.',
        'Confirms comprehension and understanding of complex information (e.g., legal, operational risk, and regulatory data) by correctly and clearly answering routine questions.',
      ],
      [APPLYING]: [
        'Breaks down complex information (e.g., technical, business, operational risk, and regulatory data) into understandable terminology and actionable concepts.',
        'Uses technical knowledge and expertise to generate comprehendible, broadly applicable communications based on new and non-typical data.',
        'Designs differentiated technical communications (content focus, style, presentation, etc.) for various internal and external audiences based on an understanding of their differing levels of familiarity with technical language.',
      ],
      [LEADING]: [
        'Creatively develops tools, visual aids and other original content to support the understanding/education of complex and technical information (e.g., technical, business, legal, operational risk, and regulatory data).',
        'Guides others on the best practices and approaches for creating clear, concise and organized communication materials to convey technical concepts in a user-friendly way.',
        'Challenges others to bring fresh and creative perspective to differentiating technical communications and ensuring comprehension and ease-of-use for various audiences.',
      ],
      [SHAPING]: [
        'Ensures that complex technical communications are crafted with non-technical audiences in mind; coaches others on the best way to simplify terminology and use visual aids to describe concepts.',
        'Ensures the right processes and practices are in place to support the generation of communications that allow for clear and consistent comprehension of complex and technical information across the business and externally.',
        'Successfully represents the business by consistently delivering emerging technical information in interesting and engaging ways to external stakeholders and the public, expertly explaining complex, technical concepts in a universally understandable way.',
        'Deeply knowledgeable in the business domain they support. Able to provide help with marketing and overall business development to deliver successful outcomes from engagement to final delivery.',
      ],
    },
  },
  [LEADERSHIP]: {
    definition:
      'Serves in a “player coach” role by managing, reviewing and conducting the day-to-day work in a specific technical domain area; applies domain knowledge to develop solutions to problems.',
    behaviors: [
      `Owns a project end-to-end, not just the code and the architecture design, but a deep understanding of why we're building this project, how every component works and fits in the greater picture. Can communicate that information effectively to every level.`,
      'Act as a servant-leader and provides vision and direction to their team. They focus their energy and effort on tasks that bring value to the team. Consistently works to identify and eliminate roadblocks that are keeping their team from performing at their very best.',
      'Is very effective in communicating with customers in the language of business, managers of all levels, Business Analysts, and Software Engineers.',
    ],
    leveling: {
      [DEVELOPING]: [
        'Takes advantage of opportunities to build new technical expertise in a specific engineering area; seeks knowledge from subject matter experts when needed.',
        'Constantly aims to understand how every software component works and fits in the greater picture and can effectively communicate that information to their peers.',
      ],
      [SUPPORTING]: [
        'Continually seeks new technical skills in a programming language; shares new skills and knowledge with team to increase effectiveness.',
        `Is a key person that resolves conflict and the “voice of reason” among teammates. When conflict arises, help everyone see that there may be a lack of shared information or understanding. Guides the team to see each other's point of view.`,
        'Is energetic, stays engaged and absorbs from the team as much knowledge as possible with a positive attitude.',
      ],
      [APPLYING]: [
        'Hones their craft with a focus on enhancing productivity and efficiency. They are competent enough in their tech stack to provide relevant advice to their team when decisions are discussed.',
        'Is meaningfully involved in architecture review sessions. Presents their own work for review and helps others improve theirs. Facilitates the scheduling and agenda for architecture review sessions for their team.',
        'Is a person of recognized authority in a specific area.',
        'Is actively increasing their knowledge of metrics and retrospective techniques to address team/production issues.',
        'Successfully conducts day-to-day work and solves complex issues in own specific technical area; serves as a guide to others by sharing and helping less experienced teammates in their duties.',
      ],
      [LEADING]: [
        'Identifies and recommends improvements to peers and is able to provide spot-coaching when working with less experienced teammates.',
        'Is the first person on the ground when production issues are discovered, helps to solve them and knows the most effective ways to triage them; owns the communication and post-mortem where applicable.',
        'Helps their team raise the bar by onboarding new team members, sharing internal tribal knowledge, writing articles, running knowledge-transfer sessions, or just frequently sharing their “pro tips” on programming languages, productivity tools, frameworks, libraries, etc.',
        'Combines knowledge and skills in more than one functional area to promote effectiveness in the department or business unit/function.',
      ],
      [SHAPING]: [
        'Applies project management practices to their work. Communicates pre-emptively and directly with stakeholders. Acts as an information radiator for project status with high-clarity updates when needed or on a regular cadence.',
        'Has taken ownership of implementing or maintaining tools/training that enables teams to deliver value effectively.',
        'Effectively communicates the vision, strategies, methods, and techniques needed to achieve a shared goal.',
      ],
    },
  },
  [CONSULTING]: {
    definition:
      'Translates business needs into enterprise/IT product solutions. Partners with the business by guiding management on future uses of technology and education around IT solutions and initiatives.',
    behaviors: [
      'Gains insight into how customers utilize technology for their competitive advantage and applies this knowledge to suggest areas for improvement',
      'Conveys the right information to the correct parties to ensure that proposals for improvements are given the proper consideration and technical issues are resolved in a timely manner',
      'Contributes to software development by partnering with the business and identifying industry change, listening to customer needs and capturing feedback',
    ],
    leveling: {
      [DEVELOPING]: [
        'Listens actively and questions/clarifies information to ensure understanding of customer technology needs.',
        `Promotes WWT’s current offerings to customers.`,
        'Effectively communicates customer requirements and identifies technical issues.',
        'Actively seeks to develop skills through on-the-job experience and personal training/practice.',
      ],
      [SUPPORTING]: [
        'Communicates effectively with customers; listens to customers’ concerns and issues regarding technology, determines their needs and expectations, and responds accordingly.',
        'Ensures that internal and external teams, and subcontractors have a clear understanding of customer requirements; identifies technical issues and provides data to support solutions.',
        `Considers new ways of using technology to meet or enhance customers’ needs.`,
      ],
      [APPLYING]: [
        'Gains insight into how customers utilize technology for their competitive advantage and applies this knowledge to suggest areas for improvement.',
        'Conveys the right information to the correct parties to ensure that risks/proposals are given the proper consideration and technical issues are resolved in a timely manner.',
        'Contributes to product development by identifying industry change, listening to customer needs, capturing feedback and communicating that feedback to the business.',
      ],
      [LEADING]: [
        `Exceeds customers’ expectations by listening for unexpressed needs; connects customer needs to relevant service offerings and new technology.`,
        'Leads others in resolving technical issues in a timely manner; follows up with customers to ensure satisfaction.',
        'Partners with the business to integrate new technologies into business solutions; creates and communicates a vision of the technology requirements for the future state of the business.',
      ],
      [SHAPING]: [
        `Anticipates customers’ technology needs and asks the appropriate questions to clarify those needs; actively listens to detect customer specific nuances.`,
        'Collaborates across a network of internal contacts to keep all relevant parties informed and on task to ensure rapid resolution of technical issues and facilitate idea sharing around proposed improvements.',
        'Utilizes in-depth knowledge of customers’ business challenges to shape thinking around the development of technology and implementation of solutions, leading to the creation of customized, cutting-edge solutions.',
        'Deeply knowledgeable in the business domain they support. Able to provide help with marketing and overall business development to deliver successful outcomes from engagement to final delivery.',
      ],
    },
  },
  [REQUIREMENTS]: {
    definition:
      'Works with customers to understand their issues and recommend solutions.',
    behaviors: [
      'Gains insight into how customers utilize technology for their competitive advantage and applies this knowledge to suggest areas for improvement',
      'Advocate for the requirements being documented, actionable, measurable, testable, traceable, related to identified business needs or opportunities, and defined to a level of detail sufficient for software design and coding',
    ],
    leveling: {
      [DEVELOPING]: [
        'Demonstrates understanding of customer business requirements and works with others to provide straightforward solutions.',
        'Actively seeks to develop skills through on-the-job experience and personal training/practice.',
      ],
      [SUPPORTING]: [
        'Demonstrates understanding of customer business requirements and translates them into functional and technical specification documents using standard templates.',
        `Considers new ways of using technology to meet or enhance customers’ needs.`,
      ],
      [APPLYING]: [
        'Gains insight into how customers utilize technology for their competitive advantage and applies this knowledge to suggest areas for improvement.',
        'Translates moderately complex customer business requirements (e.g., more complex features and solutions) into functional and technical specification documents for software engineers.',
        'Contributes to product development by identifying industry change, listening to customer needs, capturing feedback and communicating that feedback to the business.',
      ],
      [LEADING]: [
        'Translates complex customer business requirements and/or new situations into action steps/plans for software engineers.',
        'Partners with the business to integrate new technologies into business solutions; creates and communicates a vision of the technology requirements for the future state of the business.',
      ],
      [SHAPING]: [
        'Anticipates customers’ technology needs and asks the appropriate questions to clarify those needs; actively listens to detect customer specific nuances.',
        'Consolidates customer business requirements and new trends into IT processes and aligns these processes with overall strategy; translates strategic development requirements into actionable plans.',
      ],
    },
  },
};

export const jobSkills = Object.keys(skillProficencies);
