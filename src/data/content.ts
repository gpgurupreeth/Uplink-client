import type {
  ServiceItem,
  CaseStudy,
  ProcessStep,
  Testimonial,
  FaqItem,
  QuizQuestion,
  QuizResult,
} from '../types';

/* =========================================================================
   1. IT SERVICES (Division A - Exactly 6 Core Capabilities for 3x2 Grid)
   IT consulting, web development, mobile apps, UI/UX design, cloud solutions,
   IT infrastructure, technical support.
   ========================================================================= */
export const itServicesList: ServiceItem[] = [
  {
    id: 'cloud-solutions',
    division: 'it',
    categoryLabel: 'Cloud Engineering',
    title: 'Cloud architecture & infrastructure migration',
    description:
      'Architect resilient enterprise cloud environments across AWS, Azure, and Google Cloud with multi-region failover and cost governance.',
    iconName: 'Cloud',
    features: [
      'Multi-region high availability and disaster recovery runbooks',
      'Infrastructure as Code deployment using Terraform and Ansible',
      'Resource utilization audits to eliminate idle cloud spending',
    ],
    deliverable: 'Production VPC architecture, IaC code, and operational runbook',
    timeline: '[Add timeline, e.g. 4–8 weeks]',
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Data center server network infrastructure with blue fiber connectivity',
  },
  {
    id: 'it-infrastructure',
    division: 'it',
    categoryLabel: 'Infrastructure & Security',
    title: 'Network engineering & zero-trust security',
    description:
      'Design, segment, and safeguard hybrid enterprise networks with strict zero-trust boundary controls and micro-segmentation.',
    iconName: 'Server',
    features: [
      'Micro-segmented firewall topologies and identity-based access controls',
      'Hybrid data center and software-defined WAN (SD-WAN) routing',
      'Continuous network vulnerability scanning and security audits',
    ],
    deliverable: 'Hardened network architecture and compliance documentation',
    timeline: '[Add timeline, e.g. 6–10 weeks]',
    imageUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Modern server racks in a secure enterprise data center facility',
  },
  {
    id: 'it-consulting',
    division: 'it',
    categoryLabel: 'Strategic Advisory',
    title: 'Strategic IT consulting & technology roadmaps',
    description:
      'Align organizational technology investments with business objectives through comprehensive system audits and executive advisory.',
    iconName: 'Compass',
    features: [
      'Technical debt evaluation and software vendor consolidation reviews',
      'Security framework alignment preparation and audit support',
      'Multi-year capital expenditure and infrastructure modernization roadmaps',
    ],
    deliverable: 'Comprehensive enterprise architecture assessment and roadmap',
    timeline: '[Add timeline, e.g. 3–5 weeks]',
    imageUrl:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Corporate technology leaders collaborating on strategic architecture',
  },
  {
    id: 'technical-support',
    division: 'it',
    categoryLabel: 'Managed Operations',
    title: '24/7 Managed NOC & technical helpdesk',
    description:
      'Provide continuous system monitoring, rapid incident triage, and technical support for distributed enterprise teams.',
    iconName: 'Headphones',
    features: [
      'Continuous uptime telemetry monitoring for endpoints and servers',
      'Defined escalation matrices and documented incident resolution runbooks',
      'Standardized support desk integration via email, portal, and chat',
    ],
    deliverable: '24/7 NOC monitoring coverage with monthly governance reporting',
    timeline: '[Immediate onboarding]',
    imageUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Enterprise technical operations team monitoring live system dashboards',
  },
  {
    id: 'web-development',
    division: 'it',
    categoryLabel: 'Digital Platforms',
    title: 'Enterprise web development & cloud portals',
    description:
      'Engineer accessible, high-performance web platforms and customer portals using modern React and Next.js architectures.',
    iconName: 'Globe',
    features: [
      'Compliance with WCAG 2.1 AA accessibility standards and sub-second loading',
      'Secure authentication, role-based permissions, and API integrations',
      'Automated deployment pipelines and code quality testing harnesses',
    ],
    deliverable: 'Production web application with full source code ownership',
    timeline: '[Add timeline, e.g. 8–12 weeks]',
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Enterprise web application dashboard interface displayed on workstation',
  },
  {
    id: 'mobile-apps',
    division: 'it',
    categoryLabel: 'Mobile Solutions',
    title: 'Cross-platform mobile applications & UI/UX design',
    description:
      'Design and deploy mission-ready mobile applications for iOS and Android, paired with design systems built for enterprise clarity.',
    iconName: 'Smartphone',
    features: [
      'Native-feel performance using React Native with secure offline storage',
      'Design tokens and component libraries aligned with corporate branding',
      'Enterprise MDM compatibility and biometric authentication support',
    ],
    deliverable: 'Production mobile applications and complete Figma design system',
    timeline: '[Add timeline, e.g. 10–14 weeks]',
    imageUrl:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Design team reviewing mobile interface prototypes on high-resolution screens',
  },
];

