import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { actionLabel, typeIcon, typeLabel } from './blogPosts'

export default function PostCard({ post, imageClassName = 'h-[300px]' }) {
	const TypeIcon = typeIcon[post.type]

	return (
		<article className='group flex flex-col'>
			<Link to={`/blog/${post.id}`} className='relative block overflow-hidden rounded'>
				<img
					src={post.image}
					alt={post.title}
					loading='lazy'
					className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageClassName}`}
				/>
				<span className='absolute top-3 left-3 flex items-center gap-1 bg-white rounded px-2 py-0.5 text-sm text-[#1E212C]'>
					<TypeIcon className='w-4 h-4' strokeWidth={1.5} />
					{typeLabel[post.type]}
				</span>
			</Link>

			<div className='flex flex-wrap items-center text-sm text-[#787A80] mt-4 gap-y-1'>
				<span className='font-bold'>{post.category}</span>
				<span className='mx-3 h-3 w-px bg-[#787A80]/60' />
				<Calendar className='w-4 h-4 mr-1.5' strokeWidth={1.5} />
				{post.date}
				{post.duration && (
					<>
						<span className='mx-3 h-3 w-px bg-[#787A80]/60' />
						<Clock className='w-4 h-4 mr-1.5' strokeWidth={1.5} />
						{post.duration}
					</>
				)}
			</div>

			<h3 className="mt-2 text-xl font-bold leading-normal font-['Lato',sans-serif]">
				<Link to={`/blog/${post.id}`} className='hover:text-[#FF3F1A] transition-colors'>
					{post.title}
				</Link>
			</h3>
			<p className='mt-2 text-base leading-relaxed text-[#424551]'>{post.excerpt}</p>

			<Link
				to={`/blog/${post.id}`}
				className='mt-6 inline-flex items-center gap-3 self-start font-bold text-[#1E212C] hover:text-[#FF3F1A] transition-colors'
			>
				{actionLabel[post.type]}
				<ArrowRight className='w-5 h-5 text-[#FF3F1A] transition-transform group-hover:translate-x-1' />
			</Link>
		</article>
	)
}
