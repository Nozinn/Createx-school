import { useSearchParams, Link, useLocation } from 'react-router-dom'
import { Search, List, LayoutGrid, ChevronDown } from 'lucide-react'
import { eventCategories } from '../data/events'
import { SORT_OPTIONS, PER_PAGE_OPTIONS } from '../utils/eventHelpers'

// Filter toolbar shared by the Events List and Events Grid pages, matching the
// Figma toolbar (node 2313:4374): "Event category" / "Sort by" / "Show N events
// per page" labeled selects, a search field, and a list/grid view switcher.
// State lives in the URL, so switching between /events and /events/grid keeps
// the same filters.
export default function EventFilters() {
	const [searchParams, setSearchParams] = useSearchParams()
	const location = useLocation()

	const category = searchParams.get('category') || 'All'
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

	const selectClass =
		'appearance-none pl-3.5 pr-9 py-2.5 text-sm text-[#424551] border border-gray-300 rounded focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors'

	return (
		<div className='bg-white rounded border border-gray-200 p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
			<div className='flex flex-wrap items-center gap-x-8 gap-y-4'>
				{/* Category */}
				<div className='flex items-center gap-3'>
					<label className='text-sm font-bold text-[#424551] whitespace-nowrap'>
						Event category
					</label>
					<div className='relative'>
						<select
							value={category}
							onChange={(e) => update('category', e.target.value)}
							className={selectClass}
						>
							<option value='All'>all themes</option>
							{eventCategories.map((c) => (
								<option key={c} value={c}>
									{c}
								</option>
							))}
						</select>
						<ChevronDown className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
					</div>
				</div>

				{/* Sort */}
				<div className='flex items-center gap-3'>
					<label className='text-sm font-bold text-[#424551] whitespace-nowrap'>
						Sort by
					</label>
					<div className='relative'>
						<select
							value={sort}
							onChange={(e) => update('sort', e.target.value)}
							className={selectClass}
						>
							{SORT_OPTIONS.map((opt) => (
								<option key={opt.value} value={opt.value}>
									{opt.label}
								</option>
							))}
						</select>
						<ChevronDown className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
					</div>
				</div>

				{/* Per page */}
				<div className='flex items-center gap-3'>
					<label className='text-sm font-bold text-[#424551] whitespace-nowrap'>
						Show
					</label>
					<div className='relative'>
						<select
							value={perPage}
							onChange={(e) => update('perPage', e.target.value)}
							className={`${selectClass} w-[72px] pr-8`}
						>
							{PER_PAGE_OPTIONS.map((n) => (
								<option key={n} value={n}>
									{n}
								</option>
							))}
						</select>
						<ChevronDown className='pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
					</div>
					<span className='text-sm text-gray-500 whitespace-nowrap'>events per page</span>
				</div>
			</div>

			<div className='flex items-center gap-4'>
				{/* Search */}
				<div className='relative w-full sm:w-64'>
					<input
						type='text'
						value={search}
						onChange={(e) => update('q', e.target.value)}
						placeholder='Search event...'
						className='w-full pl-4 pr-10 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors'
					/>
					<Search className='absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
				</div>

				{/* View switcher */}
				<div className='flex items-center gap-3 shrink-0'>
					<Link
						to={`/events?${searchParams.toString()}`}
						aria-label='List view'
						className={`transition-colors ${!isGrid ? 'text-[#FF3F1A]' : 'text-gray-400 hover:text-[#424551]'}`}
					>
						<List className='w-5 h-5' />
					</Link>
					<Link
						to={`/events/grid?${searchParams.toString()}`}
						aria-label='Grid view'
						className={`transition-colors ${isGrid ? 'text-[#FF3F1A]' : 'text-gray-400 hover:text-[#424551]'}`}
					>
						<LayoutGrid className='w-5 h-5' />
					</Link>
				</div>
			</div>
		</div>
	)
}