/* =========================================================================
   2. SOFTWARE & AUTOMATION (Division B - Exactly 6 Core Capabilities for 3x2 Grid)
   Custom software, SaaS development, business process automation,
   AI-powered solutions, workflow automation, CRM/ERP, API integrations,
   custom business tools.
   ========================================================================= */
export const softwareServicesList: ServiceItem[] = [
  {
    id: 'custom-software',
    division: 'software',
    categoryLabel: 'Bespoke Software',
    title: 'Custom enterprise software development',
    description:
      'Build purpose-engineered distributed software systems designed to solve operational requirements off-the-shelf software cannot address.',
    iconName: 'Code2',
    features: [
      'Domain-driven architecture designed for high throughput and scalability',
      'Strict type safety, automated unit testing, and continuous integration',
      'Complete intellectual property assignment and documented source code',
    ],
    deliverable: 'Custom software suite, technical specification, and test suites',
    timeline: '[Add timeline, e.g. 10–16 weeks]',
    imageUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Software engineer writing clean, structured code on dual display screens',
  },
  {
    id: 'saas-development',
    division: 'software',
    categoryLabel: 'SaaS Platforms',
    title: 'Multi-tenant SaaS platform engineering',
    description:
      'Develop commercial-ready B2B SaaS applications engineered for secure data isolation, usage metering, and subscription provisioning.',
    iconName: 'Layers',
    features: [
      'Multi-tenant data isolation with role-based access control (RBAC)',
      'Enterprise single sign-on (SSO) supporting SAML 2.0 and Azure AD / Okta',
      'Automated subscription billing integration and tenant telemetry',
    ],
    deliverable: 'Production SaaS platform, tenant portal, and billing integration',
    timeline: '[Add timeline, e.g. 12–20 weeks]',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Executive analytics dashboard showing multi-tenant usage metrics',
  },
  {
    id: 'process-automation',
    division: 'software',
    categoryLabel: 'Process Automation',
    title: 'Business process automation & workflow RPA',
    description:
      'Automate manual data entry, document review, and multi-tier approval workflows with resilient background execution queues.',
    iconName: 'Zap',
    features: [
      'End-to-end task orchestration with automated error retry handling',
      'Document parsing, validation, and bi-directional system updates',
      'Audited operational logs ensuring full regulatory transparency',
    ],
    deliverable: 'Autonomous workflow engine and administrative monitoring dashboard',
    timeline: '[Add timeline, e.g. 4–8 weeks]',
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Circuit board microprocessor representing automated compute workflows',
  },
  {
    id: 'applied-ai',
    division: 'software',
    categoryLabel: 'Applied AI',
    title: 'Applied AI & enterprise knowledge systems',
    description:
      'Deploy private AI models and retrieval-augmented systems trained on proprietary documentation with strict data governance.',
    iconName: 'Bot',
    features: [
      'Private vector embeddings with strict access and role authorization',
      'Domain-tailored assistants for document analysis and operational triage',
      'Zero model retention agreements ensuring complete proprietary privacy',
    ],
    deliverable: 'Private AI service, vector pipeline, and integration API',
    timeline: '[Add timeline, e.g. 6–10 weeks]',
    imageUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Abstract digital data structure symbolizing artificial intelligence algorithms',
  },
  {
    id: 'crm-erp-integration',
    division: 'software',
    categoryLabel: 'Systems Integration',
    title: 'Enterprise CRM & ERP system synchronization',
    description:
      'Integrate disparate platforms such as Salesforce, SAP, NetSuite, and internal databases into a single, cohesive source of truth.',
    iconName: 'RefreshCw',
    features: [
      'Bi-directional real-time data synchronization with conflict handling',
      'Automated pipeline triggers connecting sales milestones to fulfillment',
      'Structured validation pipelines preventing duplicate or malformed records',
    ],
    deliverable: 'Middleware integration service, sync pipelines, and documentation',
    timeline: '[Add timeline, e.g. 4–8 weeks]',
    imageUrl:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Business analysts reviewing enterprise resource planning diagrams',
  },
  {
    id: 'api-modernization',
    division: 'software',
    categoryLabel: 'API Engineering',
    title: 'Microservices & API gateway modernization',
    description:
      'Modernize legacy systems by deploying secure REST and GraphQL API gateways with token-bucket rate limiting and documentation.',
    iconName: 'Cpu',
    features: [
      'OpenAPI 3.1 and GraphQL schemas designed for enterprise consistency',
      'Token-bucket rate limiting, mTLS security, and traffic monitoring',
      'Interactive developer documentation and automated client SDK creation',
    ],
    deliverable: 'Hardened API gateway, service container images, and documentation',
    timeline: '[Add timeline, e.g. 6–10 weeks]',
    imageUrl:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Secure network matrix highlighting data encryption and API connections',
  },
];

