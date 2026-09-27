import { useState } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { testimonials } from '../data/posts'

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0)

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
	}

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
	}

	const current = testimonials[currentIndex]

	return (
		<section className='py-20 bg-[#F4F5F7] relative overflow-hidden'>
			{/* Decorative elements */}
			<div className='absolute -left-10 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-gray-300/40 pointer-events-none' />
			<div className='absolute -right-10 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-gray-300/40 pointer-events-none' />

			<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
				{/* Section Header */}
				<div className='text-center mb-12'>
					<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
						TESTIMONIALS
					</span>
					<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2'>
						What our students say
					</h2>
				</div>

				{/* Slider Card Container */}
				<div className='relative flex items-center justify-center'>
					{/* Prev Button */}
					<button
						type='button'
						onClick={prevSlide}
						className='hidden sm:flex absolute -left-6 z-10 w-12 h-12 rounded-full bg-white shadow-md items-center justify-center text-gray-600 hover:bg-[#FF3F1A] hover:text-white transition-all duration-200'
						aria-label='Previous testimonial'
					>
						<ArrowLeft className='w-5 h-5' />
					</button>

					{/* Testimonial Card */}
					<div className='w-full max-w-3xl bg-white rounded-xl shadow-xl p-8 sm:p-12 relative transition-all duration-500'>
						{/* Large Quote Mark */}
						<div className='text-[#FF3F1A] mb-4 opacity-80'>
							<Quote className='w-10 h-10' />
						</div>

						{/* Quote Text */}
						<p className='text-gray-700 text-base sm:text-lg leading-relaxed mb-8'>
							"{current.quote}"
						</p>

						{/* Author Info */}
						<div className='flex items-center space-x-4'>
							<img
								src={current.image}
								alt={current.name}
								className='w-14 h-14 rounded-full object-cover border-2 border-white shadow'
							/>
							<div>
								<h4 className='text-base font-bold text-[#1E212C] font-heading'>
									{current.name}
								</h4>
								<p className='text-xs text-gray-500'>
									{current.position}
								</p>
							</div>
						</div>
					</div>

					{/* Next Button */}
					<button
						type='button'
						onClick={nextSlide}
						className='hidden sm:flex absolute -right-6 z-10 w-12 h-12 rounded-full bg-[#FF3F1A] text-white shadow-md items-center justify-center hover:bg-[#E0320F] transition-all duration-200'
						aria-label='Next testimonial'
					>
						<ArrowRight className='w-5 h-5' />
					</button>
				</div>

				{/* Dots & Mobile Controls */}
				<div className='flex items-center justify-center space-x-3 mt-8'>
					<button
						type='button'
						onClick={prevSlide}
						className='sm:hidden p-2 rounded-full bg-white shadow text-gray-600'
						aria-label='Previous slide'
					>
						<ArrowLeft className='w-4 h-4' />
					</button>

					<div className='flex space-x-2'>
						{testimonials.map((_, idx) => (
							<button
								key={idx}
								type='button'
								onClick={() => setCurrentIndex(idx)}
								className={`h-1.5 rounded-full transition-all duration-300 ${
									currentIndex === idx ? 'w-8 bg-[#424551]' : 'w-3 bg-gray-300 hover:bg-gray-400'
								}`}
								aria-label={`Go to slide ${idx + 1}`}
							/>
						))}
					</div>

					<button
						type='button'
						onClick={nextSlide}
						className='sm:hidden p-2 rounded-full bg-[#FF3F1A] text-white shadow'
						aria-label='Next slide'
					>
						<ArrowRight className='w-4 h-4' />
					</button>
				</div>
			</div>
		</section>
	)
}
