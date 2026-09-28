import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ChevronDown, Search } from 'lucide-react'
import { blogCategories, blogPosts, blogTypes, typeIcon } from './blogPosts'
import PostCard from './PostCard'
import BlogSubscribe from './BlogSubscribe'

const PER_PAGE = 8

// Each page follows the Figma rhythm: 3 cards, then a wide + a regular card, then 3 cards
const spanByIndex = [
	'lg:col-span-4',
	'lg:col-span-4',
	'lg:col-span-4',
	'lg:col-span-7',
	'lg:col-span-5',
	'lg:col-span-4',
	'lg:col-span-4',
	'lg:col-span-4',
]

export default function Blog() {
	const [searchParams, setSearchParams] = useSearchParams()

	const type = searchParams.get('type') || 'all'
	const category = searchParams.get('category') || 'all'
	const search = searchParams.get('q') || ''
	const page = Number(searchParams.get('page')) || 1

	const updateParam = (key, value) => {
		const next = new URLSearchParams(searchParams)
		if (!value || value === 'all') next.delete(key)
		else next.set(key, value)
		if (key !== 'page') next.delete('page')
		setSearchParams(next, { replace: key === 'q' })
	}

	const filtered = useMemo(() => {
		const q = search.trim().toLowerCase()
		return blogPosts.filter(
			(post) =>
				(type === 'all' || post.type === type) &&
				(category === 'all' || post.category === category) &&
				(!q || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q))
		)
	}, [type, category, search])

	const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
	const currentPage = Math.min(page, totalPages)
	const items = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)

	const goToPage = (p) => {
		updateParam('page', p === 1 ? null : String(p))
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div className="bg-white font-['Lato',sans-serif]">
			<section className='pt-12 sm:pt-16 pb-20 lg:pb-[120px]'>
				<div className='max-w-[1230px] mx-auto px-4 sm:px-6 lg:px-0'>
					<div className='text-center'>
						<p className='text-base font-bold uppercase tracking-wider text-[#1E212C]'>Our blog</p>
						<h1 className="mt-2 text-[34px] sm:text-[46px] font-black leading-tight font-['Lato',sans-serif]">
							Createx School Journal
						</h1>
					</div>

					{/* Toolbar */}
					<div className='mt-12 sm:mt-[60px] flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10'>
						<div className='flex flex-wrap items-center gap-2'>
							{blogTypes.map(({ value, label }) => {
								const Icon = typeIcon[value]
								const active = type === value
								return (
									<button
										key={value}
										type='button'
										onClick={() => updateParam('type', value)}
										className={`h-11 px-5 flex items-center gap-2 rounded text-base transition-colors ${
											active
												? 'border border-[#FF3F1A] text-[#FF3F1A]'
												: 'border border-transparent text-[#787A80] hover:text-[#FF3F1A]'
										}`}
									>
										{Icon && <Icon className='w-4 h-4' strokeWidth={1.5} />}
										{label}
									</button>
								)
							})}
						</div>

						<div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 lg:ml-auto'>
							<label className='flex items-center gap-3'>
								<span className='text-base font-bold text-[#424551] whitespace-nowrap'>Blog category</span>
								<span className='relative flex-1 sm:flex-none'>
									<select
										value={category}
										onChange={(e) => updateParam('category', e.target.value)}
										className='appearance-none w-full sm:w-40 h-11 pl-4 pr-10 border border-[#D7DADD] rounded bg-white text-sm text-[#424551] focus:outline-none focus:border-[#FF3F1A] cursor-pointer'
									>
										<option value='all'>all themes</option>
										{blogCategories.map((c) => (
											<option key={c} value={c}>
												{c}
											</option>
										))}
									</select>
									<ChevronDown className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#424551]' />
								</span>
							</label>

							<div className='relative sm:w-[285px]'>
								<input
									type='search'
									value={search}
									onChange={(e) => updateParam('q', e.target.value)}
									placeholder='Search blog...'
									className='w-full h-11 pl-4 pr-10 border border-[#D7DADD] rounded text-sm placeholder-[#B3B3BA] focus:outline-none focus:border-[#FF3F1A]'
								/>
								<Search className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#787A80]' />
							</div>
						</div>
					</div>

					{/* Posts */}
					{items.length === 0 ? (
						<div className='text-center py-24'>
							<p className='text-lg text-[#787A80]'>No posts match your filters.</p>
							<button
								type='button'
								onClick={() => setSearchParams({})}
								className='mt-4 font-bold text-[#FF3F1A] hover:underline'
							>
								Reset all filters
							</button>
						</div>
					) : (
						<div className='mt-[60px] grid sm:grid-cols-2 lg:grid-cols-12 gap-x-[30px] gap-y-[60px]'>
							{items.map((post, i) => (
								<div key={post.id} className={spanByIndex[i]}>
									<PostCard post={post} />
								</div>
							))}
						</div>
					)}

					{/* Pagination */}
					{totalPages > 1 && (
						<nav className='mt-[76px] flex items-center justify-center gap-5' aria-label='Pagination'>
							{currentPage > 1 && (
								<button
									type='button'
									onClick={() => goToPage(currentPage - 1)}
									aria-label='Previous page'
									className='text-[#1E212C] hover:text-[#FF3F1A] transition-colors'
								>
									<ArrowLeft className='w-5 h-5' />
								</button>
							)}
							{Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
								<button
									key={p}
									type='button'
									onClick={() => goToPage(p)}
									aria-current={p === currentPage ? 'page' : undefined}
									className={`text-base font-bold transition-colors ${
										p === currentPage ? 'text-[#FF3F1A]' : 'text-[#424551] hover:text-[#FF3F1A]'
									}`}
								>
									{p}
								</button>
							))}
							{currentPage < totalPages && (
								<button
									type='button'
									onClick={() => goToPage(currentPage + 1)}
									aria-label='Next page'
									className='text-[#1E212C] hover:text-[#FF3F1A] transition-colors'
								>
									<ArrowRight className='w-5 h-5' />
								</button>
							)}
						</nav>
					)}
				</div>
			</section>

			<BlogSubscribe />
		</div>
	)
}
