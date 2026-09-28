import { CirclePlay, FileText, Mic } from 'lucide-react'
import post1 from './images/post-1.jpg'
import post2 from './images/post-2.jpg'
import post3 from './images/post-3.jpg'
import post4 from './images/post-4.jpg'
import post5 from './images/post-5.jpg'
import post6 from './images/post-6.jpg'
import post7 from './images/post-7.jpg'
import post8 from './images/post-8.jpg'
import thumb1 from './images/thumb-1.jpg'
import thumb5 from './images/thumb-5.jpg'
import thumb7 from './images/thumb-7.jpg'

export const blogCategories = [
	'Marketing',
	'Management',
	'HR & Recruting',
	'Design',
	'Development',
]

export const blogTypes = [
	{ value: 'all', label: 'All' },
	{ value: 'article', label: 'Articles' },
	{ value: 'video', label: 'Videos' },
	{ value: 'podcast', label: 'Podcasts' },
]

export const actionLabel = {
	article: 'Read',
	video: 'Watch',
	podcast: 'Listen',
}

export const typeLabel = {
	article: 'Article',
	video: 'Video',
	podcast: 'Podcast',
}

export const typeIcon = {
	article: FileText,
	video: CirclePlay,
	podcast: Mic,
}

const basePosts = [
	{
		type: 'podcast',
		category: 'Marketing',
		date: 'September 4, 2020',
		duration: '36 min',
		title: 'What is traffic arbitrage and does it really make money?',
		excerpt: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
		image: post1,
		thumb: thumb1,
	},
	{
		type: 'article',
		category: 'Development',
		date: 'September 1, 2020',
		title: 'How to choose the first programming language for a beginner',
		excerpt: 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
		image: post2,
	},
	{
		type: 'video',
		category: 'Design',
		date: 'August 8, 2020',
		duration: '40 min',
		title: 'Should you choose a creative profession if you are attracted to creativity?',
		excerpt: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
		image: post3,
	},
	{
		type: 'article',
		category: 'HR & Recruting',
		date: 'August 3, 2020',
		title: 'HR statistics: job search,  interviews, hiring and recruiting',
		excerpt: 'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...',
		image: post4,
	},
	{
		type: 'video',
		category: 'Management',
		date: 'August 2, 2020',
		duration: '45 min',
		title: 'What to do and who to talk to if you want to get feedback on the product',
		excerpt: 'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. Curabitur nisl tincidunt eros venenatis...',
		image: post5,
		thumb: thumb5,
	},
	{
		type: 'podcast',
		category: 'Design',
		date: 'July 28, 2020',
		duration: '36 min',
		title: 'What are color profiles and how they work in graphic design',
		excerpt: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
		image: post6,
	},
	{
		type: 'video',
		category: 'Management',
		date: 'July 15, 2020',
		duration: '45 min',
		title: 'Startup: how to build a team that will live longer than a year',
		excerpt: 'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...',
		image: post7,
		thumb: thumb7,
	},
	{
		type: 'article',
		category: 'Marketing',
		date: 'July 9, 2020',
		title: 'How to get customers to love your business from the start',
		excerpt: 'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...',
		image: post8,
	},
]

// Older posts reuse the same artwork so pagination has something to show
const olderPosts = [
	{ title: 'Podcast: how to launch your first ad campaign on a small budget', date: 'July 2, 2020', category: 'Marketing' },
	{ title: 'Why every developer should learn the basics of algorithms', date: 'June 26, 2020', category: 'Development' },
	{ title: 'Design thinking: a step-by-step guide for beginners', date: 'June 18, 2020', category: 'Design' },
	{ title: 'How to write a job description that attracts the best candidates', date: 'June 10, 2020', category: 'HR & Recruting' },
	{ title: 'Product metrics every manager should track every week', date: 'June 3, 2020', category: 'Management' },
	{ title: 'Typography basics: pairing fonts for web interfaces', date: 'May 27, 2020', category: 'Design' },
	{ title: 'Remote teams: rituals that keep people engaged', date: 'May 19, 2020', category: 'Management' },
	{ title: 'Content marketing: how to plan a year of publications', date: 'May 12, 2020', category: 'Marketing' },
]

export const blogPosts = [
	...basePosts,
	...olderPosts.map((older, i) => ({ ...basePosts[i], ...older })),
].map((post, i) => ({ ...post, id: i + 1 }))

export const trendingPosts = [blogPosts[0], blogPosts[6], blogPosts[4]]

export const blogTags = [
	'#marketing',
	'#recruiting',
	'#coding',
	'#learning',
	'#HR',
	'#self-development',
]
