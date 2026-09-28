import { Link } from 'react-router-dom'
import { Clock, MapPin, ArrowRight, Calendar } from 'lucide-react'
import { formatPrice } from '../utils/eventHelpers'

export default function EventCard({ event, variant = 'list' }) {
	if (variant === 'grid') {
		return (
			<Link
				to={`/events/${event.id}`}
				className='group bg-white rounded-xl border border-[#E5E8ED] overflow-hidden flex flex-col hover:shadow-xl hover:border-[#FF3F1A]/30 hover:-translate-y-1.5 transition-all duration-300'
			>
				{/* Colored date panel, echoes the yellow photo panel on course cards */}
				<div className={`relative w-full h-36 ${event.iconBg} flex flex-col items-center justify-center overflow-hidden`}>
					<div className='absolute inset-0 flex items-center justify-center opacity-20'>
						<div className='w-40 h-40 rounded-full border-2 border-white' />
						<div className='absolute w-28 h-28 rounded-full border-2 border-white' />
					</div>
					<Calendar className='absolute top-4 right-4 w-5 h-5 text-white/70' />
					<span className='relative z-10 text-4xl font-black font-heading text-white leading-none'>
						{event.day}
					</span>
					<span className='relative z-10 text-sm font-bold uppercase tracking-widest text-white/90 mt-1'>
						{event.month}
					</span>
				</div>

				{/* Bottom details */}
				<div className='p-6 flex flex-col justify-between flex-1 space-y-4'>
					<div>
						<span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded mb-3 tracking-wide ${event.badgeColor}`}>
							{event.category}
						</span>
						<h3 className='text-base font-bold text-[#1E212C] font-heading line-clamp-2 group-hover:text-[#FF3F1A] transition-colors leading-snug'>
							{event.title}
						</h3>
					</div>

					<div className='space-y-2 text-xs text-gray-500'>
						<div className='flex items-center space-x-1.5'>
							<Clock className='w-3.5 h-3.5 text-[#FF3F1A] shrink-0' />
							<span>{event.time}</span>
						</div>
						<div className='flex items-center space-x-1.5'>
							<MapPin className='w-3.5 h-3.5 text-[#FF3F1A] shrink-0' />
							<span className='truncate'>{event.location}</span>
						</div>
					</div>

					<div className='pt-3 border-t border-gray-100 flex items-center justify-between'>
						<span className='text-sm font-black text-[#FF3F1A]'>
							{formatPrice(event.price)}
						</span>
						<span className='inline-flex items-center space-x-1 text-xs font-bold text-[#424551] group-hover:text-[#FF3F1A] transition-colors'>
							<span>Learn more</span>
							<ArrowRight className='w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform' />
						</span>
					</div>
				</div>
			</Link>
		)
	}

	// Default: horizontal list row (builds on the home-page events teaser layout)
	return (
		<div className='group bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-gray-100 flex flex-col md:flex-row md:items-center gap-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF3F1A]/30'>
			{/* Date & Time */}
			<div className='flex items-center space-x-5 shrink-0'>
				<div className={`w-16 h-16 rounded-xl ${event.iconBg} flex flex-col items-center justify-center shrink-0 shadow-sm`}>
					<span className='text-xl font-black font-heading text-white leading-none'>
						{event.day}
					</span>
					<span className='text-[10px] font-bold uppercase tracking-widest text-white/90 mt-0.5'>
						{event.month}
					</span>
				</div>
				<div className='text-xs text-gray-500 font-medium pl-4 border-l border-gray-200 space-y-1.5 hidden sm:block'>
					<div className='flex items-center space-x-1.5'>
						<Clock className='w-3.5 h-3.5 text-[#FF3F1A]' />
						<span>{event.time}</span>
					</div>
					<div className='flex items-center space-x-1.5'>
						<MapPin className='w-3.5 h-3.5 text-[#FF3F1A]' />
						<span>{event.location}</span>
					</div>
				</div>
			</div>

			{/* Title, category & description */}
			<div className='flex-1 min-w-0'>
				<span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded mb-2 ${event.badgeColor}`}>
					{event.category}
				</span>
				<h4 className='text-base font-bold text-[#1E212C] font-heading mb-1.5 group-hover:text-[#FF3F1A] transition-colors leading-snug'>
					{event.title}
				</h4>
				<p className='text-xs text-gray-500 leading-relaxed line-clamp-2'>
					{event.description}
				</p>
				<div className='flex items-center space-x-1.5 text-xs text-gray-500 mt-2 sm:hidden'>
					<Clock className='w-3.5 h-3.5 text-[#FF3F1A]' />
					<span>{event.time}</span>
				</div>
			</div>

			{/* Price & Action */}
			<div className='flex md:flex-col items-center md:items-end justify-between md:justify-center gap-3 shrink-0'>
				<span className='text-sm font-black text-[#FF3F1A]'>
					{formatPrice(event.price)}
				</span>
				<Link
					to={`/events/${event.id}`}
					className='px-6 py-2.5 border border-[#FF3F1A] text-[#FF3F1A] hover:bg-[#FF3F1A] hover:text-white font-bold text-xs rounded transition-colors shrink-0'
				>
					Learn more
				</Link>
			</div>
		</div>
	)
}
