import { CareerRoadmap } from '@/types';

export const ROADMAPS_DATA: Record<string, CareerRoadmap> = {
  'software-engineer': {
    careerId: 'software-engineer',
    careerTitle: 'Full Stack Software Engineer',
    stages: [
      {
        stageNumber: 1,
        title: 'Programming Fundamentals & Logic Building',
        duration: '2 - 3 Months',
        description: 'Build a rock-solid foundation in problem-solving, algorithms, and core language syntax.',
        isUnlocked: true,
        tasks: [
          {
            id: 'se-t1',
            title: 'Master one Core Language (Python, C++, or Java)',
            description: 'Learn variables, loops, conditionals, functions, recursion, and object-oriented programming (OOP).',
            estimatedHours: '60 Hours',
            skillsGained: ['Control Flow', 'Object-Oriented Programming', 'Memory Management basics'],
            resources: [
              { name: 'CS50x: Introduction to Computer Science (Harvard)', type: 'Free Course', url: 'https://cs50.harvard.edu/x' },
              { name: 'Python for Beginners (freeCodeCamp)', type: 'YouTube / Video', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw' }
            ]
          },
          {
            id: 'se-t2',
            title: 'Essential Data Structures & Algorithms (DSA)',
            description: 'Implement arrays, linked lists, stacks, queues, hash maps, binary trees, and binary search.',
            estimatedHours: '80 Hours',
            skillsGained: ['Big-O Notation', 'Arrays & Strings', 'Recursion & Sorting', 'Hash Tables'],
            resources: [
              { name: 'Striver’s A2Z DSA Sheet (takeUforward)', type: 'Free Course', url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2' },
              { name: 'LeetCode 75 Curated Practice', type: 'Practice Project', url: 'https://leetcode.com/studyplan/leetcode-75/' }
            ]
          }
        ]
      },
      {
        stageNumber: 2,
        title: 'Frontend Development & Modern Web UI',
        duration: '2 - 3 Months',
        description: 'Craft responsive, dynamic web interfaces using modern HTML, CSS, JavaScript, and React.',
        isUnlocked: true,
        tasks: [
          {
            id: 'se-t3',
            title: 'Semantic HTML5 & Modern CSS3 / Tailwind',
            description: 'Master Flexbox, CSS Grid, mobile responsiveness, media queries, accessibility, and utility-first Tailwind CSS.',
            estimatedHours: '40 Hours',
            skillsGained: ['Flexbox & Grid', 'Responsive Design', 'Tailwind CSS', 'Web Accessibility'],
            resources: [
              { name: 'MDN Web Docs - HTML & CSS', type: 'Documentation', url: 'https://developer.mozilla.org' },
              { name: 'Kevin Powell CSS Mastery Channel', type: 'YouTube / Video', url: 'https://www.youtube.com/@KevinPowell' }
            ]
          },
          {
            id: 'se-t4',
            title: 'Modern JavaScript (ES6+) & React.js',
            description: 'DOM manipulation, promises, async/await, closures, React components, hooks (useState, useEffect), and state management.',
            estimatedHours: '70 Hours',
            skillsGained: ['ES6 Syntax', 'Async JS / Fetch API', 'React Hooks', 'Component Lifecycle'],
            resources: [
              { name: 'React Official Documentation (react.dev)', type: 'Documentation', url: 'https://react.dev' },
              { name: 'Chai aur React by Hitesh Choudhary', type: 'YouTube / Video', url: 'https://youtube.com' }
            ]
          }
        ]
      },
      {
        stageNumber: 3,
        title: 'Backend Engineering & Database Architecture',
        duration: '2 - 3 Months',
        description: 'Design robust server architectures, RESTful APIs, authentication, and database schemas.',
        isUnlocked: false,
        tasks: [
          {
            id: 'se-t5',
            title: 'Server-Side Runtime with Node.js & Express',
            description: 'Build REST APIs, middleware architectures, request validation, error handling, and JWT authentication.',
            estimatedHours: '50 Hours',
            skillsGained: ['Node.js Event Loop', 'Express Middleware', 'JWT & OAuth2', 'REST Design'],
            resources: [
              { name: 'Node.js Complete Guide (freeCodeCamp)', type: 'YouTube / Video', url: 'https://youtube.com' },
              { name: 'Express.js Official Docs', type: 'Documentation', url: 'https://expressjs.com' }
            ]
          },
          {
            id: 'se-t6',
            title: 'Databases: Relational (PostgreSQL/MySQL) & NoSQL',
            description: 'Relational database normalization, indexing, joins, Prisma ORM, and document storage with MongoDB.',
            estimatedHours: '45 Hours',
            skillsGained: ['SQL Queries & Joins', 'Prisma ORM', 'Schema Design', 'Data Integrity'],
            resources: [
              { name: 'SQL Tutorial - W3Schools', type: 'Free Course', url: 'https://www.w3schools.com/sql/' },
              { name: 'Prisma Getting Started Guide', type: 'Documentation', url: 'https://www.prisma.io/docs' }
            ]
          }
        ]
      },
      {
        stageNumber: 4,
        title: 'Version Control & Collaborative Development',
        duration: '3 - 4 Weeks',
        description: 'Collaborate with teams using Git branch workflows, pull requests, and open source hygiene.',
        isUnlocked: false,
        tasks: [
          {
            id: 'se-t7',
            title: 'Git Branching Strategies & GitHub Workflows',
            description: 'Master rebase, cherry-pick, conflict resolution, GitHub issues, pull request code reviews, and commit standards.',
            estimatedHours: '25 Hours',
            skillsGained: ['Git Rebase & Merge', 'PR Reviews', 'Semantic Versioning'],
            resources: [
              { name: 'Pro Git Book (Free by Scott Chacon)', type: 'Documentation', url: 'https://git-scm.com/book/en/v2' },
              { name: 'Git & GitHub Tutorial for Beginners', type: 'YouTube / Video', url: 'https://youtube.com' }
            ]
          }
        ]
      },
      {
        stageNumber: 5,
        title: 'DevOps, Cloud Hosting & CI/CD Pipelines',
        duration: '1 Month',
        description: 'Containerize applications and deploy them to global cloud infrastructure with automated test pipelines.',
        isUnlocked: false,
        tasks: [
          {
            id: 'se-t8',
            title: 'Docker Containerization & Cloud Deployment',
            description: 'Write Dockerfiles, run multi-container apps with docker-compose, and deploy to Vercel, AWS EC2, or Render.',
            estimatedHours: '35 Hours',
            skillsGained: ['Docker Images & Containers', 'Environment Secrets', 'Vercel / AWS Hosting'],
            resources: [
              { name: 'Docker for Beginners Tutorial', type: 'YouTube / Video', url: 'https://youtube.com' },
              { name: 'AWS Cloud Practitioner Essentials', type: 'Free Course', url: 'https://aws.amazon.com/training/' }
            ]
          },
          {
            id: 'se-t9',
            title: 'Automated CI/CD with GitHub Actions',
            description: 'Automate linting, unit test execution, and zero-downtime deployment triggers on every push to main branch.',
            estimatedHours: '20 Hours',
            skillsGained: ['YAML Pipelines', 'Automated Testing', 'Continuous Delivery'],
            resources: [
              { name: 'GitHub Actions Documentation', type: 'Documentation', url: 'https://docs.github.com/en/actions' }
            ]
          }
        ]
      },
      {
        stageNumber: 6,
        title: 'Capstone Production Projects & Job Readiness',
        duration: '1 - 2 Months',
        description: 'Build portfolio-defining, multi-tenant applications that solve genuine problems for real users.',
        isUnlocked: false,
        tasks: [
          {
            id: 'se-t10',
            title: 'Build Full-Stack E-Commerce / SaaS Platform',
            description: 'Implement real payments (Razorpay/Stripe), user dashboards, search indexing, responsive design, and live deployment.',
            estimatedHours: '80 Hours',
            skillsGained: ['Payment Gateway Integration', 'Production Debugging', 'Security Audits'],
            resources: [
              { name: 'Full-Stack SaaS Architecture Blueprint', type: 'Practice Project', url: 'https://github.com' }
            ]
          },
          {
            id: 'se-t11',
            title: 'Mock Technical Interviews & Resume Polishing',
            description: 'Practice live system design questions, behavioral STAR questions, and technical coding walkthroughs.',
            estimatedHours: '30 Hours',
            skillsGained: ['Technical Communication', 'System Design Basics', 'Portfolio Presentation'],
            resources: [
              { name: 'Pramp Free Peer Mock Interviews', type: 'Free Course', url: 'https://www.pramp.com' }
            ]
          }
        ]
      }
    ]
  },
  'data-scientist': {
    careerId: 'data-scientist',
    careerTitle: 'Data Scientist & ML Practitioner',
    stages: [
      {
        stageNumber: 1,
        title: 'Mathematical Foundations & Statistics',
        duration: '2 Months',
        description: 'Build intuition for linear algebra, calculus, probability distributions, and statistical hypothesis tests.',
        isUnlocked: true,
        tasks: [
          {
            id: 'ds-t1',
            title: 'Linear Algebra & Multivariate Calculus',
            description: 'Vectors, matrix multiplications, eigenvalues, partial derivatives, and gradient descent optimization.',
            estimatedHours: '50 Hours',
            skillsGained: ['Matrix Operations', 'Gradient Vectors', 'Eigenvalues & PCA'],
            resources: [
              { name: '3Blue1Brown - Essence of Linear Algebra', type: 'YouTube / Video', url: 'https://www.3blue1brown.com' },
              { name: 'Khan Academy Multivariable Calculus', type: 'Free Course', url: 'https://www.khanacademy.org' }
            ]
          },
          {
            id: 'ds-t2',
            title: 'Probability & Inferential Statistics',
            description: 'Bayes Theorem, normal distribution, confidence intervals, p-values, and A/B test hypothesis testing.',
            estimatedHours: '45 Hours',
            skillsGained: ['Hypothesis Testing', 'Probability Distributions', 'Statistical Significance'],
            resources: [
              { name: 'StatQuest with Josh Starmer', type: 'YouTube / Video', url: 'https://youtube.com' }
            ]
          }
        ]
      },
      {
        stageNumber: 2,
        title: 'Python for Data Analysis & Data Wrangling',
        duration: '2 Months',
        description: 'Master the core scientific Python ecosystem to clean messy data and uncover trends.',
        isUnlocked: true,
        tasks: [
          {
            id: 'ds-t3',
            title: 'Pandas, NumPy & Exploratory Data Analysis (EDA)',
            description: 'Read CSV/JSON datasets, handle missing values, transform columns, group aggregates, and calculate correlations.',
            estimatedHours: '55 Hours',
            skillsGained: ['Data Wrangling', 'Pandas DataFrame', 'Feature Engineering'],
            resources: [
              { name: 'Python for Data Analysis by Wes McKinney', type: 'Documentation', url: 'https://wesmckinney.com/book/' }
            ]
          },
          {
            id: 'ds-t4',
            title: 'Data Storytelling with Matplotlib, Seaborn & Plotly',
            description: 'Design informative heatmaps, box plots, scatter distributions, and interactive executive charts.',
            estimatedHours: '30 Hours',
            skillsGained: ['Data Visualization', 'Interactive Charts', 'Storytelling'],
            resources: [
              { name: 'Kaggle Data Visualization Micro-course', type: 'Practice Project', url: 'https://www.kaggle.com/learn' }
            ]
          }
        ]
      },
      {
        stageNumber: 3,
        title: 'Classical Machine Learning Algorithms',
        duration: '2 Months',
        description: 'Train, evaluate, and fine-tune regression, classification, and clustering algorithms using Scikit-Learn.',
        isUnlocked: false,
        tasks: [
          {
            id: 'ds-t5',
            title: 'Supervised Learning: Regressors & Classifiers',
            description: 'Linear & Logistic Regression, Decision Trees, Random Forests, XGBoost, and LightGBM.',
            estimatedHours: '60 Hours',
            skillsGained: ['Ensemble Methods', 'Cross-Validation', 'ROC-AUC & F1 Score'],
            resources: [
              { name: 'Machine Learning Specialization by Andrew Ng (Coursera/DeepLearning.AI)', type: 'Free Course', url: 'https://www.coursera.org' }
            ]
          }
        ]
      },
      {
        stageNumber: 4,
        title: 'Deep Learning, NLP & Generative AI',
        duration: '2 Months',
        description: 'Explore neural networks, transfer learning, Hugging Face Transformers, and LLM orchestration.',
        isUnlocked: false,
        tasks: [
          {
            id: 'ds-t6',
            title: 'PyTorch & Neural Network Architectures',
            description: 'Build multilayer perceptrons, convolutional neural networks (CNNs), and recurrent architectures.',
            estimatedHours: '65 Hours',
            skillsGained: ['PyTorch Tensors', 'Backpropagation', 'Loss Functions'],
            resources: [
              { name: 'Deep Learning with PyTorch Tutorial', type: 'Documentation', url: 'https://pytorch.org/tutorials/' }
            ]
          },
          {
            id: 'ds-t7',
            title: 'Fine-Tuning LLMs & Retrieval Augmented Generation (RAG)',
            description: 'Use LangChain, LlamaIndex, vector databases (Chroma/Pinecone), and sentence transformers for custom domain Q&A.',
            estimatedHours: '50 Hours',
            skillsGained: ['Vector Embeddings', 'RAG Pipelines', 'Prompt Engineering'],
            resources: [
              { name: 'Hugging Face NLP Course', type: 'Free Course', url: 'https://huggingface.co/learn/nlp-course' }
            ]
          }
        ]
      }
    ]
  },
  'cybersecurity-analyst': {
    careerId: 'cybersecurity-analyst',
    careerTitle: 'Cybersecurity Analyst & Ethical Hacker',
    stages: [
      {
        stageNumber: 1,
        title: 'Computer Networking & Operating Systems Fundamentals',
        duration: '2 Months',
        description: 'Understand how packets travel across the internet and how operating systems enforce security boundaries.',
        isUnlocked: true,
        tasks: [
          {
            id: 'cs-t1',
            title: 'TCP/IP, DNS, Subnets & OSI 7-Layer Model',
            description: 'Analyze network packets with Wireshark, trace routes, configure firewalls, and learn port protocols.',
            estimatedHours: '50 Hours',
            skillsGained: ['Packet Analysis (Wireshark)', 'Subnetting & CIDR', 'DNS & Routing'],
            resources: [
              { name: 'Network Chuck - Free Networking Course', type: 'YouTube / Video', url: 'https://youtube.com' }
            ]
          },
          {
            id: 'cs-t2',
            title: 'Linux Command Line & Bash Automation',
            description: 'Master file permissions (chmod/chown), SSH keys, grep, cron jobs, process management, and shell scripts.',
            estimatedHours: '40 Hours',
            skillsGained: ['Linux Sysadmin', 'Bash Scripting', 'User Permissions'],
            resources: [
              { name: 'OverTheWire: Bandit Wargame', type: 'Practice Project', url: 'https://overthewire.org/wargames/bandit/' }
            ]
          }
        ]
      },
      {
        stageNumber: 2,
        title: 'Security Operations & Defensive Analysis (SOC)',
        duration: '2 Months',
        description: 'Learn how corporate blue teams detect intrusions, investigate log anomalies, and mitigate attacks.',
        isUnlocked: false,
        tasks: [
          {
            id: 'cs-t3',
            title: 'SIEM Tools, Log Analysis & Threat Intelligence',
            description: 'Configure Splunk / Elastic SIEM, ingest Windows event logs, detect brute-force attacks, and map MITRE ATT&CK vectors.',
            estimatedHours: '55 Hours',
            skillsGained: ['Splunk Queries (SPL)', 'Log Triaging', 'MITRE ATT&CK Framework'],
            resources: [
              { name: 'TryHackMe - SOC Level 1 Learning Path', type: 'Free Course', url: 'https://tryhackme.com' }
            ]
          }
        ]
      },
      {
        stageNumber: 3,
        title: 'Web Application Security & Penetration Testing',
        duration: '2 Months',
        description: 'Learn offensive ethical hacking to find and patch vulnerabilities before malicious actors exploit them.',
        isUnlocked: false,
        tasks: [
          {
            id: 'cs-t4',
            title: 'OWASP Top 10 Vulnerabilities Exploration',
            description: 'Hands-on exploitation and remediation of SQL Injection, XSS, CSRF, SSRF, IDOR, and broken access controls.',
            estimatedHours: '60 Hours',
            skillsGained: ['Burp Suite Proxy', 'SQLi & XSS Exploits', 'Secure Coding Remediation'],
            resources: [
              { name: 'PortSwigger Web Security Academy (Free)', type: 'Practice Project', url: 'https://portswigger.net/web-security' }
            ]
          }
        ]
      }
    ]
  },
  'civil-services-ias': {
    careerId: 'civil-services-ias',
    careerTitle: 'Civil Services (UPSC CSE)',
    stages: [
      {
        stageNumber: 1,
        title: 'NCERT Foundations & Core Reading (Class 6 - 12)',
        duration: '3 - 4 Months',
        description: 'Read essential NCERT textbooks to build conceptual clarity across History, Polity, Geography, and Economy.',
        isUnlocked: true,
        tasks: [
          {
            id: 'upsc-t1',
            title: 'Polity & Indian Constitution Foundations',
            description: 'Read Indian Polity by M. Laxmikanth, understand Fundamental Rights, DPSP, Parliament, and Judiciary.',
            estimatedHours: '90 Hours',
            skillsGained: ['Constitutional Articles', 'Separation of Powers', 'Governance Structure'],
            resources: [
              { name: 'Sansad TV Perspective & Big Picture', type: 'YouTube / Video', url: 'https://sansadtv.nic.in' }
            ]
          },
          {
            id: 'upsc-t2',
            title: 'Daily Current Affairs Analysis & Newspaper Reading',
            description: 'Develop structured newspaper reading habits (The Hindu or Indian Express) and take categorized syllabus notes.',
            estimatedHours: '60 Hours',
            skillsGained: ['Critical Analysis', 'Editorial Note-Making', 'Government Schemes'],
            resources: [
              { name: 'PIB (Press Information Bureau) Releases', type: 'Documentation', url: 'https://pib.gov.in' }
            ]
          }
        ]
      },
      {
        stageNumber: 2,
        title: 'Prelims Focused Preparation & Test Series',
        duration: '4 - 5 Months',
        description: 'Practice high-volume multiple-choice questions (MCQs), CSAT aptitude, and static subject revision.',
        isUnlocked: false,
        tasks: [
          {
            id: 'upsc-t3',
            title: 'CSAT (Paper II) Aptitude & Reading Comprehension',
            description: 'Master quantitative aptitude, logical reasoning, and data interpretation to comfortably clear the 33% qualifying cutoff.',
            estimatedHours: '40 Hours',
            skillsGained: ['Numerical Aptitude', 'Reading Comprehension', 'Time Management'],
            resources: [
              { name: 'UPSC Previous 10 Years Question Papers', type: 'Documentation', url: 'https://upsc.gov.in' }
            ]
          }
        ]
      },
      {
        stageNumber: 3,
        title: 'Mains Answer Writing & Optional Subject Mastery',
        duration: '4 - 6 Months',
        description: 'Cultivate structured, analytical answer writing (Introduction, Body with diagrams/data, Conclusion with forward-looking reforms).',
        isUnlocked: false,
        tasks: [
          {
            id: 'upsc-t4',
            title: 'GS 1, 2, 3 & 4 (Ethics) Daily Answer Writing Practice',
            description: 'Write 3-5 answers daily within timed 7-minute limits incorporating constitutional articles and NITI Aayog recommendations.',
            estimatedHours: '120 Hours',
            skillsGained: ['Answer Formatting', 'Case Study Resolution', 'Ethical Decision Frameworks'],
            resources: [
              { name: 'NITI Aayog Strategy for New India @ 75 Reports', type: 'Documentation', url: 'https://www.niti.gov.in' }
            ]
          }
        ]
      }
    ]
  }
};
