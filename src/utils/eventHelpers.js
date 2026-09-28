// Shared filter/sort/paginate helpers for the Events List and Events Grid pages,
// so both views (which read/write the same URL search params) stay in sync.

export const SORT_OPTIONS = [
	{ value: 'upcoming', label: 'newest' },
	{ value: 'latest', label: 'oldest' },
	{ value: 'price-asc', label: 'price: low to high' },
	{ value: 'price-desc', label: 'price: high to low' }
]

export const PER_PAGE_OPTIONS = [6, 9, 12]

export function filterAndSortEvents(events, { category, search, sort }) {
	const query = (search || '').trim().toLowerCase()

	const filtered = events.filter((ev) => {
		const matchCategory = !category || category === 'All' || ev.category === category
		const matchSearch =
			!query ||
			ev.title.toLowerCase().includes(query) ||
			ev.category.toLowerCase().includes(query) ||
			ev.speaker.name.toLowerCase().includes(query)
		return matchCategory && matchSearch
	})

	const sorted = [...filtered].sort((a, b) => {
		switch (sort) {
			case 'latest':
				return new Date(b.startDate) - new Date(a.startDate)
			case 'price-asc':
				return a.price - b.price
			case 'price-desc':
				return b.price - a.price
			case 'upcoming':
			default:
				return new Date(a.startDate) - new Date(b.startDate)
		}
	})

	return sorted
}

export function paginate(items, page, perPage) {
	const totalPages = Math.max(1, Math.ceil(items.length / perPage))
	const safePage = Math.min(Math.max(1, page), totalPages)
	const start = (safePage - 1) * perPage
	return {
		items: items.slice(start, start + perPage),
		page: safePage,
		totalPages,
		total: items.length
	}
}

export function formatPrice(price) {
	return price > 0 ? `$${price}` : 'Free'
}

// Figma's event cards spell the month out in full ("May", "August"), while the
// card data stores the compact 3-letter form used elsewhere (home teaser, etc).
const MONTH_FULL = {
	JAN: 'January',
	FEB: 'February',
	MAR: 'March',
	APR: 'April',
	MAY: 'May',
	JUN: 'June',
	JUL: 'July',
	AUG: 'August',
	SEP: 'September',
	OCT: 'October',
	NOV: 'November',
	DEC: 'December'
}

export function monthFull(month) {
	return MONTH_FULL[month] || month
}
