import { useState, useEffect, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
	Check,
	Star,
	BookOpen,
	Users,
	Plus,
	Minus,
	ArrowLeft,
	ArrowRight,
	CheckCircle,
} from 'lucide-react'
import { courses } from '../../data/courses'
import CourseCard from '../../components/CourseCard'
import Testimonials from '../../components/Testimonials'

export default function Course() {
	const { id } = useParams()

	// Find course by ID or fallback to the UX Design course from Photo 3 (id: 9)
	const currentCourse = useMemo(() => {
		if (id) {
			const found = courses.find((c) => String(c.id) === String(id))
			if (found) return found
		}
		// Default to course 9 (UX Design from Photo 3)
		return courses.find((c) => c.id === 9) || courses[0]
	}, [id])

	// Accordion state (expanded week index)
	const [expandedWeek, setExpandedWeek] = useState(0)

	// Live Countdown Timer state
	const [timeLeft, setTimeLeft] = useState({
		days: 6,
		hours: 18,
		minutes: 24,
		seconds: 12,
	})

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev.seconds > 0) {
					return { ...prev, seconds: prev.seconds - 1 }
				}
				if (prev.minutes > 0) {
					return { ...prev, minutes: 59, seconds: 59 }
				}
				if (prev.hours > 0) {
					return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
				}
				if (prev.days > 0) {
					return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
				}
				return prev
			})
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	// Quick Register form state (discount banner)
	const [discountForm, setDiscountForm] = useState({ name: '', email: '', phone: '' })
	const [discountSubmitted, setDiscountSubmitted] = useState(false)

	// Main Register form state
	const [regForm, setRegForm] = useState({ name: '', email: '', phone: '' })
	const [regSubmitted, setRegSubmitted] = useState(false)

	// Other courses for "You may also like"
	const otherCourses = useMemo(() => {
		return courses.filter((c) => c.id !== currentCourse.id).slice(0, 2)
	}, [currentCourse.id])

	const handleScrollToRegister = () => {
		const element = document.getElementById('register-section')
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const handleDiscountSubmit = (e) => {
		e.preventDefault()
		setDiscountSubmitted(true)
		setTimeout(() => setDiscountSubmitted(false), 3000)
	}

	const handleRegSubmit = (e) => {
		e.preventDefault()
		setRegSubmitted(true)
		setTimeout(() => setRegSubmitted(false), 3000)
	}

	return (
		<div className='bg-white'>
			{/* 1. HERO BANNER */}
			<section className='bg-gradient-to-b from-[#FFF2ED] to-[#FEDBD0]/30 pt-16 pb-24 border-b border-gray-100'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<span className='inline-block text-xs font-bold uppercase tracking-widest text-[#FF3F1A] mb-3'>
						COURSE
					</span>
					<h1 className='text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E212C] font-heading max-w-4xl mx-auto leading-tight'>
						{currentCourse.title}
					</h1>
				</div>
			</section>

			{/* 2. ABOUT THE COURSE & SIDEBAR CARD */}
			<section className='py-20 bg-white relative'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
						{/* Left: About Text & Bullets */}
						<div className='lg:col-span-7 space-y-8'>
							<div>
								<h2 className='text-2xl sm:text-3xl font-black text-[#1E212C] font-heading mb-4'>
									About the course
								</h2>
								<p className='text-gray-600 leading-relaxed text-base'>
									{currentCourse.about}
								</p>
							</div>

							<div>
								<h3 className='text-xl font-bold text-[#1E212C] font-heading mb-4'>
									You will learn:
								</h3>
								<ul className='space-y-3'>
									{currentCourse.youWillLearn.map((item, idx) => (
										<li key={idx} className='flex items-start space-x-3 text-sm text-gray-700'>
											<span className='shrink-0 w-5 h-5 rounded-full bg-[#FF3F1A]/10 text-[#FF3F1A] flex items-center justify-center mt-0.5'>
												<Check className='w-3 h-3 stroke-[3]' />
											</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Right: Floating Sidebar Card */}
						<div className='lg:col-span-5'>
							<div className='sticky top-28 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6'>
								<div>
									<span className='text-xs font-bold text-gray-400 uppercase tracking-widest'>
										DATES
									</span>
									<p className='text-xl font-black text-[#FF3F1A] font-heading mt-0.5'>
										{currentCourse.dates}
									</p>
									<p className='text-xs text-gray-500 mt-1'>
										Metas, online seminars, feedback
									</p>
								</div>

								<div className='border-t border-gray-100 pt-4'>
									<span className='text-xs font-bold text-gray-400 uppercase tracking-widest'>
										DURATION
									</span>
									<p className='text-lg font-bold text-[#1E212C] font-heading mt-0.5'>
										{currentCourse.duration}
									</p>
									<p className='text-xs text-gray-500 mt-1'>
										Classes held twice a week with practical live mentoring
									</p>
								</div>

								<div className='border-t border-gray-100 pt-4'>
									<span className='text-xs font-bold text-gray-400 uppercase tracking-widest'>
										PRICE
									</span>
									<p className='text-2xl font-black text-[#FF3F1A] font-heading mt-0.5'>
										${currentCourse.pricePerMonth || currentCourse.price}{' '}
										<span className='text-sm text-gray-400 font-normal'>/ month</span>
									</p>
									<p className='text-xs text-gray-500 mt-1'>
										Flexible installment payments available at 0% APR
									</p>
								</div>

								<button
									type='button'
									onClick={handleScrollToRegister}
									className='w-full py-4 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200'
								>
									Join the course
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 3. CURATOR'S BIO */}
			<section className='py-20 bg-gray-50/70'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
						{/* Tutor Image on Yellow Background */}
						<div className='lg:col-span-5 flex justify-center'>
							<div className='relative w-full max-w-sm h-80 sm:h-96 bg-[#FFCF53] rounded-2xl overflow-hidden flex items-end justify-center shadow-lg'>
								<div className='absolute inset-0 flex items-center justify-center opacity-30'>
									<div className='w-64 h-64 rounded-full border-2 border-white' />
								</div>
								<img
									src={currentCourse.teacherImage}
									alt={currentCourse.teacher}
									className='relative z-10 w-full h-full object-cover object-top'
								/>
							</div>
						</div>

						{/* Tutor Details */}
						<div className='lg:col-span-7 space-y-5'>
							<div>
								<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
									COURSE CURATOR
								</span>
								<h2 className='text-3xl font-black text-[#1E212C] font-heading mt-1'>
									{currentCourse.teacher}
								</h2>
								<p className='text-sm text-gray-500 font-medium'>
									{currentCourse.teacherRole}
								</p>
							</div>

							{/* Rating & Counts */}
							<div className='flex flex-wrap items-center gap-6 text-xs text-gray-600 pt-2'>
								<div className='flex items-center space-x-1.5'>
									<Star className='w-4 h-4 text-amber-500 fill-amber-500' />
									<span className='font-bold text-[#1E212C]'>
										{currentCourse.rating} rating
									</span>
								</div>
								<div className='flex items-center space-x-1.5'>
									<BookOpen className='w-4 h-4 text-[#FF3F1A]' />
									<span>{currentCourse.coursesCount || 8} courses</span>
								</div>
								<div className='flex items-center space-x-1.5'>
									<Users className='w-4 h-4 text-[#5A87FC]' />
									<span>{currentCourse.studentsCount || 2000} students</span>
								</div>
							</div>

							<p className='text-sm text-gray-600 leading-relaxed'>
								{currentCourse.curatorBio}
							</p>

							{/* Social links */}
							<div className='flex items-center space-x-3 pt-2'>
								{['Facebook', 'Twitter', 'LinkedIn'].map((net) => (
									<a
										key={net}
										href={`#${net.toLowerCase()}`}
										className='px-3 py-1.5 text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded hover:border-[#FF3F1A] hover:text-[#FF3F1A] transition-colors'
									>
										{net}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 4. ONLINE LEARNING PROCESS */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
							MAIN STEPS
						</span>
						<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2'>
							Online learning process
						</h2>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
						{[
							{
								number: '01',
								title: 'Watching online video lectures',
								desc: 'Culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
							},
							{
								number: '02',
								title: 'Passing a test',
								desc: 'Anim id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita.',
							},
							{
								number: '03',
								title: "Curator's feedback",
								desc: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.',
							},
							{
								number: '04',
								title: 'Correction of mistakes',
								desc: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo.',
								isHighlighted: true,
							},
						].map((step, idx) => (
							<div
								key={idx}
								className={`p-6 rounded-xl border transition-all duration-300 relative ${
									step.isHighlighted
										? 'border-[#FF3F1A] bg-orange-50/30 shadow-md -translate-y-1'
										: 'border-gray-200 bg-white hover:shadow-md'
								}`}
							>
								{/* Step Number Circle */}
								<div
									className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg mb-6 ${
										step.isHighlighted
											? 'bg-[#FF3F1A] text-white shadow-md'
											: 'bg-gray-100 text-[#1E212C]'
									}`}
								>
									{step.number}
								</div>

								<h4 className='text-base font-bold text-[#1E212C] font-heading mb-2 leading-snug'>
									{step.title}
								</h4>
								<p className='text-xs text-gray-500 leading-relaxed'>
									{step.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 5. 20% DISCOUNT FOR EARLY BIRDS (COUNTDOWN BANNER) */}
			<section className='py-14 bg-gradient-to-r from-[#FFF2ED] via-[#FEDBD0] to-[#FFF2ED] border-y border-orange-200/60'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
						{/* Discount title & Timer */}
						<div className='space-y-4 text-center lg:text-left'>
							<h3 className='text-2xl sm:text-3xl font-black text-[#1E212C] font-heading'>
								20% discount for early birds!
							</h3>

							{/* Live Ticking Countdown Timer */}
							<div className='flex items-center justify-center lg:justify-start space-x-4'>
								{[
									{ label: 'Days', value: timeLeft.days },
									{ label: 'Hours', value: timeLeft.hours },
									{ label: 'Mins', value: timeLeft.minutes },
									{ label: 'Secs', value: timeLeft.seconds },
								].map((unit, i) => (
									<div key={i} className='text-center'>
										<span className='block text-2xl sm:text-3xl font-black text-[#1E212C] font-heading bg-white/70 px-3 py-1 rounded shadow-xs'>
											{String(unit.value).padStart(2, '0')}
										</span>
										<span className='text-[10px] uppercase font-bold text-gray-500 mt-1 block'>
											{unit.label}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Inline Form */}
						{discountSubmitted ? (
							<div className='flex items-center space-x-2 text-emerald-700 bg-white py-3 px-6 rounded-lg shadow-sm'>
								<CheckCircle className='w-5 h-5 text-emerald-500' />
								<span className='font-bold text-sm'>
									Discount reserved! We have sent a confirmation email.
								</span>
							</div>
						) : (
							<form
								onSubmit={handleDiscountSubmit}
								className='flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto'
							>
								<input
									type='text'
									required
									placeholder='Full name'
									value={discountForm.name}
									onChange={(e) =>
										setDiscountForm({ ...discountForm, name: e.target.value })
									}
									className='w-full sm:w-44 px-3.5 py-3 text-xs bg-white border border-gray-300 rounded focus:outline-none focus:border-[#FF3F1A]'
								/>
								<input
									type='email'
									required
									placeholder='Email'
									value={discountForm.email}
									onChange={(e) =>
										setDiscountForm({ ...discountForm, email: e.target.value })
									}
									className='w-full sm:w-44 px-3.5 py-3 text-xs bg-white border border-gray-300 rounded focus:outline-none focus:border-[#FF3F1A]'
								/>
								<input
									type='tel'
									required
									placeholder='Phone'
									value={discountForm.phone}
									onChange={(e) =>
										setDiscountForm({ ...discountForm, phone: e.target.value })
									}
									className='w-full sm:w-44 px-3.5 py-3 text-xs bg-white border border-gray-300 rounded focus:outline-none focus:border-[#FF3F1A]'
								/>
								<button
									type='submit'
									className='w-full sm:w-auto px-6 py-3 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold text-xs rounded shadow-sm hover:shadow transition-colors shrink-0'
								>
									Join the course
								</button>
							</form>
						)}
					</div>
				</div>
			</section>

			{/* 6. WHO WILL BENEFIT FROM THE COURSE */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
						{/* Left Column */}
						<div className='lg:col-span-5'>
							<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
								FOR WHOM?
							</span>
							<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2 leading-tight'>
								Who will benefit from the course:
							</h2>
						</div>

						{/* Right Column Target Groups */}
						<div className='lg:col-span-7 space-y-6'>
							{(currentCourse.whoIsFor || [
								'Specialists with experience in related areas (graphic design, web development, product management) looking to transition into UX.',
								'Beginning designers who want to systematize their knowledge and master a human-centered design approach.',
								'Product managers and business analysts who want to understand UX research and improve user satisfaction metrics.',
								'Anyone who wants to switch to the field of UX design and create intuitive digital products.',
							]).map((item, idx) => (
								<div key={idx} className='flex items-start space-x-4'>
									<div className='w-6 h-6 rounded-full bg-[#FF3F1A]/10 text-[#FF3F1A] flex items-center justify-center shrink-0 mt-0.5'>
										<Star className='w-3 h-3 fill-[#FF3F1A]' />
									</div>
									<p className='text-sm text-gray-700 leading-relaxed'>
										{item}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* 7. WHAT WILL YOU LEARN (PROGRAM ACCORDION) */}
			<section className='py-20 bg-gray-50/60'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='mb-12'>
						<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
							COURSE PROGRAM
						</span>
						<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2'>
							What will you learn
						</h2>
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
						{/* Accordion Left */}
						<div className='lg:col-span-7 space-y-4'>
							{(currentCourse.program || []).map((item, index) => {
								const isExpanded = expandedWeek === index
								return (
									<div
										key={index}
										className='bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs transition-all'
									>
										<button
											type='button'
											onClick={() =>
												setExpandedWeek(isExpanded ? null : index)
											}
											className='w-full p-5 text-left flex items-center justify-between hover:bg-gray-50/80 transition-colors'
										>
											<div className='flex items-center space-x-3'>
												<span className='text-[#FF3F1A] font-bold text-sm'>
													Week {item.week}.
												</span>
												<span className='font-bold text-[#1E212C] text-sm sm:text-base font-heading'>
													{item.title}
												</span>
											</div>
											<span className='text-[#FF3F1A] shrink-0 ml-2'>
												{isExpanded ? (
													<Minus className='w-5 h-5' />
												) : (
													<Plus className='w-5 h-5' />
												)}
											</span>
										</button>

										{isExpanded && (
											<div className='px-5 pb-5 pt-1 text-sm text-gray-600 border-t border-gray-100 animate-fadeIn leading-relaxed'>
												{item.content}
											</div>
										)}
									</div>
								)
							})}
						</div>

						{/* Right Illustration */}
						<div className='lg:col-span-5 flex justify-center sticky top-28'>
							<svg
								viewBox='0 0 400 400'
								className='w-full max-w-sm h-auto drop-shadow-md animate-float'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								{/* Desk plant & computer */}
								<rect x='60' y='280' width='280' height='10' rx='5' fill='#1E212C' />
								<circle cx='200' cy='200' r='140' fill='#03CEA4' fillOpacity='0.15' />

								{/* Student sitting */}
								<rect x='130' y='180' width='90' height='70' rx='6' fill='#5A87FC' />
								<circle cx='175' cy='120' r='26' fill='#FFCF53' />
								<path d='M150 160 C150 145 200 145 200 160' fill='#FF3F1A' />
								<path d='M150 200 L190 280 L160 280 Z' fill='#F52F6E' />

								{/* Plant in vase */}
								<rect x='280' y='240' width='30' height='40' rx='4' fill='#FFCF53' />
								<path d='M295 240 Q310 200 325 215' stroke='#03CEA4' strokeWidth='4' />
								<path d='M295 240 Q280 210 270 220' stroke='#03CEA4' strokeWidth='4' />
							</svg>
						</div>
					</div>
				</div>
			</section>

			{/* 8. TESTIMONIALS SLIDER */}
			<Testimonials />

			{/* 9. REGISTER FOR THE COURSE */}
			<section id='register-section' className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
						{/* Left Illustration */}
						<div className='lg:col-span-6 flex justify-center'>
							<svg
								viewBox='0 0 500 400'
								className='w-full max-w-md h-auto drop-shadow-lg'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<circle cx='250' cy='200' r='160' fill='#FEDBD0' fillOpacity='0.4' />
								<rect x='80' y='300' width='340' height='12' rx='6' fill='#1E212C' />

								{/* Desk and students discussing */}
								<rect x='160' y='180' width='120' height='90' rx='8' fill='#5A87FC' />
								<circle cx='130' cy='160' r='22' fill='#FFCF53' />
								<path d='M110 220 C110 190 150 190 150 220 L160 300 L100 300 Z' fill='#03CEA4' />

								<circle cx='340' cy='150' r='22' fill='#FFCF53' />
								<path d='M320 210 C320 180 360 180 360 210 L370 300 L310 300 Z' fill='#FF3F1A' />
							</svg>
						</div>

						{/* Right Form */}
						<div className='lg:col-span-6 space-y-6'>
							<div>
								<span className='text-xs font-bold uppercase tracking-widest text-[#FF3F1A]'>
									LEAVE A REQUEST NOW AND GET 20% OFF
								</span>
								<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2'>
									Register for the course
								</h2>
							</div>

							{regSubmitted ? (
								<div className='py-8 px-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-center space-y-2 animate-fadeIn'>
									<CheckCircle className='w-12 h-12 text-emerald-500 mx-auto' />
									<h4 className='text-lg font-bold'>Application Received!</h4>
									<p className='text-sm text-emerald-700'>
										Thank you! Our education specialist will call you shortly to confirm your seat and discount.
									</p>
								</div>
							) : (
								<form onSubmit={handleRegSubmit} className='space-y-4'>
									<div>
										<label className='block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1'>
											Full Name
										</label>
										<input
											type='text'
											required
											placeholder='Your full name'
											value={regForm.name}
											onChange={(e) =>
												setRegForm({ ...regForm, name: e.target.value })
											}
											className='w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A]'
										/>
									</div>

									<div>
										<label className='block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1'>
											Email
										</label>
										<input
											type='email'
											required
											placeholder='Your working email'
											value={regForm.email}
											onChange={(e) =>
												setRegForm({ ...regForm, email: e.target.value })
											}
											className='w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A]'
										/>
									</div>

									<div>
										<label className='block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1'>
											Phone
										</label>
										<input
											type='tel'
											required
											placeholder='Your phone number'
											value={regForm.phone}
											onChange={(e) =>
												setRegForm({ ...regForm, phone: e.target.value })
											}
											className='w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A]'
										/>
									</div>

									<button
										type='submit'
										className='w-full py-4 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-2'
									>
										Join the course
									</button>
								</form>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* 10. YOU MAY ALSO LIKE (SIMILAR COURSES) */}
			<section className='py-20 bg-gray-50/70'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-end justify-between mb-12'>
						<div>
							<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
								CHECK OTHER COURSES
							</span>
							<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2'>
								You may also like
							</h2>
						</div>

						{/* Slider arrow indicators */}
						<div className='flex items-center space-x-3'>
							<Link
								to='/courses'
								className='w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#FF3F1A] hover:text-white hover:border-[#FF3F1A] transition-colors'
								aria-label='Previous courses'
							>
								<ArrowLeft className='w-4 h-4' />
							</Link>
							<Link
								to='/courses'
								className='w-10 h-10 rounded-full bg-[#FF3F1A] text-white flex items-center justify-center hover:bg-[#E0320F] transition-colors'
								aria-label='Next courses'
							>
								<ArrowRight className='w-4 h-4' />
							</Link>
						</div>
					</div>

					{/* 2 Similar Course Cards */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
						{otherCourses.map((c) => (
							<CourseCard key={c.id} course={c} variant='horizontal' />
						))}
					</div>

					{/* Bottom Explore button */}
					<div className='text-center flex flex-col sm:flex-row items-center justify-center gap-4'>
						<span className='text-lg font-bold text-[#1E212C] font-heading'>
							Do you want more courses?
						</span>
						<Link
							to='/courses'
							className='px-8 py-3 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold text-sm rounded shadow-sm hover:shadow transition-all'
						>
							View all courses
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}
