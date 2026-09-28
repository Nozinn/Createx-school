// Speaker/teacher headshots reuse the same Unsplash source style as data/teachers.js
export const events = [
	{
		id: 1,
		day: '05',
		month: 'AUG',
		time: '11:00 – 14:00',
		startDate: '2027-08-05T11:00:00',
		title: 'Formation of the organizational structure of the company in the face of uncertainty.',
		category: 'Online master-class',
		format: 'Online',
		location: 'Zoom / Createx Platform',
		badgeColor: 'bg-emerald-100 text-emerald-700',
		iconBg: 'bg-[#03CEA4]',
		price: 0,
		seatsLeft: 24,
		description: 'Learn how resilient companies adapt their team structures, delegation chains, and cross-functional squads to thrive in volatile economic cycles.',
		about: 'Uncertainty is now the default operating condition for every growing company. In this master-class we break down how resilient organizations redesign reporting lines, delegate decisions closer to the work, and keep cross-functional squads shipping even when the market shifts under their feet. You will leave with a structure audit you can apply to your own team the same week.',
		whatYouWillLearn: [
			'Diagnose where your current org chart slows decisions down',
			'Design delegation chains that survive fast leadership changes',
			'Build cross-functional squads that outlast reorganizations',
			'Set up lightweight rituals that keep structure changes visible to everyone'
		],
		whoIsFor: [
			{ title: 'Founders & CEOs', text: 'Rebuilding a structure that has outgrown its first version and needs to scale without losing speed.' },
			{ title: 'Middle managers', text: 'Leading teams through a reorg and looking for a playbook instead of trial and error.' },
			{ title: 'HR & People leads', text: 'Responsible for documenting and communicating structural change across the company.' }
		],
		speaker: {
			name: 'Dianne Russell',
			role: 'Founder and CEO, Createx',
			image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
			bio: 'Dianne has scaled three companies through hyper-growth and two recessions, and now advises founders on organizational design.',
			rating: 5.0,
			eventsCount: 22,
			studentsCount: 3400,
			socials: { facebook: '#', twitter: '#', linkedin: '#' }
		}
	},
	{
		id: 2,
		day: '24',
		month: 'JUL',
		time: '11:00 – 12:30',
		startDate: '2027-07-24T11:00:00',
		title: 'Building a customer service department. Best Practices.',
		category: 'Online lecture',
		format: 'Online',
		location: 'Zoom / Createx Platform',
		badgeColor: 'bg-blue-100 text-blue-700',
		iconBg: 'bg-[#5A87FC]',
		price: 0,
		seatsLeft: 40,
		description: 'Practical insights into scaling customer support without sacrificing response quality, including AI bot triage and SLA management.',
		about: 'Scaling support without turning it into a ticket factory is one of the hardest problems in a growing company. This lecture walks through how to structure a service department from the first hire, where AI triage genuinely helps versus where it hurts trust, and how to keep SLAs honest as volume grows.',
		whatYouWillLearn: [
			'Structure a support team around tiers instead of headcount',
			'Decide which conversations belong to bots and which stay human',
			'Set SLAs that hold up under seasonal spikes',
			'Turn support tickets into a real product feedback loop'
		],
		whoIsFor: [
			{ title: 'Support & CX leads', text: 'Building or restructuring a customer service function from scratch.' },
			{ title: 'Product managers', text: 'Who want a repeatable way to turn support signal into the roadmap.' },
			{ title: 'Operations managers', text: 'Looking to reduce response time without inflating headcount.' }
		],
		speaker: {
			name: 'Marvin McKinney',
			role: 'Product Manager at Microsoft',
			image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
			bio: 'Marvin has built and scaled support operations for two SaaS companies from 0 to over 50,000 customers.',
			rating: 4.8,
			eventsCount: 14,
			studentsCount: 1100,
			socials: { facebook: '#', twitter: '#', linkedin: '#' }
		}
	},
	{
		id: 3,
		day: '16',
		month: 'JUL',
		time: '10:00 – 13:00',
		startDate: '2027-07-16T10:00:00',
		title: 'How to apply to top universities in the UK with a scholarship: Workshop on how to prepare.',
		category: 'Online workshop',
		format: 'Online',
		location: 'Zoom / Createx Platform',
		badgeColor: 'bg-purple-100 text-purple-700',
		iconBg: 'bg-[#7772F1]',
		price: 0,
		seatsLeft: 18,
		description: 'Step-by-step guidance on crafting motivational essays, securing academic recommendations, and preparing for competitive scholarship interviews.',
		about: 'Getting into a top UK university on a scholarship takes more than good grades — it takes a story admissions officers remember. This hands-on workshop walks through building that story: from choosing the right recommenders to drafting a motivational essay that survives three rounds of editing.',
		whatYouWillLearn: [
			'Structure a motivational essay admissions officers actually finish reading',
			'Choose and brief recommenders so letters arrive on time and on message',
			'Prepare for scholarship interviews with real mock-question drills',
			'Build a application timeline that avoids last-minute panic'
		],
		whoIsFor: [
			{ title: 'High-school seniors', text: 'Applying to UK universities this admissions cycle.' },
			{ title: 'Parents', text: 'Who want a clear checklist to support their child through the process.' },
			{ title: 'Career counselors', text: 'Looking to sharpen their scholarship-application advice.' }
		],
		speaker: {
			name: 'Leslie Alexander',
			role: 'HR Director at GlobalCorp',
			image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
			bio: 'Leslie has mentored over 200 students through scholarship applications to Oxbridge and Russell Group universities.',
			rating: 4.9,
			eventsCount: 31,
			studentsCount: 1850,
			socials: { facebook: '#', twitter: '#', linkedin: '#' }
		}
	},
	{
		id: 4,
		day: '12',
		month: 'OCT',
		time: '15:00 – 18:00',
		startDate: '2026-10-12T15:00:00',
		title: 'Design systems that scale: from Figma library to production code.',
		category: 'Online workshop',
		format: 'Online',
		location: 'Zoom / Createx Platform',
		badgeColor: 'bg-pink-100 text-pink-700',
		iconBg: 'bg-[#F52F6E]',
		price: 25,
		seatsLeft: 30,
		description: 'A hands-on session on building a design system that survives contact with real product teams, from tokens to shipped components.',
		about: 'Most design systems die between the Figma library and the first sprint. In this workshop we build a small but real system together — tokens, components, documentation — and talk through exactly where handoff to engineering usually breaks and how to fix it.',
		whatYouWillLearn: [
			'Define design tokens that hold up across brands and themes',
			'Structure a component library engineers actually adopt',
			'Write documentation designers and developers both use',
			'Version a design system without breaking shipped products'
		],
		whoIsFor: [
			{ title: 'Product designers', text: 'Starting or maintaining a design system for a growing product.' },
			{ title: 'Front-end developers', text: 'Who own the component library alongside design.' },
			{ title: 'Design leads', text: 'Trying to get engineering buy-in for a systemized workflow.' }
		],
		speaker: {
			name: 'Guy Hawkins',
			role: 'Head of Brand Design',
			image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
			bio: 'Guy has led design systems for three product companies, scaling one component library to over 40 product teams.',
			rating: 4.7,
			eventsCount: 9,
			studentsCount: 890,
			socials: { facebook: '#', twitter: '#', linkedin: '#' }
		}
	},
	{
		id: 5,
		day: '28',
		month: 'OCT',
		time: '18:00 – 21:00',
		startDate: '2026-10-28T18:00:00',
		title: 'Createx Alumni Meetup: networking evening for graduates and mentors.',
		category: 'Offline meetup',
		format: 'Offline',
		location: 'Createx Campus, Tashkent',
		badgeColor: 'bg-amber-100 text-amber-700',
		iconBg: 'bg-[#FFCF53]',
		price: 0,
		seatsLeft: 60,
		description: 'An evening of networking, lightning talks, and open bar for Createx graduates, current students, and mentors.',
		about: 'Once a semester we open the Createx campus doors for graduates, current students, and mentors to meet in person. Expect five-minute lightning talks from recent alumni, an open networking floor, and a short panel on what changed in hiring this year.',
		whatYouWillLearn: [
			'Hear first-hand career updates from recent Createx graduates',
			'Meet mentors and hiring partners face to face',
			'Get feedback on your portfolio or resume on the spot',
			'Find out what skills local employers are hiring for right now'
		],
		whoIsFor: [
			{ title: 'Current students', text: 'Who want to build a network before graduating.' },
			{ title: 'Alumni', text: 'Looking to reconnect and hear about new courses and jobs.' },
			{ title: 'Mentors & partners', text: 'Interested in meeting the next cohort of graduates.' }
		],
		speaker: {
			name: 'Jerome Bell',
			role: 'Founder and Program Director',
			image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
			bio: 'Jerome founded Createx to connect graduates directly with the companies hiring for the skills they just learned.',
			rating: 4.9,
			eventsCount: 18,
			studentsCount: 1420,
			socials: { facebook: '#', twitter: '#', linkedin: '#' }
		}
	},
	{
		id: 6,
		day: '06',
		month: 'NOV',
		time: '12:00 – 13:00',
		startDate: '2026-11-06T12:00:00',
		title: 'Ask Me Anything: breaking into product management with no prior experience.',
		category: 'Online Q&A',
		format: 'Online',
		location: 'Zoom / Createx Platform',
		badgeColor: 'bg-cyan-100 text-cyan-700',
		iconBg: 'bg-[#22D3EE]',
		price: 0,
		seatsLeft: 100,
		description: 'A live, unscripted Q&A on switching into product management from design, engineering, or support roles.',
		about: 'No slides, no pitch — just an hour of direct questions about switching into product management from an adjacent role. Bring your resume, your doubts, and your toughest interview question.',
		whatYouWillLearn: [
			'What hiring managers actually screen for in a PM transition',
			'How to reframe design, support, or engineering experience for PM roles',
			'Common mistakes candidates make in PM case interviews',
			'Where to find your first PM role without a "PM" job title yet'
		],
		whoIsFor: [
			{ title: 'Designers & engineers', text: 'Considering a move into product management.' },
			{ title: 'Support & ops specialists', text: 'Whose customer insight is a real PM asset.' },
			{ title: 'Recent graduates', text: 'Deciding between a design, engineering, or PM career track.' }
		],
		speaker: {
			name: 'Marvin McKinney',
			role: 'Product Manager at Microsoft',
			image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
			bio: 'Marvin switched into product management from a support role in 2018 and now hires and mentors junior PMs.',
			rating: 4.8,
			eventsCount: 14,
			studentsCount: 1100,
			socials: { facebook: '#', twitter: '#', linkedin: '#' }
		}
	},
	{
		id: 7,
		day: '19',
		month: 'NOV',
		time: '09:30 – 17:00',
		startDate: '2026-11-19T09:30:00',
		title: 'HR & Recruiting Conference: hiring in an AI-first market.',
		category: 'Offline conference',
		format: 'Offline',
		location: 'Createx Campus, Tashkent',
		badgeColor: 'bg-indigo-100 text-indigo-700',
		iconBg: 'bg-[#5A87FC]',
		price: 45,
		seatsLeft: 12,
		description: 'A full-day conference on how AI is changing sourcing, screening, and onboarding — with talks from six HR leaders.',
		about: 'A full day of talks and workshops from HR leaders who have already rebuilt their hiring funnel around AI sourcing and screening tools — what actually saved time, what backfired, and what candidates now expect from the process.',
		whatYouWillLearn: [
			'Where AI genuinely speeds up sourcing without hurting candidate experience',
			'How to keep screening fair when a model is doing the first pass',
			'Redesigning onboarding for hybrid and remote hires',
			'Metrics that actually predict a good hire, six months in'
		],
		whoIsFor: [
			{ title: 'HR & Talent leads', text: 'Rebuilding hiring processes around new tools.' },
			{ title: 'Recruiters', text: 'Who want hands-on time with AI sourcing workflows.' },
			{ title: 'Founders', text: 'Hiring their first HR team and setting up the funnel from scratch.' }
		],
		speaker: {
			name: 'Kathryn Murphy',
			role: 'Talent Acquisition Lead',
			image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
			bio: 'Kathryn has rebuilt hiring pipelines for three fast-growing companies and speaks regularly on AI in recruiting.',
			rating: 4.8,
			eventsCount: 11,
			studentsCount: 950,
			socials: { facebook: '#', twitter: '#', linkedin: '#' }
		}
	},
	{
		id: 8,
		day: '03',
		month: 'DEC',
		time: '16:00 – 18:30',
		startDate: '2026-12-03T16:00:00',
		title: 'Portfolio Review Night: live UX and product design critique.',
		category: 'Online lecture',
		format: 'Online',
		location: 'Zoom / Createx Platform',
		badgeColor: 'bg-emerald-100 text-emerald-700',
		iconBg: 'bg-[#03CEA4]',
		price: 0,
		seatsLeft: 35,
		description: 'Submit your portfolio in advance and get it reviewed live by senior designers, with practical, no-fluff feedback.',
		about: 'Bring a portfolio you are actively sending to employers. Three senior designers review a handful of submissions live, case by case, and answer questions from everyone watching — the kind of direct feedback that is hard to get outside a real interview.',
		whatYouWillLearn: [
			'What reviewers actually look for in the first 30 seconds of a case study',
			'How to present process without burying the outcome',
			'Common portfolio mistakes that quietly cost interviews',
			'How to tailor the same case study for different company types'
		],
		whoIsFor: [
			{ title: 'Junior & mid-level designers', text: 'Actively applying and want direct feedback.' },
			{ title: 'Bootcamp graduates', text: 'Building their first professional portfolio.' },
			{ title: 'Career switchers', text: 'Presenting design work for the first time.' }
		],
		speaker: {
			name: 'Cody Fisher',
			role: 'Senior UX Designer at Front-end',
			image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
			bio: 'Cody has reviewed over 400 portfolios as a hiring panelist and mentor for early-career designers.',
			rating: 4.9,
			eventsCount: 27,
			studentsCount: 2000,
			socials: { facebook: '#', twitter: '#', linkedin: '#' }
		}
	},
	{
		id: 9,
		day: '15',
		month: 'DEC',
		time: '11:00 – 14:00',
		startDate: '2026-12-15T11:00:00',
		title: 'Intensive: shipping your first production feature in two weeks.',
		category: 'Offline intensive',
		format: 'Offline',
		location: 'Createx Campus, Tashkent',
		badgeColor: 'bg-purple-100 text-purple-700',
		iconBg: 'bg-[#7772F1]',
		price: 60,
		seatsLeft: 16,
		description: 'A two-week, in-person intensive ending with a real feature shipped to a live product, mentored by senior engineers.',
		about: 'Over two weeks on campus, small teams take a feature from spec to production on a real, live product — with senior engineers reviewing pull requests the same way they would for a new hire. This kickoff session covers the format, team assignments, and the first sprint plan.',
		whatYouWillLearn: [
			'Scope a feature down to something shippable in two weeks',
			'Work through code review the way production teams actually do it',
			'Handle the unglamorous parts: tests, rollout, monitoring',
			'Present a shipped feature the way you would in a real standup'
		],
		whoIsFor: [
			{ title: 'Bootcamp graduates', text: 'Who want production experience before their first job.' },
			{ title: 'Junior developers', text: 'Looking to close the gap between tutorials and real codebases.' },
			{ title: 'Career switchers', text: 'Building a shipped, verifiable project for interviews.' }
		],
		speaker: {
			name: 'Brooklyn Simmons',
			role: 'Senior System Architect',
			image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
			bio: 'Brooklyn has mentored over 60 junior developers through their first production pull requests.',
			rating: 4.9,
			eventsCount: 8,
			studentsCount: 1600,
			socials: { facebook: '#', twitter: '#', linkedin: '#' }
		}
	}
]

export const eventCategories = [
	'Online master-class',
	'Online lecture',
	'Online workshop',
	'Online Q&A',
	'Offline meetup',
	'Offline conference',
	'Offline intensive'
]