/* =========================================================================
   3. HONEST CLIENT PLACEHOLDERS (Strictly marked for client customization)
   ========================================================================= */
export const clientLogos = [
  { name: '[Client Logo 1]', industry: '[Sector: Financial Services]' },
  { name: '[Client Logo 2]', industry: '[Sector: Healthcare]' },
  { name: '[Client Logo 3]', industry: '[Sector: Logistics & Supply]' },
  { name: '[Client Logo 4]', industry: '[Sector: Telecommunications]' },
  { name: '[Client Logo 5]', industry: '[Sector: Manufacturing]' },
  { name: '[Client Logo 6]', industry: '[Sector: Enterprise SaaS]' },
];

/* =========================================================================
   4. STRUCTURED CASE STUDIES (With Honest Metric Placeholders)
   ========================================================================= */
export const caseStudies: CaseStudy[] = [
  {
    id: 'logistics-infrastructure',
    division: 'it',
    divisionLabel: 'IT Services Division',
    clientIndustry: 'Logistics & Distribution Enterprise',
    title: 'Multi-region cloud infrastructure migration and modernization',
    challenge:
      'The organization operated legacy on-premise infrastructure that experienced bottlenecks during peak distribution volumes, creating operational delays.',
    solution:
      'Engineered a phased, zero-downtime migration to a managed multi-region cloud topology with automated failover and standardized Infrastructure as Code.',
    metrics: [
      { value: '[Add real metric, e.g. 99.9%]', label: 'Target Uptime SLA' },
      { value: '[Add real metric, e.g. 35%]', label: 'Infrastructure Savings' },
      { value: '[Add real metric, e.g. 0 min]', label: 'Unplanned Outages' },
    ],
    techStack: ['Cloud VPC', 'Terraform', 'Kubernetes', 'SD-WAN'],
    imageUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Modern global logistics warehouse utilizing cloud management systems',
  },
  {
    id: 'fintech-automation',
    division: 'software',
    divisionLabel: 'Software & Automation Division',
    clientIndustry: 'Financial Technology Provider',
    title: 'Automated transaction reconciliation and workflow engine',
    challenge:
      'Finance teams spent significant hours daily cross-referencing multi-currency transaction records across disconnected third-party banking gateways.',
    solution:
      'Architected an asynchronous event-driven workflow service that validates, standardizes, and settles transaction records autonomously.',
    metrics: [
      { value: '[Add real metric, e.g. 85%]', label: 'Manual Processing Cut' },
      { value: '[Add real metric, e.g. < 5s]', label: 'Batch Execution' },
      { value: '[Add real volume, e.g. 500k+]', label: 'Daily Records Handled' },
    ],
    techStack: ['TypeScript', 'Go', 'PostgreSQL', 'Message Queues'],
    imageUrl:
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Financial operations team analyzing transaction settlement workflows',
  },
  {
    id: 'healthcare-unified',
    division: 'both',
    divisionLabel: 'Dual-Vertical Engagement (IT + Software)',
    clientIndustry: 'Regional Healthcare Network',
    title: 'Secure patient consultation portal & network hardening',
    challenge:
      'Distributed outpatient clinics required a standardized digital patient portal while ensuring network endpoints met strict regulatory security standards.',
    solution:
      'Deployed centralized network security controls across clinic facilities while building a responsive, accessible patient intake and appointment platform.',
    metrics: [
      { value: '[Add compliance audit score]', label: 'Audit Verification' },
      { value: '[Add patient user volume]', label: 'Registered Patients' },
      { value: '[Add response SLA, e.g. 15 min]', label: 'Helpdesk Response' },
    ],
    techStack: ['React', 'Next.js', 'Zero-Trust Network', 'Cloud Infrastructure'],
    imageUrl:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Modern medical clinical setting with secure digital workstation',
  },
];

