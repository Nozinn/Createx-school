import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function Newsletter() {
	const [email, setEmail] = useState('')
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		if (email) {
			setSubmitted(true)
			setTimeout(() => {
				setSubmitted(false)
				setEmail('')
			}, 3000)
		}
	}

	return (
		<section className='relative bg-gradient-to-b from-[#FFF2ED] to-[#FEDBD0] pt-20 pb-36 overflow-hidden'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
				<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
					DON'T MISS ANYTHING
				</span>
				<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2 mb-8 leading-tight'>
					Subscribe to the Createx School<br className='hidden sm:inline' /> announcements
				</h2>

				{submitted ? (
					<div className='flex items-center justify-center space-x-2 text-emerald-700 bg-white/80 backdrop-blur-xs py-4 px-6 rounded-lg max-w-md mx-auto shadow-md'>
						<CheckCircle2 className='w-5 h-5 text-emerald-600' />
						<span className='font-bold text-sm'>
							Thank you! You have successfully subscribed.
						</span>
					</div>
				) : (
					<form
						onSubmit={handleSubmit}
						className='flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto'
					>
						<input
							type='email'
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Your working email'
							className='w-full sm:flex-1 px-5 py-3.5 bg-white text-gray-800 placeholder-gray-400 text-sm rounded-lg border border-transparent focus:border-[#FF3F1A] focus:outline-none shadow-sm'
						/>
						<button
							type='submit'
							className='w-full sm:w-auto px-8 py-3.5 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shrink-0'
						>
							Subscribe
						</button>
					</form>
				)}
			</div>

			{/* Decorative Graduation Illustration along bottom */}
			<div className='absolute bottom-0 left-0 right-0 pointer-events-none flex justify-between items-end opacity-90 overflow-hidden'>
				{/* Left graduates side */}
				<svg
					className='w-72 sm:w-96 h-28 sm:h-36 text-[#FF3F1A]'
					viewBox='0 0 400 150'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					{/* Grad caps floating */}
					<polygon points='50,40 80,30 110,40 80,50' fill='#1E212C' />
					<rect x='78' y='48' width='4' height='15' fill='#FF3F1A' />
					<polygon points='180,25 210,15 240,25 210,35' fill='#5A87FC' />
					<rect x='208' y='33' width='4' height='15' fill='#FFCF53' />
					<polygon points='310,45 340,35 370,45 340,55' fill='#FF3F1A' />

					{/* Cheering hands & figures */}
					<path d='M20,150 Q40,90 60,150' fill='#FFCF53' />
					<path d='M70,150 Q90,75 110,150' fill='#5A87FC' />
					<path d='M120,150 Q145,85 170,150' fill='#03CEA4' />
					<path d='M180,150 Q205,70 230,150' fill='#FF3F1A' />
					<path d='M240,150 Q265,80 290,150' fill='#7772F1' />
					<path d='M300,150 Q325,75 350,150' fill='#F52F6E' />
					{/* Confetti */}
					<circle cx='95' cy='60' r='3' fill='#FF3F1A' />
					<circle cx='140' cy='40' r='2.5' fill='#FFCF53' />
					<circle cx='260' cy='30' r='3' fill='#03CEA4' />
					<circle cx='280' cy='50' r='2.5' fill='#7772F1' />
				</svg>

				{/* Right graduates side */}
				<svg
					className='w-72 sm:w-96 h-28 sm:h-36 text-[#FF3F1A]'
					viewBox='0 0 400 150'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					{/* Grad caps floating */}
					<polygon points='70,30 100,20 130,30 100,40' fill='#FF3F1A' />
					<rect x='98' y='38' width='4' height='15' fill='#1E212C' />
					<polygon points='200,40 230,30 260,40 230,50' fill='#03CEA4' />
					<rect x='228' y='48' width='4' height='15' fill='#FFCF53' />
					<polygon points='320,25 350,15 380,25 350,35' fill='#1E212C' />

					{/* Cheering hands & figures */}
					<path d='M50,150 Q75,75 100,150' fill='#F52F6E' />
					<path d='M110,150 Q135,80 160,150' fill='#7772F1' />
					<path d='M170,150 Q195,70 220,150' fill='#FFCF53' />
					<path d='M230,150 Q255,85 280,150' fill='#5A87FC' />
					<path d='M290,150 Q315,75 340,150' fill='#FF3F1A' />
					<path d='M350,150 Q375,90 400,150' fill='#03CEA4' />
					{/* Confetti */}
					<circle cx='120' cy='35' r='3' fill='#FFCF53' />
					<circle cx='170' cy='50' r='2.5' fill='#F52F6E' />
					<circle cx='290' cy='40' r='3' fill='#5A87FC' />
				</svg>
			</div>
		</section>
	)
}
