import { Link } from 'react-router-dom'

export default function CourseCard({ course, variant = 'vertical' }) {
	const categoryColors = {
		'Marketing': 'bg-[#03CEA4] text-white',
		'Management': 'bg-[#5A87FC] text-white',
		'HR & Recruting': 'bg-[#F89828] text-white',
		'Design': 'bg-[#F52F6E] text-white',
		'Development': 'bg-[#7772F1] text-white',
	}

	const badgeClass = categoryColors[course.category] || 'bg-gray-800 text-white'

	if (variant === 'horizontal') {
		return (
			<Link
				to={`/courses/${course.id}`}
				className='group bg-white rounded-xl border border-[#E5E8ED] overflow-hidden flex flex-col sm:flex-row hover:shadow-xl hover:border-[#FF3F1A]/30 hover:-translate-y-1 transition-all duration-300'
			>
				{/* Image with warm yellow circle background */}
				<div className='relative w-full sm:w-56 h-52 shrink-0 bg-[#FFCF53] flex items-end justify-center overflow-hidden'>
					<div className='absolute inset-0 flex items-center justify-center opacity-30'>
						<div className='w-44 h-44 rounded-full border-2 border-white' />
						<div className='absolute w-32 h-32 rounded-full border-2 border-white' />
					</div>
					<img
						src={course.teacherImage}
						alt={course.teacher}
						className='relative z-10 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105'
						loading='lazy'
					/>
				</div>

				{/* Card Body */}
				<div className='p-6 flex flex-col justify-between flex-1'>
					<div>
						<span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded mb-3 tracking-wide ${badgeClass}`}>
							{course.category}
						</span>
						<h3 className='text-lg font-bold text-[#1E212C] font-heading line-clamp-2 group-hover:text-[#FF3F1A] transition-colors leading-snug mb-3'>
							{course.title}
						</h3>
					</div>

					<div className='pt-3 border-t border-gray-100 flex items-baseline space-x-2 text-sm'>
						<span className='text-lg font-black text-[#FF3F1A]'>
							${course.price}
						</span>
						<span className='text-gray-400'>|</span>
						<span className='text-gray-600 font-medium'>
							by {course.teacher}
						</span>
					</div>
				</div>
			</Link>
		)
	}

	// Default: Vertical Card (matches Photo 2 catalog grid)
	return (
		<Link
			to={`/courses/${course.id}`}
			className='group bg-white rounded-xl border border-[#E5E8ED] overflow-hidden flex flex-col hover:shadow-xl hover:border-[#FF3F1A]/30 hover:-translate-y-1.5 transition-all duration-300'
		>
			{/* Top Yellow Portrait Background */}
			<div className='relative w-full h-64 bg-[#FFCF53] flex items-end justify-center overflow-hidden'>
				<div className='absolute inset-0 flex items-center justify-center opacity-30'>
					<div className='w-56 h-56 rounded-full border-2 border-white' />
					<div className='absolute w-40 h-40 rounded-full border-2 border-white' />
				</div>
				<img
					src={course.teacherImage}
					alt={course.teacher}
					className='relative z-10 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105'
					loading='lazy'
				/>
			</div>

			{/* Bottom Details */}
			<div className='p-6 flex flex-col justify-between flex-1 space-y-4'>
				<div>
					<span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded mb-3 tracking-wide ${badgeClass}`}>
						{course.category}
					</span>
					<h3 className='text-lg font-bold text-[#1E212C] font-heading line-clamp-2 group-hover:text-[#FF3F1A] transition-colors leading-snug'>
						{course.title}
					</h3>
				</div>

				<div className='pt-3 border-t border-gray-100 flex items-baseline space-x-2 text-sm'>
					<span className='text-lg font-black text-[#FF3F1A]'>
						${course.price}
					</span>
					<span className='text-gray-400'>|</span>
					<span className='text-gray-600 font-medium'>
						by {course.teacher}
					</span>
				</div>
			</div>
		</Link>
	)
}