/* =========================================================================
   5. PROCESS TIMELINES (Accenture / IBM 4-Stage Methodology)
   ========================================================================= */
export const itProcessSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & technical assessment',
    duration: '[Timeline, e.g. Week 1–2]',
    description:
      'Comprehensive review of existing infrastructure, network perimeters, cloud subscriptions, and operational pain points.',
    deliverables: ['Topology audit document', 'Risk assessment report', 'Target architecture plan'],
  },
  {
    number: '02',
    title: 'Architecture blueprint & validation',
    duration: '[Timeline, e.g. Week 3–4]',
    description:
      'Codify proposed architecture into reproducible templates and validate failover protocols in an isolated test environment.',
    deliverables: ['Infrastructure as Code (IaC) code', 'Failover testing signoff', 'Migration plan'],
  },
  {
    number: '03',
    title: 'Phased migration execution',
    duration: '[Timeline, e.g. Week 5–8]',
    description:
      'Execute staged migration during scheduled maintenance windows with documented rollback safeguards and validation checks.',
    deliverables: ['Cutover execution log', 'Data verification signoff', 'DNS routing update'],
  },
  {
    number: '04',
    title: 'Managed operations & SLA governance',
    duration: '[Ongoing engagement]',
    description:
      'Transition systems to continuous NOC monitoring with regular governance reporting and technical roadmap reviews.',
    deliverables: ['24/7 monitoring integration', 'Monthly operational reporting', 'Strategic review meetings'],
  },
];

export const softwareProcessSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Requirements & domain modeling',
    duration: '[Timeline, e.g. Week 1–2]',
    description:
      'Define operational requirements, map user workflows, establish schema structures, and agree on technical milestones.',
    deliverables: ['System specification document', 'Entity relationship diagrams', 'Sprint milestone plan'],
  },
  {
    number: '02',
    title: 'Iterative sprint engineering',
    duration: '[Timeline, e.g. Week 3–8]',
    description:
      'Two-week development sprints incorporating test-driven practices and scheduled demonstration reviews for stakeholder feedback.',
    deliverables: ['Staging demo releases', 'Automated test suites', 'Bi-weekly progress summaries'],
  },
  {
    number: '03',
    title: 'Security auditing & performance testing',
    duration: '[Timeline, e.g. Week 9–10]',
    description:
      'Execute automated security vulnerability scans, load testing under anticipated peak traffic, and accessibility validation.',
    deliverables: ['Load testing benchmarks', 'Security assessment signoff', 'Deployment runbook'],
  },
  {
    number: '04',
    title: 'Production rollout & handover',
    duration: '[Ongoing governance]',
    description:
      'Staged production deployment, team training, handover of complete source code repositories, and warranty support.',
    deliverables: ['Production deployment', 'Full source code transfer', 'Support documentation'],
  },
];

