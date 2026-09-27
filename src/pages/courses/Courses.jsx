import { useState, useMemo } from 'react'
import { Search, RotateCw } from 'lucide-react'
import { courses } from '../../data/courses'
import CourseCard from '../../components/CourseCard'
import Testimonials from '../../components/Testimonials'
import Certificate from '../../components/Certificate'
import Newsletter from '../../components/Newsletter'

export default function Courses() {
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [searchQuery, setSearchQuery] = useState('')
	const [visibleCount, setVisibleCount] = useState(9)
	const [loadingMore, setLoadingMore] = useState(false)

	const categories = [
		{ name: 'All', count: 18 },
		{ name: 'Marketing', count: 4 },
		{ name: 'Management', count: 3 },
		{ name: 'HR & Recruting', count: 5 },
		{ name: 'Design', count: 3 },
		{ name: 'Development', count: 3 },
	]

	// Filter courses
	const filteredCourses = useMemo(() => {
		return courses.filter((c) => {
			const matchCategory =
				selectedCategory === 'All' || c.category === selectedCategory
			const matchSearch =
				c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				c.teacher.toLowerCase().includes(searchQuery.toLowerCase())
			return matchCategory && matchSearch
		})
	}, [selectedCategory, searchQuery])

	const displayedCourses = filteredCourses.slice(0, visibleCount)

	const handleLoadMore = () => {
		setLoadingMore(true)
		setTimeout(() => {
			setVisibleCount((prev) => prev + 3)
			setLoadingMore(false)
		}, 600)
	}

	return (
		<div className='bg-white'>
			{/* 1. Header Banner & Filters */}
			<section className='pt-16 pb-12 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12'>
					<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
						ENJOY YOUR STUDYING
					</span>
					<h1 className='text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E212C] font-heading mt-2'>
						Our online courses
					</h1>
				</div>

				{/* Category Tabs & Search Bar */}
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-4'>
						{/* Category Pills */}
						<div className='flex flex-wrap items-center gap-2 sm:gap-4'>
							{categories.map((cat) => {
								const isActive = selectedCategory === cat.name
								return (
									<button
										key={cat.name}
										type='button'
										onClick={() => {
											setSelectedCategory(cat.name)
											setVisibleCount(9)
										}}
										className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-md transition-all flex items-center space-x-1.5 ${
											isActive
												? 'border border-[#FF3F1A] text-[#FF3F1A] bg-orange-50/50 shadow-xs'
												: 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
										}`}
									>
										<span>{cat.name}</span>
										<span className='text-[10px] text-gray-400 font-normal'>
											{cat.count}
										</span>
									</button>
								)
							})}
						</div>

						{/* Search Input */}
						<div className='relative w-full lg:w-72'>
							<input
								type='text'
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								placeholder='Search course...'
								className='w-full pl-4 pr-10 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors'
							/>
							<Search className='absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
						</div>
					</div>
				</div>
			</section>

			{/* 2. Courses Grid */}
			<section className='pb-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					{displayedCourses.length === 0 ? (
						<div className='text-center py-24'>
							<p className='text-lg text-gray-500'>
								No courses found matching your criteria.
							</p>
							<button
								type='button'
								onClick={() => {
									setSelectedCategory('All')
									setSearchQuery('')
								}}
								className='mt-4 text-sm font-bold text-[#FF3F1A] hover:underline'
							>
								Reset all filters
							</button>
						</div>
					) : (
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{displayedCourses.map((course) => (
								<CourseCard key={course.id} course={course} variant='vertical' />
							))}
						</div>
					)}

					{/* Load More Button */}
					{displayedCourses.length < filteredCourses.length && (
						<div className='text-center mt-16'>
							<button
								type='button'
								onClick={handleLoadMore}
								disabled={loadingMore}
								className='inline-flex items-center space-x-2 text-sm font-bold text-[#424551] hover:text-[#FF3F1A] transition-colors py-3 px-6 rounded-lg border border-gray-200 hover:border-[#FF3F1A]'
							>
								<RotateCw
									className={`w-4 h-4 ${loadingMore ? 'animate-spin text-[#FF3F1A]' : ''}`}
								/>
								<span>{loadingMore ? 'Loading courses...' : 'Load more'}</span>
							</button>
						</div>
					)}
				</div>
			</section>

			{/* 3. Testimonials */}
			<Testimonials />

			{/* 4. Certificate */}
			<Certificate />

			{/* 5. Newsletter */}
			<Newsletter />
		</div>
	)
}
