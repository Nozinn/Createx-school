import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { events } from '../../data/events'
import { filterAndSortEvents, paginate } from '../../utils/eventHelpers'
import EventCard from '../../components/EventCard'
import EventFilters from '../../components/EventFilters'
import Pagination from '../../components/Pagination'
import Newsletter from '../../components/Newsletter'

export default function Events() {
	const [searchParams, setSearchParams] = useSearchParams()

	const category = searchParams.get('category') || 'All'
	const sort = searchParams.get('sort') || 'upcoming'
	const search = searchParams.get('q') || ''
	const perPage = Number(searchParams.get('perPage')) || 6
	const page = Number(searchParams.get('page')) || 1

	const filtered = useMemo(
		() => filterAndSortEvents(events, { category, search, sort }),
		[category, search, sort]
	)

	const { items, totalPages, total } = paginate(filtered, page, perPage)

	const resetFilters = () => setSearchParams({})

	return (
		<div className='bg-white'>
			{/* 1. Header */}
			<section className='pt-16 pb-12 bg-gradient-to-b from-[#FFF2ED] to-[#FEDBD0]/30 border-b border-gray-100'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
						Our events
					</span>
					<h1 className='text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E212C] font-heading mt-2'>
						Lectures, workshops & master-classes
					</h1>
				</div>
			</section>

			{/* 2. Filters & list */}
			<section className='py-16'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<EventFilters />

					<p className='text-xs sm:text-sm text-gray-500 font-medium mt-6 mb-4'>
						{total === 0
							? 'No events found'
							: `Showing ${items.length ? (page - 1) * perPage + 1 : 0}–${(page - 1) * perPage + items.length} of ${total} events`}
					</p>

					{items.length === 0 ? (
						<div className='text-center py-24'>
							<p className='text-lg text-gray-500'>
								No events match your filters right now.
							</p>
							<button
								type='button'
								onClick={resetFilters}
								className='mt-4 text-sm font-bold text-[#FF3F1A] hover:underline'
							>
								Reset all filters
							</button>
						</div>
					) : (
						<div className='space-y-4'>
							{items.map((event) => (
								<EventCard key={event.id} event={event} variant='list' />
							))}
						</div>
					)}

					<Pagination page={page} totalPages={totalPages} />
				</div>
			</section>

			{/* 3. Newsletter */}
			<Newsletter />
		</div>
	)
}