/* =========================================================================
   6. HONEST EXECUTIVE TESTIMONIAL PLACEHOLDERS
   ========================================================================= */
export const testimonials: Testimonial[] = [
  {
    quote:
      '[Add verified client quote: "Uplink provided disciplined technical guidance during our multi-region cloud migration, ensuring our operational systems remained online throughout the cutover."]',
    author: '[Client Name]',
    role: '[Role, e.g. VP of Technology]',
    company: '[Company Name, e.g. Global Logistics Partner]',
    division: 'it',
    metricNote: '[Add verified metric note, e.g. Zero unplanned downtime reported]',
  },
  {
    quote:
      '[Add verified client quote: "The workflow automation platform developed by Uplink consolidated our transaction reconciliation process and eliminated manual spreadsheet dependencies."]',
    author: '[Client Name]',
    role: '[Role, e.g. Chief Operating Officer]',
    company: '[Company Name, e.g. Financial Services Enterprise]',
    division: 'software',
    metricNote: '[Add verified metric note, e.g. Significant operational hours saved weekly]',
  },
  {
    quote:
      '[Add verified client quote: "Having a single engineering partner that manages both our underlying cloud infrastructure and our bespoke software applications has simplified our vendor management."]',
    author: '[Client Name]',
    role: '[Role, e.g. Director of Information Systems]',
    company: '[Company Name, e.g. Healthcare Network]',
    division: 'both',
    metricNote: '[Add verified metric note, e.g. Single point of contact for infrastructure and apps]',
  },
];

/* =========================================================================
   7. TECHNICAL FAQ
   ========================================================================= */
export const itFaqs: FaqItem[] = [
  {
    question: 'How are cloud infrastructure cutovers managed to minimize disruption?',
    answer:
      'We utilize staged blue-green deployment strategies, continuous data replication, and controlled traffic routing. Existing environments remain fully active until new infrastructure passes validation checks.',
    division: 'it',
  },
  {
    question: 'What is included in the Managed NOC support engagement?',
    answer:
      'Support includes continuous automated health telemetry for endpoints and servers, defined response windows based on incident severity, and established escalation channels for internal technical staff.',
    division: 'it',
  },
  {
    question: 'Do client organizations retain ownership of infrastructure code?',
    answer:
      'Yes. All Terraform, Ansible, and Docker configuration files are committed directly to client-owned repositories. Your organization maintains complete ownership of cloud accounts and configurations.',
    division: 'it',
  },
];

export const softwareFaqs: FaqItem[] = [
  {
    question: 'Who owns the intellectual property and code for custom software projects?',
    answer:
      'Your organization retains 100% ownership of all custom code, architectural documentation, and database schemas upon milestone completion, without recurring software licensing fees.',
    division: 'software',
  },
  {
    question: 'How are integrations with existing internal systems handled?',
    answer:
      'We conduct detailed interface discovery to design resilient API layers. Middleware is built with error-handling queues and retry logic to maintain data consistency across systems.',
    division: 'software',
  },
  {
    question: 'What is the typical timeframe for a custom software engagement?',
    answer:
      'Targeted automation pipelines typically ship in 4–8 weeks. Enterprise-scale web platforms or multi-tenant applications typically follow an 8–16 week phased milestone plan.',
    division: 'software',
  },
];

