import { useSearchParams, Link, useLocation } from 'react-router-dom'
import { Search, List, LayoutGrid } from 'lucide-react'
import { eventCategories } from '../data/events'
import { SORT_OPTIONS, PER_PAGE_OPTIONS } from '../utils/eventHelpers'

// Filter bar shared by the Events List and Events Grid pages. State lives in the
// URL (search params), so switching between /events and /events/grid keeps the
// same category, format, sort, search and page-size selection.
export default function EventFilters() {
	const [searchParams, setSearchParams] = useSearchParams()
	const location = useLocation()

	const category = searchParams.get('category') || 'All'
	const format = searchParams.get('format') || 'All'
	const sort = searchParams.get('sort') || 'upcoming'
	const search = searchParams.get('q') || ''
	const perPage = searchParams.get('perPage') || '6'

	const isGrid = location.pathname === '/events/grid'

	const update = (key, value) => {
		const next = new URLSearchParams(searchParams)
		if (value && value !== 'All') {
			next.set(key, value)
		} else {
			next.delete(key)
		}
		next.delete('page')
		setSearchParams(next)
	}

	return (
		<div className='bg-white rounded-xl border border-gray-200 shadow-xs p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center gap-4'>
			{/* Category */}
			<select
				value={category}
				onChange={(e) => update('category', e.target.value)}
				className='w-full lg:w-auto px-3.5 py-2.5 text-xs sm:text-sm font-medium border border-gray-300 rounded-lg text-[#424551] focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors'
			>
				<option value='All'>All categories</option>
				{eventCategories.map((c) => (
					<option key={c} value={c}>
						{c}
					</option>
				))}
			</select>

			{/* Format */}
			<select
				value={format}
				onChange={(e) => update('format', e.target.value)}
				className='w-full lg:w-auto px-3.5 py-2.5 text-xs sm:text-sm font-medium border border-gray-300 rounded-lg text-[#424551] focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors'
			>
				<option value='All'>Online & Offline</option>
				<option value='Online'>Online</option>
				<option value='Offline'>Offline</option>
			</select>

			{/* Sort */}
			<select
				value={sort}
				onChange={(e) => update('sort', e.target.value)}
				className='w-full lg:w-auto px-3.5 py-2.5 text-xs sm:text-sm font-medium border border-gray-300 rounded-lg text-[#424551] focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors'
			>
				{SORT_OPTIONS.map((opt) => (
					<option key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>

			{/* Per page */}
			<select
				value={perPage}
				onChange={(e) => update('perPage', e.target.value)}
				className='w-full lg:w-auto px-3.5 py-2.5 text-xs sm:text-sm font-medium border border-gray-300 rounded-lg text-[#424551] focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors'
			>
				{PER_PAGE_OPTIONS.map((n) => (
					<option key={n} value={n}>
						{n} per page
					</option>
				))}
			</select>

			{/* Search */}
			<div className='relative w-full lg:flex-1 lg:min-w-[180px]'>
				<input
					type='text'
					value={search}
					onChange={(e) => update('q', e.target.value)}
					placeholder='Search events...'
					className='w-full pl-4 pr-10 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors'
				/>
				<Search className='absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
			</div>

			{/* View switcher */}
			<div className='flex items-center gap-1.5 shrink-0 bg-gray-100 rounded-lg p-1 self-start lg:self-auto'>
				<Link
					to={`/events?${searchParams.toString()}`}
					aria-label='List view'
					className={`p-2 rounded-md transition-colors ${
						!isGrid ? 'bg-white text-[#FF3F1A] shadow-xs' : 'text-gray-400 hover:text-[#424551]'
					}`}
				>
					<List className='w-4 h-4' />
				</Link>
				<Link
					to={`/events/grid?${searchParams.toString()}`}
					aria-label='Grid view'
					className={`p-2 rounded-md transition-colors ${
						isGrid ? 'bg-white text-[#FF3F1A] shadow-xs' : 'text-gray-400 hover:text-[#424551]'
					}`}
				>
					<LayoutGrid className='w-4 h-4' />
				</Link>
			</div>
		</div>
	)
}
