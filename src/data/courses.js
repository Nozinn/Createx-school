export const courses = [
	{
		id: 1,
		title: 'The Ultimate Google Ads Training Course',
		category: 'Marketing',
		badgeColor: 'bg-[#03CEA4]',
		price: 100,
		pricePerMonth: 100,
		teacher: 'Jerome Bell',
		teacherRole: 'Founder and Program Director',
		teacherImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
		rating: 4.9,
		reviewsCount: 38,
		dates: 'Sep 12 – Nov 28',
		duration: '2.5 months / 40 hours',
		about: 'Master Google Ads from scratch. Learn how to set up, optimize, and scale campaigns that drive profitable traffic and skyrocket your conversions. Real case studies and live analytics workshops.',
		youWillLearn: [
			'Set up search, display, and video campaigns with maximum ROI',
			'Conduct in-depth keyword research and competitor benchmarking',
			'Master negative keywords, match types, and bidding algorithms',
			'Analyze Google Analytics 4 integration and conversion tracking',
			'Optimize ad copy and landing page funnels for higher Quality Score'
		],
		curatorBio: 'Jerome has managed over $10M in ad spend across Fortune 500 brands and high-growth startups over the last decade.',
		program: [
			{ week: 1, title: 'Introduction to Google Ads Ecosystem & Account Setup', content: 'Understanding Google Ads hierarchy, billing, campaign structures, and conversion tags.' },
			{ week: 2, title: 'Keyword Research & Search Intent Mastery', content: 'Using Google Keyword Planner, finding high-intent commercial keywords, and structuring ad groups.' },
			{ week: 3, title: 'Crafting High-Converting Ad Copy & Assets', content: 'Writing responsive search ads, extensions, sitelinks, and psychological triggers.' },
			{ week: 4, title: 'Smart Bidding Strategies and Budget Optimization', content: 'Maximizing conversions vs Target ROAS, automated bidding, and budget distribution.' },
			{ week: 5, title: 'Google Display Network & YouTube Video Ads', content: 'Targeting audiences, affinity groups, custom segments, and creative storytelling.' },
			{ week: 6, title: 'Analytics, Remarketing & Final Project Defense', content: 'Setting up GA4 audiences, dynamic remarketing, and presenting final campaign launch.' }
		]
	},
	{
		id: 2,
		title: 'Prduct Management Fundamentals',
		category: 'Management',
		badgeColor: 'bg-[#5A87FC]',
		price: 480,
		pricePerMonth: 240,
		teacher: 'Marvin McKinney',
		teacherRole: 'Product Manager at Microsoft',
		teacherImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
		rating: 4.8,
		reviewsCount: 42,
		dates: 'Oct 05 – Dec 20',
		duration: '3 months / 48 hours',
		about: 'Learn end-to-end modern product management practices: from discovery and user interviews to roadmapping, unit economics, agile execution, and go-to-market strategies.',
		youWillLearn: [
			'Formulate product vision, strategy, and measurable OKRs',
			'Conduct user research, customer development, and jobs-to-be-done interviews',
			'Build data-informed roadmaps and manage sprint backlogs with engineering teams',
			'Calculate unit economics (CAC, LTV, Retention, Churn)',
			'Successfully launch MVPs and iterate based on product analytics'
		],
		curatorBio: 'Marvin has led cross-functional squads at Microsoft and exited two B2B SaaS startups.',
		program: [
			{ week: 1, title: 'Product Thinking & Identifying Market Opportunities', content: 'Finding product-market fit, TAM/SAM/SOM calculation, and competitive analysis.' },
			{ week: 2, title: 'Customer Discovery & JTBD Frameworks', content: 'Conducting non-leading interviews, extracting user pains, and creating user personas.' },
			{ week: 3, title: 'Metrics, Unit Economics & Funnel Analytics', content: 'North Star Metric, pirate metrics (AARRR), cohort analysis, and financial modeling.' },
			{ week: 4, title: 'Agile Product Delivery & Stakeholder Alignment', content: 'Working with design, development, and C-level stakeholders using Scrum/Kanban.' },
			{ week: 5, title: 'Go-to-Market Strategy and Growth Loops', content: 'Distribution channels, pricing strategies, viral mechanics, and product-led growth.' },
			{ week: 6, title: 'Capstone Project: Pitching an MVP to Investors', content: 'Preparing PRD documents, roadmap prototypes, and final live evaluation.' }
		]
	},
	{
		id: 3,
		title: 'HR Management and Analytics',
		category: 'HR & Recruting',
		badgeColor: 'bg-[#F89828]',
		price: 200,
		pricePerMonth: 100,
		teacher: 'Leslie Alexander',
		teacherRole: 'HR Director at GlobalCorp',
		teacherImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
		rating: 4.9,
		reviewsCount: 50,
		dates: 'Sep 25 – Nov 15',
		duration: '2 months / 32 hours',
		about: 'Elevate your HR leadership with modern people analytics, talent acquisition systems, retention funnels, and performance appraisal frameworks.',
		youWillLearn: [
			'Implement data-driven hiring pipelines to reduce time-to-hire',
			'Track employee NPS, satisfaction, engagement, and attrition risks',
			'Build compensation & benefits tiers aligned with company growth',
			'Design onboarding experiences that increase retention by 80%',
			'Develop OKR-based performance appraisal frameworks'
		],
		curatorBio: 'Leslie has transformed HR systems for over 15,000 employees worldwide.',
		program: [
			{ week: 1, title: 'Strategic HR Architecture & Employer Brand', content: 'Positioning your company as an employer of choice in competitive markets.' },
			{ week: 2, title: 'Recruitment Analytics & Talent Sourcing Tools', content: 'Building candidate pipelines and scoring rubrics with ATS systems.' },
			{ week: 3, title: 'Onboarding & Cultural Integration Systems', content: 'Creating automated onboarding paths and mentor programs.' },
			{ week: 4, title: 'Performance Reviews & Compensation Planning', content: 'Designing 360-degree reviews, bonuses, and salary benchmarking.' },
			{ week: 5, title: 'People Analytics Dashboards & Retention Strategies', content: 'Preventing burnout, calculating eNPS, and conducting exit interviews.' }
		]
	},
	{
		id: 4,
		title: 'Brand Management & PR Communications',
		category: 'Marketing',
		badgeColor: 'bg-[#03CEA4]',
		price: 530,
		pricePerMonth: 180,
		teacher: 'Kristin Watson',
		teacherRole: 'Marketer, Curator of Marketing',
		teacherImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
		rating: 4.9,
		reviewsCount: 64,
		dates: 'Oct 10 – Jan 10',
		duration: '3 months / 45 hours',
		about: 'Create indelible brand identities, manage media relations, master crisis communications, and establish authentic brand voices across global digital channels.',
		youWillLearn: [
			'Formulate authentic brand positioning and tone of voice',
			'Build strong media relations and pitch tier-1 press outlets',
			'Manage PR crises and preserve brand equity under pressure',
			'Execute influencer marketing campaigns with high brand lift',
			'Measure brand health, recall, sentiment, and share of voice'
		],
		curatorBio: 'Kristin has spearheaded brand communications for iconic lifestyle brands and tech unicorns.',
		program: [
			{ week: 1, title: 'Brand Identity & Emotional Positioning', content: 'Defining brand archetypes, values, mission, and visual language.' },
			{ week: 2, title: 'Media Relations & Storytelling for Press', content: 'Writing press releases that editors open and building relationships with journalists.' },
			{ week: 3, title: 'Influencer Marketing & Co-Branding Partnerships', content: 'Finding aligned influencers, contracts, and tracking engagement lift.' },
			{ week: 4, title: 'Crisis Communications & Reputation Management', content: 'Protocols for brand safety, public apology frameworks, and real-time response.' },
			{ week: 5, title: 'Internal Brand Advocacy & Culture Building', content: 'Turning employees into enthusiastic brand ambassadors.' },
			{ week: 6, title: 'Brand Audits & Final Communications Campaign', content: 'Complete brand guide presentation and media launch plan.' }
		]
	},
	{
		id: 5,
		title: 'Graphic Design Basic',
		category: 'Design',
		badgeColor: 'bg-[#F52F6E]',
		price: 500,
		pricePerMonth: 250,
		teacher: 'Guy Hawkins',
		teacherRole: 'Head of Brand Design',
		teacherImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
		rating: 4.7,
		reviewsCount: 29,
		dates: 'Nov 01 – Jan 15',
		duration: '2.5 months / 36 hours',
		about: 'Dive into the fundamentals of graphic design: typography, color theory, composition, poster design, and identity creation in Figma, Photoshop, and Illustrator.',
		youWillLearn: [
			'Master typography rules, font pairing, and editorial layouts',
			'Apply color harmony, psychology, and contrast standards',
			'Work proficiently with vectors and raster graphics',
			'Create logos, posters, brand marks, and digital assets',
			'Present a portfolio that lands freelance and studio clients'
		],
		curatorBio: 'Guy is an award-winning art director with Red Dot and Cannes Lions recognitions.',
		program: [
			{ week: 1, title: 'Visual Composition & Grid Systems', content: 'Rule of thirds, balance, hierarchy, and golden ratio in layouts.' },
			{ week: 2, title: 'Typography Deep Dive', content: 'Anatomy of type, kerning, hierarchy, and expressive editorial styling.' },
			{ week: 3, title: 'Color Theory & Brand Palettes', content: 'HSL model, accessibility standards, printing vs screen color spaces.' },
			{ week: 4, title: 'Vector Illustration & Iconography', content: 'Pen tool mastery, geometric construction, and icon sets.' },
			{ week: 5, title: 'Brand Identity Suite & Mockups', content: 'Stationery, packaging, digital banners, and presentation mockups.' },
			{ week: 6, title: 'Portfolio Curation & Behance Case Study', content: 'Packaging projects into captivating Behance and Dribbble cases.' }
		]
	},
	{
		id: 6,
		title: 'Business Development Management',
		category: 'Management',
		badgeColor: 'bg-[#5A87FC]',
		price: 400,
		pricePerMonth: 200,
		teacher: 'Dianne Russell',
		teacherRole: 'Founder and CEO',
		teacherImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
		rating: 5.0,
		reviewsCount: 88,
		dates: 'Oct 15 – Dec 30',
		duration: '2.5 months / 35 hours',
		about: 'Scale B2B revenue, structure high-value enterprise partnerships, negotiate win-win agreements, and build repeatable sales pipelines from scratch.',
		youWillLearn: [
			'Build outbound lead generation and enterprise deal pipelines',
			'Qualify enterprise accounts using MEDDPICC methodology',
			'Negotiate long-term commercial terms and contracts',
			'Structure strategic affiliate and channel partner ecosystems',
			'Hire and manage high-performing sales development teams'
		],
		curatorBio: 'Dianne scaled Createx to 100,000+ students and serves as an advisor to European venture funds.',
		program: [
			{ week: 1, title: 'Strategic Business Development Foundations', content: 'Market mapping, buyer personas, and pipeline metrics.' },
			{ week: 2, title: 'Prospecting, Cold Outreach & Deal Discovery', content: 'Crafting cold emails, LinkedIn outreach, and discovery calls.' },
			{ week: 3, title: 'Complex Enterprise Solution Selling', content: 'Navigating multi-stakeholder decisions and closing enterprise accounts.' },
			{ week: 4, title: 'Negotiation Strategy & Contract Closing', content: 'Handling objections, price anchoring, and legal redlines.' },
			{ week: 5, title: 'Channel Partnerships & International Expansion', content: 'Co-selling, revenue sharing, and cross-border partnerships.' }
		]
	},
	{
		id: 7,
		title: 'Highload Software Architecture',
		category: 'Development',
		badgeColor: 'bg-[#7772F1]',
		price: 600,
		pricePerMonth: 200,
		teacher: 'Brooklyn Simmons',
		teacherRole: 'Senior System Architect',
		teacherImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
		rating: 4.9,
		reviewsCount: 45,
		dates: 'Nov 10 – Feb 15',
		duration: '3 months / 50 hours',
		about: 'Design scalable, fault-tolerant distributed systems capable of handling millions of requests per second with microservices, Kafka, Redis, and cloud infrastructure.',
		youWillLearn: [
			'Design distributed microservices architectures with low latency',
			'Implement event-driven systems using Apache Kafka and message queues',
			'Optimize database query performance, sharding, and replication',
			'Utilize Redis and multi-tier caching patterns under peak load',
			'Apply Chaos Engineering and zero-downtime deployment practices'
		],
		curatorBio: 'Brooklyn has architected distributed payment backends serving 50M+ active users.',
		program: [
			{ week: 1, title: 'System Scalability Fundamentals & Latency Budgets', content: 'Vertical vs horizontal scaling, CAP theorem, and SLI/SLO definition.' },
			{ week: 2, title: 'Relational vs NoSQL, Sharding & Read Replicas', content: 'Database indexing, partition keys, CQRS, and replication lag.' },
			{ week: 3, title: 'Caching Strategies with Redis & Memcached', content: 'Cache-aside, write-through, cache stampede mitigation, and TTL tuning.' },
			{ week: 4, title: 'Event-Driven Architectures with Apache Kafka', content: 'Partitions, consumer groups, idempotency, and stream processing.' },
			{ week: 5, title: 'Resilience Patterns: Circuit Breakers & Rate Limiting', content: 'Token bucket algorithms, bulkhead patterns, and load balancing.' },
			{ week: 6, title: 'Final System Design Interview Defense', content: 'Presenting a complete architecture for a YouTube or Uber scale service.' }
		]
	},
	{
		id: 8,
		title: 'Human Resources – Selection and Recruitment',
		category: 'HR & Recruting',
		badgeColor: 'bg-[#F89828]',
		price: 150,
		pricePerMonth: 75,
		teacher: 'Kathryn Murphy',
		teacherRole: 'Talent Acquisition Lead',
		teacherImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
		rating: 4.8,
		reviewsCount: 33,
		dates: 'Oct 20 – Dec 10',
		duration: '2 months / 28 hours',
		about: 'From Boolean sourcing to competency-based behavioral interviewing and closing hard-to-hire tech candidates with persuasive offer presentations.',
		youWillLearn: [
			'Master advanced Boolean search and sourcing across GitHub and LinkedIn',
			'Conduct competency-based and STAR methodology interviews',
			'Reduce candidate drop-off rate across all recruitment stages',
			'Craft competitive offer packages and win counter-offers',
			'Build automated candidate relationship management systems'
		],
		curatorBio: 'Kathryn has placed 500+ engineers and executives into tech companies across Europe and North America.',
		program: [
			{ week: 1, title: 'Candidate Persona & Job Profiling', content: 'Aligning with hiring managers on scorecard and required proficiencies.' },
			{ week: 2, title: 'Advanced Sourcing Techniques & Boolean Strings', content: 'Finding hidden talent across unconventional platforms and tech communities.' },
			{ week: 3, title: 'Structured Screening & Interview Frameworks', content: 'Eliminating unconscious bias and standardizing candidate assessment.' },
			{ week: 4, title: 'Offer Crafting, Negotiation & Onboarding Hand-off', content: 'Presenting packages and counter-offer management.' }
		]
	},
	{
		id: 9,
		title: 'User Experience. Principles of Human-Centered Design',
		category: 'Design',
		badgeColor: 'bg-[#F52F6E]',
		price: 240,
		pricePerMonth: 120,
		teacher: 'Cody Fisher',
		teacherRole: 'Senior UX Designer at Front-end',
		teacherImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
		rating: 4.9,
		reviewsCount: 52,
		coursesCount: 8,
		studentsCount: 2000,
		dates: 'Nov 7 – Nov 21',
		duration: '2 months / 36 hours',
		about: 'Nulla facilisi. Mauris aliquet cursus ante ac dictum. Integer eu sapien sem. Morbi orci neque, imperdiet a ultricies ac, dapibus a nunc. Praesent a quam urna integer eget.',
		youWillLearn: [
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
			'Velit officia consequat duis enim velit mollit.',
			'Exercitation veniam consequat sunt nostrud amet.',
			'Nulla facilisi. Morbi orci neque, imperdiet a ultricies ac.',
			'Dapibus a nunc. Praesent a quam urna integer eget.'
		],
		curatorBio: 'Mattis adipiscing aliquam eu proin mauris aenean tincidunt. Amet feugiat viverra maecenas sed. Imperdiet aliquet integer mauris leo malesuada feugiat. Vulputate placerat amet pulvinar lorem nisl.',
		whoIsFor: [
			'Specialists with experience in related areas (graphic design, web development, product management) looking to transition into UX.',
			'Beginning designers who want to systematize their knowledge and master a human-centered design approach.',
			'Product managers and business analysts who want to understand UX research and improve user satisfaction metrics.',
			'Anyone who wants to switch to the field of UX design and create intuitive digital products.'
		],
		steps: [
			{ number: '01', title: 'Watching online video lectures', desc: 'Culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.' },
			{ number: '02', title: 'Passing a test', desc: 'Anim id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita.' },
			{ number: '03', title: 'Curator\'s feedback', desc: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.' },
			{ number: '04', title: 'Correction of mistakes', desc: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo.' }
		],
		program: [
			{ week: 1, title: 'Introduction to UX & Human-Centered Research', content: 'Nulla facilisi. Mauris aliquet cursus ante ac dictum. Integer eu sapien sem. Morbi orci neque, imperdiet a ultricies ac, dapibus a nunc. Praesent a quam urna integer eget.' },
			{ week: 2, title: 'User Research, Interviews & Personas', content: 'In-depth interviews, observational research, affinity mapping, and synthesizing research insights into actionable persona cards.' },
			{ week: 3, title: 'Information Architecture & Wireframing', content: 'Site mapping, card sorting, user flows, navigation logic, and low-fidelity paper and digital wireframes.' },
			{ week: 4, title: 'Prototyping and Interaction Design in Figma', content: 'Interactive components, smart animation, micro-interactions, responsive constraints, and design tokens.' },
			{ week: 5, title: 'Usability Testing & Analytics Validation', content: 'Designing unmoderated and moderated usability tests, calculating SUS scores, and validating hypotheses.' },
			{ week: 6, title: 'Design System & UI Component Libraries', content: 'Creating atomic design systems, variants, auto-layout guidelines, and handoff specifications for developers.' },
			{ week: 7, title: 'Presentation & Portfolio Case Preparation', content: 'Documenting the design process, storytelling user problems, and packaging case studies for prospective employers.' },
			{ week: 8, title: 'Final Capstone Project Defense', content: 'Live product presentation before senior design leads from top industry studios and graduation certificate award.' }
		]
	}
]