/* =========================================================================
   8. DISCOVERY QUIZ DATA
   ========================================================================= */
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is the primary technological objective of your organization?',
    subtitle: 'Select the operational area requiring the most immediate attention.',
    options: [
      {
        label: 'Cloud infrastructure, network security, or 24/7 technical support',
        description: 'Upgrade server environments, strengthen security policies, or support operational IT teams.',
        divisionWeight: 'it',
      },
      {
        label: 'Custom software, multi-tenant SaaS, or automated workflows',
        description: 'Build tailored web or mobile software, automate manual processes, or integrate ERP/CRMs.',
        divisionWeight: 'software',
      },
      {
        label: 'Unified digital and infrastructure modernization (both verticals)',
        description: 'Requires coordinated cloud infrastructure management alongside custom software development.',
        divisionWeight: 'both',
      },
    ],
  },
  {
    id: 2,
    question: 'Where is your internal team experiencing the most friction?',
    subtitle: 'Identify your organization’s primary operational bottleneck.',
    options: [
      {
        label: 'Infrastructure maintenance, security compliance reviews, or ticket backlog',
        description: 'Aging hardware, cloud configuration complexity, or need for specialized support staff.',
        divisionWeight: 'it',
      },
      {
        label: 'Manual data handoffs, disparate tools, or rigid commercial software',
        description: 'Employees spending time copying data between systems that lack custom integration.',
        divisionWeight: 'software',
      },
      {
        label: 'Managing separate vendors for infrastructure and software development',
        description: 'Desire for a single accountable technology partner covering both domains.',
        divisionWeight: 'both',
      },
    ],
  },
  {
    id: 3,
    question: 'What is your target initiative timeframe?',
    subtitle: 'This assists our team in evaluating engineering capacity.',
    options: [
      {
        label: 'Immediate (< 30 days)',
        description: 'Urgent infrastructure milestone, security audit deadline, or critical support need.',
        divisionWeight: 'it',
      },
      {
        label: 'Upcoming quarter (1–3 months)',
        description: 'Planned roadmap initiative with allocated executive sponsorship and budget.',
        divisionWeight: 'software',
      },
      {
        label: 'Strategic planning phase',
        description: 'Evaluating preliminary technical feasibility and architectural scope before commitment.',
        divisionWeight: 'both',
      },
    ],
  },
];

export const quizResults: Record<'it' | 'software' | 'both', QuizResult> = {
  it: {
    division: 'it',
    title: 'Recommended focus: IT Services & Infrastructure',
    tagline: 'Enterprise cloud engineering, network security, and managed technical operations',
    description:
      'Based on your requirements, your organization will benefit most from Uplink’s IT Services practice. We assist enterprise teams in modernizing cloud environments, enforcing zero-trust security perimeters, and providing dedicated 24/7 NOC support.',
    recommendedServices: [
      'Cloud architecture and infrastructure migration',
      'Network engineering and zero-trust security',
      '24/7 Managed NOC and technical helpdesk',
      'Strategic IT consulting and technology roadmaps',
    ],
    ctaLabel: 'Request an IT Infrastructure Consultation',
    prefillInquiry: 'I am interested in discussing IT Infrastructure and Managed Cloud Services.',
  },
  software: {
    division: 'software',
    title: 'Recommended focus: Software & Automation',
    tagline: 'Custom software development, SaaS platform engineering, and workflow automation',
    description:
      'Your responses indicate that custom software development or workflow automation will deliver the highest operational return. We design and build bespoke platforms that eliminate manual friction and integrate disparate systems.',
    recommendedServices: [
      'Custom enterprise software development',
      'Multi-tenant SaaS platform engineering',
      'Business process automation and workflow RPA',
      'Enterprise CRM and ERP system synchronization',
    ],
    ctaLabel: 'Discuss a Custom Software Initiative',
    prefillInquiry: 'I am interested in discussing Custom Software Development or Process Automation.',
  },
  both: {
    division: 'both',
    title: 'Recommended focus: Dual-vertical partnership',
    tagline: 'Unified cloud infrastructure management coupled with bespoke software engineering',
    description:
      'Your organization requires both robust underlying cloud infrastructure and custom-built software applications. Uplink provides both verticals under one unified team, eliminating vendor finger-pointing and ensuring architectural coherence.',
    recommendedServices: [
      'Cloud architecture and zero-trust security foundation',
      'Custom enterprise software and web platform engineering',
      'Business process automation across organizational systems',
      '24/7 Managed operations and application support',
    ],
    ctaLabel: 'Schedule an Executive Technical Briefing',
    prefillInquiry: 'I am interested in exploring a combined IT Services and Custom Software partnership.',
  },
};
