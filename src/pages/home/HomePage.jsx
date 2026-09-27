import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, Check, ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react'
import { courses } from '../../data/courses'
import { events } from '../../data/events'
import { posts } from '../../data/posts'
import { teachers } from '../../data/teachers'
import CourseCard from '../../components/CourseCard'
import Certificate from '../../components/Certificate'
import Testimonials from '../../components/Testimonials'
import Newsletter from '../../components/Newsletter'
import { useModal } from '../../context/ModalContext'

export default function HomePage() {
	const { openVideo } = useModal()
	const [activeBenefitTab, setActiveBenefitTab] = useState(0)
	const [teamIndex, setTeamIndex] = useState(0)

	const featuredCourses = courses.slice(0, 6)
	const teamList = teachers.slice(teamIndex, teamIndex + 4)

	const benefitTabs = [
		{
			id: 0,
			tabTitle: 'Experienced Tutors',
			heading: 'Only practicing tutors',
			description:
				'Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quisque integer. Sit ac duis orci senectus dignissim suspendisse adipiscing. Neque curabitur mi mauris id ut aliquet integer nec. Morbi mauris cras massa ut dolor quisque integer.',
		},
		{
			id: 1,
			tabTitle: 'Feedback & Support',
			heading: 'Personalized code and project reviews',
			description:
				'Our mentors provide meticulous line-by-line feedback on every assignment within 24 hours. You get live video consultations and 1-on-1 Q&A sessions whenever you feel stuck on complex topics.',
		},
		{
			id: 2,
			tabTitle: '24/7 Online Library',
			heading: 'Unlimited access to curriculum materials',
			description:
				'Lifetime access to curated checklists, Figma templates, design systems, code repositories, and recorded workshop webinars. Learn at your own pace from any device.',
		},
		{
			id: 3,
			tabTitle: 'Community',
			heading: 'Vibrant student and alumni network',
			description:
				'Join an inspiring community of 15,000+ ambitious creators. Participate in hackathons, portfolio reviews, study groups, and exclusive hiring fairs organized with our corporate partners.',
		},
	]

	const nextTeam = () => {
		setTeamIndex((prev) => (prev + 1) % (teachers.length - 3))
	}
	const prevTeam = () => {
		setTeamIndex((prev) => (prev === 0 ? teachers.length - 4 : prev - 1))
	}

	return (
		<div className='overflow-hidden'>
			{/* 1. HERO SECTION */}
			<section className='relative bg-gradient-to-b from-[#FFF2ED] via-[#FFF5F2] to-[#FEDBD0]/40 pt-12 pb-20 overflow-hidden'>
				{/* Decorative shapes */}
				<div className='absolute top-10 left-5 w-72 h-72 rounded-full bg-pink-200/30 blur-3xl pointer-events-none' />
				<div className='absolute bottom-10 right-10 w-96 h-96 rounded-full bg-orange-100/50 blur-3xl pointer-events-none' />

				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
						{/* Left Content */}
						<div className='lg:col-span-6 space-y-8'>
							{/* Play Showreel Button */}
							<button
								type='button'
								onClick={openVideo}
								className='inline-flex items-center space-x-3 text-xs sm:text-sm font-bold text-[#1E212C] hover:text-[#FF3F1A] transition-colors group'
							>
								<span className='w-12 h-12 rounded-full bg-[#FF3F1A] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 animate-pulse-glow'>
									<Play className='w-4 h-4 fill-white ml-0.5' />
								</span>
								<span>Play showreel</span>
							</button>

							{/* Main Headline */}
							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E212C] font-heading leading-tight tracking-tight'>
								Enjoy studying with Createx Online Courses
							</h1>

							{/* CTA Buttons */}
							<div className='flex flex-wrap items-center gap-4 pt-2'>
								<Link
									to='/about'
									className='px-8 py-3.5 border-2 border-[#FF3F1A] text-[#FF3F1A] hover:bg-[#FF3F1A] hover:text-white font-bold text-sm rounded transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs'
								>
									About us
								</Link>
								<Link
									to='/courses'
									className='px-8 py-3.5 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold text-sm rounded shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0'
								>
									Explore courses
								</Link>
							</div>
						</div>

						{/* Right Hero Illustration */}
						<div className='lg:col-span-6 flex justify-center'>
							<div className='relative w-full max-w-lg'>
								{/* Vector Flat Illustration */}
								<svg
									viewBox='0 0 500 450'
									className='w-full h-auto drop-shadow-xl animate-float'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									{/* Background Desk & Lamp */}
									<rect x='100' y='320' width='300' height='12' rx='6' fill='#1E212C' />
									<rect x='140' y='332' width='12' height='100' fill='#D7DADD' />
									<rect x='348' y='332' width='12' height='100' fill='#D7DADD' />

									{/* Computer Monitor */}
									<rect x='190' y='180' width='120' height='90' rx='8' fill='#5A87FC' />
									<rect x='200' y='190' width='100' height='70' rx='4' fill='#FFFFFF' />
									<rect x='245' y='270' width='10' height='50' fill='#787A80' />
									<rect x='225' y='315' width='50' height='6' rx='3' fill='#424551' />

									{/* Floating Graduation Caps */}
									<g transform='translate(60, 60)'>
										<polygon points='30,10 60,0 90,10 60,20' fill='#FF3F1A' />
										<rect x='58' y='18' width='4' height='16' fill='#FFCF53' />
										<circle cx='60' cy='35' r='3' fill='#FFCF53' />
									</g>

									{/* Tutor Figure on Screen */}
									<circle cx='250' cy='215' r='14' fill='#FFCF53' />
									<path d='M235 245 C235 230 265 230 265 245' fill='#FF3F1A' />

									{/* Student Figure at Desk */}
									{/* Torso */}
									<path d='M310 270 C310 230 380 230 380 270 L390 340 L300 340 Z' fill='#03CEA4' />
									{/* Head with Headphones */}
									<circle cx='345' cy='180' r='24' fill='#FFCF53' />
									<path d='M330 160 C335 150 365 150 370 160' fill='#1E212C' />
									{/* Arm gesturing */}
									<path d='M320 250 L280 230 L290 220' stroke='#FFCF53' strokeWidth='12' strokeLinecap='round' />

									{/* Decorative shapes */}
									<circle cx='80' cy='280' r='6' fill='#FF3F1A' />
									<circle cx='430' cy='140' r='8' fill='#FFCF53' />
									<polygon points='420,290 435,275 440,295' fill='#5A87FC' />
									<circle cx='130' cy='130' r='4' fill='#03CEA4' />
								</svg>
							</div>
						</div>
					</div>

					{/* Counters Bar */}
					<div className='mt-16 pt-12 border-t border-gray-200/60'>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
							<div>
								<span className='block text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E212C] font-heading'>
									1200
								</span>
								<span className='text-xs sm:text-sm text-gray-600 font-medium mt-1 block'>
									Students graduated
								</span>
							</div>

							<div className='relative'>
								<span className='hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF3F1A]' />
								<span className='block text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E212C] font-heading'>
									84
								</span>
								<span className='text-xs sm:text-sm text-gray-600 font-medium mt-1 block'>
									Finished courses
								</span>
							</div>

							<div className='relative'>
								<span className='hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF3F1A]' />
								<span className='block text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E212C] font-heading'>
									16
								</span>
								<span className='text-xs sm:text-sm text-gray-600 font-medium mt-1 block'>
									Qualified tutors
								</span>
							</div>

							<div className='relative'>
								<span className='hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF3F1A]' />
								<span className='block text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E212C] font-heading'>
									5
								</span>
								<span className='text-xs sm:text-sm text-gray-600 font-medium mt-1 block'>
									Years of experience
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 2. WHO WE ARE / WHY CREATEX? */}
			<section className='py-24 bg-white relative'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
						{/* Left Image */}
						<div className='lg:col-span-6 relative'>
							<div className='relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white'>
								<img
									src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80'
									alt='Student studying with Createx'
									className='w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700'
								/>
							</div>
							{/* Decorative floating dots badge */}
							<div className='absolute -bottom-6 -left-6 w-24 h-24 bg-dots pattern-dots opacity-40 pointer-events-none' />
						</div>

						{/* Right Content */}
						<div className='lg:col-span-6 space-y-6'>
							<div>
								<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
									WHO WE ARE
								</span>
								<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2'>
									Why Createx?
								</h2>
							</div>

							<ul className='space-y-3.5'>
								{[
									'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
									'Vulputate placerat amet pulvinar lorem nisl.',
									'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
									'Etiam duis lobortis in fames ultrices commodo nibh.',
									'Fringilla in nec risus congue venenatis pretium posuere nec.',
									'Id risus sit felis vitae a adipiscing mauris platea pulvinar.',
								].map((text, idx) => (
									<li key={idx} className='flex items-start space-x-3 text-sm text-gray-700'>
										<span className='shrink-0 w-5 h-5 rounded-full bg-[#FF3F1A]/10 text-[#FF3F1A] flex items-center justify-center mt-0.5'>
											<Check className='w-3 h-3 stroke-[3]' />
										</span>
										<span>{text}</span>
									</li>
								))}
							</ul>

							<div className='pt-2'>
								<Link
									to='/about'
									className='inline-block px-8 py-3.5 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold text-sm rounded shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5'
								>
									More about us
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 3. FEATURED COURSES */}
			<section className='py-20 bg-gray-50/70'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4'>
						<div>
							<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
								READY TO LEARN?
							</span>
							<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2'>
								Featured Courses
							</h2>
						</div>
						<Link
							to='/courses'
							className='inline-flex items-center space-x-2 px-6 py-3 border border-[#FF3F1A] text-[#FF3F1A] hover:bg-[#FF3F1A] hover:text-white font-bold text-sm rounded transition-all duration-200'
						>
							<span>View all courses</span>
							<ArrowRight className='w-4 h-4' />
						</Link>
					</div>

					{/* 6 Courses Grid (2 columns on tablet, 2-3 on large) */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{featuredCourses.map((course) => (
							<CourseCard key={course.id} course={course} />
						))}
					</div>
				</div>
			</section>

			{/* 4. THAT'S HOW WE DO IT (BENEFITS TABS) */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-14'>
						<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
							OUR BENEFITS
						</span>
						<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2'>
							That's how we do it
						</h2>
					</div>

					{/* Tabs Row */}
					<div className='flex flex-wrap items-center justify-center border-b border-gray-200 mb-12 gap-2 sm:gap-8'>
						{benefitTabs.map((tab) => (
							<button
								key={tab.id}
								type='button'
								onClick={() => setActiveBenefitTab(tab.id)}
								className={`pb-4 px-3 text-sm sm:text-base font-bold transition-all relative ${
									activeBenefitTab === tab.id
										? 'text-[#FF3F1A]'
										: 'text-gray-400 hover:text-gray-700'
								}`}
							>
								{tab.tabTitle}
								{activeBenefitTab === tab.id && (
									<span className='absolute bottom-0 left-0 w-full h-0.5 bg-[#FF3F1A]' />
								)}
							</button>
						))}
					</div>

					{/* Tab Content */}
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
						<div className='lg:col-span-6 space-y-5 animate-fadeIn'>
							<h3 className='text-2xl sm:text-3xl font-bold text-[#1E212C] font-heading'>
								{benefitTabs[activeBenefitTab].heading}
							</h3>
							<p className='text-base text-gray-600 leading-relaxed'>
								{benefitTabs[activeBenefitTab].description}
							</p>
						</div>

						<div className='lg:col-span-6 flex justify-center'>
							<svg
								viewBox='0 0 450 350'
								className='w-full max-w-md h-auto drop-shadow-md'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect x='50' y='60' width='350' height='230' rx='16' fill='#F4F5F7' />
								{/* Screen illustration */}
								<rect x='80' y='90' width='290' height='170' rx='8' fill='#FFFFFF' stroke='#E5E8ED' />
								<circle cx='140' cy='160' r='28' fill='#FFCF53' />
								<rect x='180' y='145' width='150' height='10' rx='5' fill='#1E212C' />
								<rect x='180' y='165' width='110' height='8' rx='4' fill='#D7DADD' />

								{/* Cheerful collaborator figures */}
								<circle cx='100' cy='280' r='18' fill='#FF3F1A' />
								<circle cx='340' cy='280' r='18' fill='#5A87FC' />
							</svg>
						</div>
					</div>
				</div>
			</section>

			{/* 5. LECTURES & WORKSHOPS (EVENTS TEASER ON PEACH) */}
			<section className='py-20 bg-gradient-to-b from-[#FFF2ED] to-[#FEDBD0]/40'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
							OUR EVENTS
						</span>
						<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2'>
							Lectures & workshops
						</h2>
					</div>

					{/* 3 Event Cards Stack */}
					<div className='space-y-4 max-w-4xl mx-auto mb-12'>
						{events.map((ev) => (
							<div
								key={ev.id}
								className='bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:-translate-y-0.5'
							>
								{/* Date & Time */}
								<div className='flex items-center space-x-5 shrink-0'>
									<div className='flex items-baseline space-x-1.5 text-[#FF3F1A]'>
										<span className='text-4xl font-black font-heading leading-none'>
											{ev.day}
										</span>
										<span className='text-sm font-bold uppercase'>{ev.month}</span>
									</div>
									<div className='text-xs text-gray-500 font-medium pl-4 border-l border-gray-200'>
										{ev.time}
									</div>
								</div>

								{/* Title & Category */}
								<div className='flex-1'>
									<h4 className='text-base font-bold text-[#1E212C] font-heading mb-1 hover:text-[#FF3F1A] transition-colors'>
										{ev.title}
									</h4>
									<span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded ${ev.badgeColor}`}>
										{ev.category}
									</span>
								</div>

								{/* Action */}
								<Link
									to='/events'
									className='px-6 py-2.5 border border-[#FF3F1A] text-[#FF3F1A] hover:bg-[#FF3F1A] hover:text-white font-bold text-xs rounded transition-colors self-start md:self-center shrink-0'
								>
									View more
								</Link>
							</div>
						))}
					</div>

					{/* Footer CTA */}
					<div className='text-center flex flex-col sm:flex-row items-center justify-center gap-4'>
						<span className='text-lg font-bold text-[#1E212C] font-heading'>
							Do you want more?
						</span>
						<Link
							to='/events'
							className='px-8 py-3 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold text-sm rounded shadow-sm hover:shadow transition-all'
						>
							Explore all events
						</Link>
					</div>
				</div>
			</section>

			{/* 6. CERTIFICATE SECTION */}
			<Certificate />

			{/* 7. MEET OUR TEAM */}
			<section className='py-20 bg-gray-50/70'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-end justify-between mb-12'>
						<div>
							<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
								BEST TUTORS TO TEACH YOU
							</span>
							<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2'>
								Meet our team
							</h2>
						</div>

						{/* Slider Controls */}
						<div className='flex items-center space-x-3'>
							<button
								type='button'
								onClick={prevTeam}
								className='w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#FF3F1A] hover:text-white hover:border-[#FF3F1A] transition-colors'
								aria-label='Previous tutor'
							>
								<ArrowLeft className='w-4 h-4' />
							</button>
							<button
								type='button'
								onClick={nextTeam}
								className='w-10 h-10 rounded-full bg-[#FF3F1A] text-white flex items-center justify-center hover:bg-[#E0320F] transition-colors'
								aria-label='Next tutor'
							>
								<ArrowRight className='w-4 h-4' />
							</button>
						</div>
					</div>

					{/* 4 Tutor Cards */}
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
						{teamList.map((tutor) => (
							<div
								key={tutor.id}
								className='group bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 text-center pb-6'
							>
								{/* Yellow cutout container */}
								<div className='relative h-64 bg-[#FFCF53] overflow-hidden flex items-end justify-center mb-5'>
									{/* Decorative rings */}
									<div className='absolute inset-0 flex items-center justify-center opacity-30'>
										<div className='w-48 h-48 rounded-full border-2 border-white' />
									</div>
									<img
										src={tutor.image}
										alt={tutor.name}
										className='relative z-10 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105'
										loading='lazy'
									/>
								</div>

								{/* Info */}
								<h4 className='text-lg font-bold text-[#1E212C] font-heading group-hover:text-[#FF3F1A] transition-colors'>
									{tutor.name}
								</h4>
								<p className='text-xs text-gray-500 mt-1 px-4'>
									{tutor.role}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 8. TESTIMONIALS SLIDER */}
			<Testimonials />

			{/* 9. LATEST POSTS */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-end justify-between mb-12'>
						<div>
							<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
								OUR BLOG
							</span>
							<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2'>
								Latest posts
							</h2>
						</div>
						<Link
							to='/blog'
							className='px-6 py-2.5 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold text-sm rounded shadow-sm hover:shadow transition-all'
						>
							Go to blog
						</Link>
					</div>

					{/* 3 Blog Cards */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{posts.map((post) => (
							<div
								key={post.id}
								className='group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col'
							>
								{/* Thumbnail with Badge */}
								<div className='relative h-48 overflow-hidden'>
									<img
										src={post.image}
										alt={post.title}
										className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
									/>
									<span
										className={`absolute top-4 left-4 px-2.5 py-1 rounded text-xs font-bold shadow-xs ${post.typeColor}`}
									>
										{post.type}
									</span>
								</div>

								{/* Content */}
								<div className='p-6 flex flex-col justify-between flex-1 space-y-4'>
									<div>
										<div className='flex items-center space-x-2 text-xs text-gray-400 mb-2'>
											<span>{post.badge}</span>
											<span>•</span>
											<span>{post.date}</span>
											<span>•</span>
											<span>{post.duration}</span>
										</div>
										<h4 className='text-base font-bold text-[#1E212C] font-heading leading-snug group-hover:text-[#FF3F1A] transition-colors'>
											{post.title}
										</h4>
										<p className='text-xs text-gray-500 line-clamp-2 mt-2 leading-relaxed'>
											{post.excerpt}
										</p>
									</div>

									<Link
										to={`/blog/${post.id}`}
										className='inline-flex items-center space-x-1 text-xs font-bold text-[#1E212C] group-hover:text-[#FF3F1A] transition-colors'
									>
										<span>{post.linkText}</span>
										<ArrowUpRight className='w-3.5 h-3.5' />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 10. NEWSLETTER SUBSCRIBE BANNER */}
			<Newsletter />
		</div>
	)
}
