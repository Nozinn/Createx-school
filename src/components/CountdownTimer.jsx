import { useEffect, useState } from 'react'

function diffToParts(target) {
	const diff = Math.max(0, new Date(target).getTime() - Date.now())
	const totalSeconds = Math.floor(diff / 1000)
	return {
		days: Math.floor(totalSeconds / 86400),
		hours: Math.floor((totalSeconds % 86400) / 3600),
		minutes: Math.floor((totalSeconds % 3600) / 60),
		seconds: totalSeconds % 60
	}
}

// Live countdown to a real target date, ticking every second.
export default function CountdownTimer({ target, size = 'md' }) {
	const [parts, setParts] = useState(() => diffToParts(target))

	useEffect(() => {
		const interval = setInterval(() => setParts(diffToParts(target)), 1000)
		return () => clearInterval(interval)
	}, [target])

	const units = [
		{ label: 'Days', value: parts.days },
		{ label: 'Hours', value: parts.hours },
		{ label: 'Mins', value: parts.minutes },
		{ label: 'Secs', value: parts.seconds }
	]

	const box = size === 'lg' ? 'text-3xl sm:text-4xl px-4 py-2.5' : 'text-2xl sm:text-3xl px-3 py-1'

	return (
		<div className='flex items-center gap-3 sm:gap-4'>
			{units.map((unit) => (
				<div key={unit.label} className='text-center'>
					<span className={`block font-black text-[#1E212C] font-heading bg-white/70 rounded shadow-xs ${box}`}>
						{String(unit.value).padStart(2, '0')}
					</span>
					<span className='text-[10px] uppercase font-bold text-gray-500 mt-1 block tracking-wider'>
						{unit.label}
					</span>
				</div>
			))}
		</div>
	)
}
