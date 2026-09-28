import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
	Check,
	Star,
	CalendarDays,
	Users,
	Clock,
	MapPin,
	CheckCircle,
	ArrowLeft,
	ArrowRight
} from 'lucide-react'
import { events } from '../../data/events'
import { formatPrice } from '../../utils/eventHelpers'
import EventCard from '../../components/EventCard'
import CountdownTimer from '../../components/CountdownTimer'

export default function Event() {
	const { id } = useParams()

	const currentEvent = useMemo(() => {
		if (id) {
			const found = events.find((e) => String(e.id) === String(id))
			if (found) return found
		}
		return events[0]
	}, [id])

	// Registration form state
	const [regForm, setRegForm] = useState({ name: '', email: '', phone: '' })
	const [regSubmitted, setRegSubmitted] = useState(false)

	const otherEvents = useMemo(
		() => events.filter((e) => e.id !== currentEvent.id).slice(0, 3),
		[currentEvent.id]
	)

	const handleScrollToRegister = () => {
		const element = document.getElementById('register-section')
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const handleRegSubmit = (e) => {
		e.preventDefault()
		setRegSubmitted(true)
		setTimeout(() => setRegSubmitted(false), 3000)
	}

	return (
		<div className='bg-white'>
			{/* 1. HERO WITH COUNTDOWN */}
			<section className='bg-gradient-to-b from-[#FFF2ED] to-[#FEDBD0]/30 pt-16 pb-16 border-b border-gray-100'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 ${currentEvent.badgeColor}`}>
						{currentEvent.category}
					</span>
					<h1 className='text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E212C] font-heading max-w-4xl mx-auto leading-tight mb-8'>
						{currentEvent.title}
					</h1>

					<p className='text-xs font-bold uppercase tracking-widest text-gray-500 mb-3'>
						Starts in
					</p>
					<div className='flex justify-center'>
						<CountdownTimer target={currentEvent.startDate} size='lg' />
					</div>
				</div>
			</section>

			{/* 2. WHAT YOU'LL LEARN & SIDEBAR */}
			<section className='py-20 bg-white relative'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
						{/* Left: About & bullets */}
						<div className='lg:col-span-7 space-y-8'>
							<div>
								<h2 className='text-2xl sm:text-3xl font-black text-[#1E212C] font-heading mb-4'>
									About the event
								</h2>
								<p className='text-gray-600 leading-relaxed text-base'>
									{currentEvent.about}
								</p>
							</div>

							<div>
								<h3 className='text-xl font-bold text-[#1E212C] font-heading mb-4'>
									What you will learn:
								</h3>
								<ul className='space-y-3'>
									{currentEvent.whatYouWillLearn.map((item, idx) => (
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

						{/* Right: Floating sidebar card */}
						<div className='lg:col-span-5'>
							<div className='sticky top-28 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-5'>
								<div className='flex items-start justify-between'>
									<div>
										<span className='text-xs font-bold text-gray-400 uppercase tracking-widest'>
											DATE & TIME
										</span>
										<p className='text-lg font-black text-[#1E212C] font-heading mt-0.5'>
											{currentEvent.day} {currentEvent.month}
										</p>
										<p className='text-xs text-gray-500 mt-1 flex items-center gap-1.5'>
											<Clock className='w-3.5 h-3.5 text-[#FF3F1A]' />
											{currentEvent.time}
										</p>
									</div>
									<CalendarDays className='w-8 h-8 text-[#FF3F1A]/30 shrink-0' />
								</div>

								<div className='border-t border-gray-100 pt-4'>
									<span className='text-xs font-bold text-gray-400 uppercase tracking-widest'>
										FORMAT & PLACE
									</span>
									<p className='text-sm font-bold text-[#1E212C] mt-0.5'>
										{currentEvent.format}
									</p>
									<p className='text-xs text-gray-500 mt-1 flex items-center gap-1.5'>
										<MapPin className='w-3.5 h-3.5 text-[#FF3F1A]' />
										{currentEvent.location}
									</p>
								</div>

								<div className='border-t border-gray-100 pt-4'>
									<span className='text-xs font-bold text-gray-400 uppercase tracking-widest'>
										PRICE
									</span>
									<p className='text-2xl font-black text-[#FF3F1A] font-heading mt-0.5'>
										{formatPrice(currentEvent.price)}
									</p>
									<p className='text-xs text-gray-500 mt-1'>
										{currentEvent.seatsLeft} seats left
									</p>
								</div>

								<button
									type='button'
									onClick={handleScrollToRegister}
									className='w-full py-4 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200'
								>
									Register for this event
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 3. SPEAKER */}
			<section className='py-20 bg-gray-50/70'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
						{/* Speaker photo on colored background */}
						<div className='lg:col-span-5 flex justify-center'>
							<div className={`relative w-full max-w-sm h-80 sm:h-96 ${currentEvent.iconBg} rounded-2xl overflow-hidden flex items-end justify-center shadow-lg`}>
								<div className='absolute inset-0 flex items-center justify-center opacity-20'>
									<div className='w-64 h-64 rounded-full border-2 border-white' />
								</div>
								<img
									src={currentEvent.speaker.image}
									alt={currentEvent.speaker.name}
									className='relative z-10 w-full h-full object-cover object-top'
								/>
							</div>
						</div>

						{/* Speaker details */}
						<div className='lg:col-span-7 space-y-5'>
							<div>
								<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
									YOUR SPEAKER
								</span>
								<h2 className='text-3xl font-black text-[#1E212C] font-heading mt-1'>
									{currentEvent.speaker.name}
								</h2>
								<p className='text-sm text-gray-500 font-medium'>
									{currentEvent.speaker.role}
								</p>
							</div>

							<div className='flex flex-wrap items-center gap-6 text-xs text-gray-600 pt-2'>
								<div className='flex items-center space-x-1.5'>
									<Star className='w-4 h-4 text-amber-500 fill-amber-500' />
									<span className='font-bold text-[#1E212C]'>
										{currentEvent.speaker.rating} rating
									</span>
								</div>
								<div className='flex items-center space-x-1.5'>
									<CalendarDays className='w-4 h-4 text-[#FF3F1A]' />
									<span>{currentEvent.speaker.eventsCount} events hosted</span>
								</div>
								<div className='flex items-center space-x-1.5'>
									<Users className='w-4 h-4 text-[#5A87FC]' />
									<span>{currentEvent.speaker.studentsCount} students</span>
								</div>
							</div>

							<p className='text-sm text-gray-600 leading-relaxed'>
								{currentEvent.speaker.bio}
							</p>

							<div className='flex items-center space-x-3 pt-2'>
								{['Facebook', 'Twitter', 'LinkedIn'].map((net) => (
									<a
										key={net}
										href='#'
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

			{/* 4. WHO IS THIS EVENT FOR */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
						{/* Left: target groups */}
						<div className='lg:col-span-7 space-y-6'>
							<div>
								<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
									FOR WHOM?
								</span>
								<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2 mb-8 leading-tight'>
									Who this event is for
								</h2>
							</div>

							<div className='space-y-6'>
								{currentEvent.whoIsFor.map((item, idx) => (
									<div key={idx} className='flex items-start space-x-4'>
										<div className='w-6 h-6 rounded-full bg-[#FF3F1A]/10 text-[#FF3F1A] flex items-center justify-center shrink-0 mt-0.5'>
											<Star className='w-3 h-3 fill-[#FF3F1A]' />
										</div>
										<div>
											<p className='text-sm font-bold text-[#1E212C] mb-0.5'>
												{item.title}
											</p>
											<p className='text-sm text-gray-600 leading-relaxed'>
												{item.text}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Right illustration */}
						<div className='lg:col-span-5 flex justify-center'>
							<svg
								viewBox='0 0 400 400'
								className='w-full max-w-sm h-auto drop-shadow-md animate-float'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<circle cx='200' cy='200' r='150' fill='#FEDBD0' fillOpacity='0.4' />
								<rect x='70' y='300' width='260' height='10' rx='5' fill='#1E212C' />

								{/* Two people around a shared laptop, discussing the event */}
								<rect x='150' y='220' width='100' height='60' rx='6' fill='#5A87FC' />
								<circle cx='110' cy='150' r='24' fill='#FFCF53' />
								<path d='M85 195 C85 175 135 175 135 195 L145 280 L95 280 Z' fill='#03CEA4' />

								<circle cx='300' cy='140' r='24' fill='#FFCF53' />
								<path d='M275 185 C275 165 325 165 325 185 L335 280 L285 280 Z' fill='#FF3F1A' />

								{/* Speech bubble */}
								<path d='M225 90 h70 a10 10 0 0 1 10 10 v30 a10 10 0 0 1 -10 10 h-45 l-15 15 v-15 h-10 a10 10 0 0 1 -10 -10 v-30 a10 10 0 0 1 10 -10 z' fill='#7772F1' />
							</svg>
						</div>
					</div>
				</div>
			</section>

			{/* 5. PROMO BANNER (SEATS LIMITED) */}
			<section className='py-14 bg-gradient-to-r from-[#FFF2ED] via-[#FEDBD0] to-[#FFF2ED] border-y border-orange-200/60'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left'>
						<div>
							<h3 className='text-2xl sm:text-3xl font-black text-[#1E212C] font-heading mb-2'>
								Only {currentEvent.seatsLeft} seats left
							</h3>
							<p className='text-sm text-gray-600 max-w-lg'>
								Secure your spot now — registration closes as soon as the event fills up or the countdown reaches zero.
							</p>
						</div>
						<button
							type='button'
							onClick={handleScrollToRegister}
							className='px-8 py-3.5 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 shrink-0'
						>
							Reserve my seat
						</button>
					</div>
				</div>
			</section>

			{/* 6. REGISTRATION FORM */}
			<section id='register-section' className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
						{/* Illustration */}
						<div className='lg:col-span-6 flex justify-center'>
							<svg
								viewBox='0 0 500 400'
								className='w-full max-w-md h-auto drop-shadow-lg'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<circle cx='250' cy='200' r='160' fill='#FEDBD0' fillOpacity='0.4' />
								<rect x='80' y='300' width='340' height='12' rx='6' fill='#1E212C' />

								<rect x='170' y='190' width='160' height='100' rx='8' fill='#03CEA4' fillOpacity='0.85' />
								<circle cx='200' cy='170' r='22' fill='#FFCF53' />
								<path d='M180 225 C180 200 220 200 220 225 L230 300 L170 300 Z' fill='#5A87FC' />

								{/* Ticket / calendar icon floating above */}
								<rect x='290' y='110' width='90' height='60' rx='8' fill='#FF3F1A' />
								<circle cx='335' cy='140' r='14' fill='white' fillOpacity='0.9' />
								<rect x='305' y='125' width='14' height='30' rx='3' fill='white' fillOpacity='0.6' />
							</svg>
						</div>

						{/* Form */}
						<div className='lg:col-span-6 space-y-6'>
							<div>
								<span className='text-xs font-bold uppercase tracking-widest text-[#FF3F1A]'>
									{formatPrice(currentEvent.price) === 'Free' ? 'FREE — LIMITED SEATS' : 'SECURE YOUR SEAT'}
								</span>
								<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2'>
									Register for the event
								</h2>
							</div>

							{regSubmitted ? (
								<div className='py-8 px-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-center space-y-2 animate-fadeIn'>
									<CheckCircle className='w-12 h-12 text-emerald-500 mx-auto' />
									<h4 className='text-lg font-bold'>Registration received!</h4>
									<p className='text-sm text-emerald-700'>
										Thank you! We have sent the event details and a calendar invite to your email.
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
											onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
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
											onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
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
											onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
											className='w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A]'
										/>
									</div>

									<button
										type='submit'
										className='w-full py-4 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-2'
									>
										Register now
									</button>
								</form>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* 7. YOU MIGHT BE INTERESTED */}
			<section className='py-20 bg-gray-50/70'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-end justify-between mb-12'>
						<div>
							<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
								MORE TO EXPLORE
							</span>
							<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2'>
								You might be interested in
							</h2>
						</div>

						<div className='hidden sm:flex items-center space-x-3'>
							<Link
								to='/events'
								className='w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#FF3F1A] hover:text-white hover:border-[#FF3F1A] transition-colors'
								aria-label='See all events'
							>
								<ArrowLeft className='w-4 h-4' />
							</Link>
							<Link
								to='/events/grid'
								className='w-10 h-10 rounded-full bg-[#FF3F1A] text-white flex items-center justify-center hover:bg-[#E0320F] transition-colors'
								aria-label='See all events in grid view'
							>
								<ArrowRight className='w-4 h-4' />
							</Link>
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
						{otherEvents.map((ev) => (
							<EventCard key={ev.id} event={ev} variant='grid' />
						))}
					</div>

					<div className='text-center flex flex-col sm:flex-row items-center justify-center gap-4'>
						<span className='text-lg font-bold text-[#1E212C] font-heading'>
							Do you want more events?
						</span>
						<Link
							to='/events'
							className='px-8 py-3 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold text-sm rounded shadow-sm hover:shadow transition-all'
						>
							View all events
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}
