import { Link } from 'react-router-dom'
import { monthFull } from '../utils/eventHelpers'

// Matches the "event/list" component from the Figma file (node 2313:4374): a
// plain white row/card with border-gray-300, 4px radius, big orange day number
// next to a stacked month + time, a plain-text category line under the title,
// and a "View more" button that fills solid orange on hover (captured as the
// mockup's own hover-state instance).
export default function EventCard({ event, variant = 'list' }) {
	if (variant === 'grid') {
		return (
			<Link
				to={`/events/${event.id}`}
				className='group bg-white rounded border border-[#E5E8ED] p-6 flex flex-col gap-5 hover:shadow-[0px_30px_24px_-10px_rgba(154,156,165,0.08)] hover:border-[#FF3F1A]/40 transition-all duration-300'
			>
				<div className='flex items-baseline gap-3'>
					<span className='text-4xl font-black font-heading text-[#FF3F1A] leading-none'>
						{event.day}
					</span>
					<div className='flex flex-col gap-0.5'>
						<span className='text-base font-bold text-[#1E212C] font-heading leading-none'>
							{monthFull(event.month)}
						</span>
						<span className='text-xs text-gray-500'>{event.time}</span>
					</div>
				</div>

				<div>
					<h3 className='text-base font-bold text-[#1E212C] font-heading line-clamp-2 leading-snug mb-1.5 group-hover:text-[#FF3F1A] transition-colors'>
						{event.title}
					</h3>
					<p className='text-sm text-gray-500'>{event.category}</p>
				</div>

				<span className='mt-auto w-full text-center py-2.5 border border-[#FF3F1A] text-[#FF3F1A] group-hover:bg-[#FF3F1A] group-hover:text-white font-bold text-sm rounded transition-colors'>
					View more
				</span>
			</Link>
		)
	}

	// Default: horizontal list row
	return (
		<div className='group bg-white rounded border border-[#E5E8ED] p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-6 hover:shadow-[0px_30px_24px_-10px_rgba(154,156,165,0.08)] transition-shadow duration-300'>
			{/* Date & Time */}
			<div className='flex items-baseline gap-4 shrink-0 md:w-44'>
				<span className='text-4xl sm:text-5xl font-black font-heading text-[#FF3F1A] leading-none'>
					{event.day}
				</span>
				<div className='flex flex-col gap-0.5'>
					<span className='text-lg font-bold text-[#1E212C] font-heading leading-none'>
						{monthFull(event.month)}
					</span>
					<span className='text-sm text-gray-500'>{event.time}</span>
				</div>
			</div>

			{/* Title & category */}
			<div className='flex-1 min-w-0'>
				<h4 className='text-lg font-bold text-[#1E212C] font-heading mb-1 leading-snug group-hover:text-[#FF3F1A] transition-colors'>
					{event.title}
				</h4>
				<p className='text-sm text-gray-500'>{event.category}</p>
			</div>

			{/* Action */}
			<Link
				to={`/events/${event.id}`}
				className='px-10 py-3 border border-[#FF3F1A] text-[#FF3F1A] hover:bg-[#FF3F1A] hover:text-white font-bold text-sm rounded transition-colors shrink-0 text-center'
			>
				View more
			</Link>
		</div>
	)
}
