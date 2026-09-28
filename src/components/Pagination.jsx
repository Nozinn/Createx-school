import { useSearchParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ page, totalPages }) {
	const [searchParams, setSearchParams] = useSearchParams()

	if (totalPages <= 1) return null

	const goTo = (p) => {
		const next = new URLSearchParams(searchParams)
		next.set('page', String(p))
		setSearchParams(next)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

	return (
		<nav className='flex items-center justify-center gap-2 mt-16' aria-label='Pagination'>
			<button
				type='button'
				onClick={() => goTo(page - 1)}
				disabled={page === 1}
				aria-label='Previous page'
				className='w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#FF3F1A] hover:text-[#FF3F1A] disabled:opacity-40 disabled:pointer-events-none transition-colors'
			>
				<ChevronLeft className='w-4 h-4' />
			</button>

			{pages.map((p) => (
				<button
					key={p}
					type='button'
					onClick={() => goTo(p)}
					aria-current={p === page ? 'page' : undefined}
					className={`w-9 h-9 rounded-lg text-sm font-bold transition-colors ${
						p === page
							? 'bg-[#FF3F1A] text-white shadow-sm'
							: 'text-gray-500 border border-gray-200 hover:border-[#FF3F1A] hover:text-[#FF3F1A]'
					}`}
				>
					{p}
				</button>
			))}

			<button
				type='button'
				onClick={() => goTo(page + 1)}
				disabled={page === totalPages}
				aria-label='Next page'
				className='w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#FF3F1A] hover:text-[#FF3F1A] disabled:opacity-40 disabled:pointer-events-none transition-colors'
			>
				<ChevronRight className='w-4 h-4' />
			</button>
		</nav>
	)
}
