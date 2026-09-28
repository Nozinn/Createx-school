import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Calendar, CircleCheck, Clock, Search } from 'lucide-react'
import { blogPosts, blogTags, trendingPosts, typeIcon, typeLabel } from '../blog/blogPosts'
import PostCard from '../blog/PostCard'
import BlogSubscribe from '../blog/BlogSubscribe'
import SocialLinks from '../blog/SocialIcons'
import heroImage from './images/post-hero.jpg'
import authorImage from './images/author.jpg'

const postTags = ['#learning', '#HR', '#self-development']

function Share() {
	return (
		<div className='flex items-center gap-4'>
			<span className='font-bold text-[#1E212C]'>Share:</span>
			<SocialLinks names={['facebook', 'twitter', 'linkedin']} className='gap-3' iconClassName='w-5 h-5' />
		</div>
	)
}

function SidebarTitle({ children }) {
	return <h3 className="text-base font-bold uppercase tracking-wider mb-6 font-['Lato',sans-serif]">{children}</h3>
}

export default function SinglePost() {
	const { id } = useParams()
	const navigate = useNavigate()
	const [query, setQuery] = useState('')
	// Slide position is tied to the post id so it resets when navigating between posts
	const [slider, setSlider] = useState({ id, value: 0 })
	const slide = slider.id === id ? slider.value : 0
	const setSlide = (update) => setSlider({ id, value: update(slide) })

	const post = blogPosts.find((p) => p.id === Number(id))
	const related = blogPosts.filter((p) => p.id !== post?.id).slice(0, 6)
	const maxSlide = related.length - 3

	useEffect(() => {
		window.scrollTo({ top: 0 })
	}, [id])

	if (!post) {
		return (
			<div className="py-32 text-center font-['Lato',sans-serif]">
				<h1 className="text-4xl font-black font-['Lato',sans-serif]">Post not found</h1>
				<Link to='/blog' className='mt-6 inline-block font-bold text-[#FF3F1A] hover:underline'>
					Back to blog
				</Link>
			</div>
		)
	}

	const TypeIcon = typeIcon[post.type]
	const readTime = post.duration || '4 min read'
	const cover = post.image === blogPosts[3].image ? heroImage : post.image

	const handleSearch = (e) => {
		e.preventDefault()
		navigate(query.trim() ? `/blog?q=${encodeURIComponent(query.trim())}` : '/blog')
	}

	return (
		<div className="bg-white font-['Lato',sans-serif]">
			<section className='pt-12 sm:pt-16 pb-20 lg:pb-[100px]'>
				<div className='max-w-[1230px] mx-auto px-4 sm:px-6 lg:px-0 grid lg:grid-cols-[810px_342px] justify-between gap-16 lg:gap-0'>
					{/* Article */}
					<article>
						<div className='flex items-center text-base mt-2'>
							<TypeIcon className='w-4 h-4 mr-2 text-[#424551]' strokeWidth={1.5} />
							<span className='text-[#424551]'>{typeLabel[post.type]}</span>
							<span className='mx-3 h-4 w-px bg-[#D7DADD]' />
							<Link
								to={`/blog?category=${encodeURIComponent(post.category)}`}
								className='font-bold text-[#FF3F1A] hover:underline'
							>
								{post.category}
							</Link>
						</div>

						<h1 className="mt-4 text-[32px] sm:text-[46px] font-black leading-[1.3] font-['Lato',sans-serif]">
							{post.title}
						</h1>

						<div className='mt-8 flex flex-wrap items-center justify-between gap-4'>
							<div className='flex items-center gap-6 text-base text-[#787A80]'>
								<span className='flex items-center gap-2'>
									<Calendar className='w-4 h-4' strokeWidth={1.5} />
									{post.date}
								</span>
								<span className='flex items-center gap-2'>
									<Clock className='w-4 h-4' strokeWidth={1.5} />
									{readTime}
								</span>
							</div>
							<Share />
						</div>

						<img src={cover} alt={post.title} className='mt-8 w-full h-[220px] sm:h-[360px] object-cover rounded' />

						<div className='mt-10 space-y-6 text-base leading-relaxed text-[#424551]'>
							<p className='text-lg font-bold leading-normal text-[#1E212C]'>
								Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum
								aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est
								hendrerit ac euismod.
							</p>
							<p>
								At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae
								diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare
								pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia
								amet, odio. Mi varius viverra risus vel.
							</p>
							<p>
								Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero
								duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed.
								Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus
								morbi sed. Ut aliquet velit pharetra, nisi nunc, non.
							</p>

							<blockquote className='relative my-12 pl-14'>
								<svg viewBox='0 0 28 20' className='absolute left-0 top-1 w-7 h-5 text-[#FF3F1A]' fill='currentColor' aria-hidden='true'>
									<path d='M0 6 6 0h5v20H0zM17 6l6-6h5v20H17z' />
								</svg>
								<p className='text-lg font-bold leading-normal text-[#1E212C]'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus
									lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare
									turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque,
									ipsum.
								</p>
							</blockquote>

							<p>
								Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit
								in neque amet non fringilla blandit:
							</p>
							<ul className='space-y-2'>
								{[
									'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
									'Vulputate placerat amet pulvinar lorem nisl.',
									'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
									'Etiam duis lobortis in fames ultrices commodo nibh.',
								].map((item) => (
									<li key={item} className='flex items-start gap-3'>
										<CircleCheck className='w-4 h-4 mt-1 shrink-0 text-[#FF3F1A]' />
										{item}
									</li>
								))}
							</ul>
							<p>
								Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare
								lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas.
								Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis
								tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla.
								Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.
							</p>
						</div>

						<div className='mt-16 flex flex-wrap items-center justify-between gap-6'>
							<div className='flex flex-wrap items-center gap-3'>
								<span className='font-bold text-[#1E212C] mr-1'>Tags:</span>
								{postTags.map((tag) => (
									<Link
										key={tag}
										to={`/blog?q=${encodeURIComponent(tag.slice(1))}`}
										className='px-4 py-1.5 border border-[#D7DADD] rounded text-sm font-bold text-[#787A80] hover:bg-[#FF3F1A] hover:border-[#FF3F1A] hover:text-white transition-colors'
									>
										{tag}
									</Link>
								))}
							</div>
							<Share />
						</div>
					</article>

					{/* Sidebar */}
					<aside className='space-y-[60px]'>
						<form onSubmit={handleSearch} className='relative'>
							<input
								type='search'
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder='Search blog...'
								className='w-full h-11 pl-4 pr-10 border border-[#D7DADD] rounded text-sm placeholder-[#B3B3BA] focus:outline-none focus:border-[#FF3F1A]'
							/>
							<button
								type='submit'
								aria-label='Search'
								className='absolute right-4 top-1/2 -translate-y-1/2 text-[#787A80] hover:text-[#FF3F1A]'
							>
								<Search className='w-4 h-4' />
							</button>
						</form>

						<div>
							<SidebarTitle>Author</SidebarTitle>
							<div className='flex items-center gap-5'>
								<img src={authorImage} alt='Kristin Watson' className='w-[100px] h-[100px] rounded object-cover' />
								<div>
									<p className='text-xl font-bold text-[#424551]'>Kristin Watson</p>
									<p className='mt-1 text-sm text-[#787A80]'>Curator of Marketing Course</p>
									<SocialLinks
										names={['instagram', 'twitter', 'linkedin']}
										className='mt-4 gap-4'
										iconClassName='w-5 h-5'
									/>
								</div>
							</div>
						</div>

						<div>
							<SidebarTitle>Trending articles</SidebarTitle>
							<ul className='space-y-6'>
								{trendingPosts.map((p) => (
									<li key={p.id}>
										<Link to={`/blog/${p.id}`} className='group flex items-center gap-5'>
											<img src={p.thumb} alt='' className='w-[100px] h-[100px] shrink-0 rounded object-cover' />
											<div>
												<p className='flex items-center gap-2 text-sm text-[#787A80]'>
													<Calendar className='w-4 h-4' strokeWidth={1.5} />
													{p.date}
												</p>
												<p className='mt-2 font-bold leading-relaxed text-[#1E212C] group-hover:text-[#FF3F1A] transition-colors'>
													{p.title}
												</p>
											</div>
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div>
							<SidebarTitle>Tags</SidebarTitle>
							<div className='flex flex-wrap gap-3'>
								{blogTags.map((tag) => (
									<Link
										key={tag}
										to={`/blog?q=${encodeURIComponent(tag.slice(1))}`}
										className='px-4 py-1.5 border border-[#D7DADD] rounded text-sm font-bold text-[#787A80] hover:bg-[#FF3F1A] hover:border-[#FF3F1A] hover:text-white transition-colors'
									>
										{tag}
									</Link>
								))}
							</div>
						</div>
					</aside>
				</div>
			</section>

			<BlogSubscribe />

			{/* Related posts */}
			<section className='pt-20 lg:pt-[120px] pb-20 lg:pb-[140px]'>
				<div className='max-w-[1230px] mx-auto px-4 sm:px-6 lg:px-0'>
					<div className='flex items-end justify-between gap-6'>
						<div>
							<p className='text-base font-bold uppercase tracking-wider text-[#1E212C]'>Our blog</p>
							<h2 className="mt-2 text-[34px] sm:text-[46px] font-black leading-tight font-['Lato',sans-serif]">
								You may also like
							</h2>
						</div>
						<div className='hidden sm:flex items-center gap-6 pb-3'>
							<button
								type='button'
								onClick={() => setSlide((s) => Math.max(0, s - 1))}
								disabled={slide === 0}
								aria-label='Previous posts'
								className='text-[#1E212C] hover:text-[#FF3F1A] disabled:opacity-30 transition-colors'
							>
								<ArrowLeft className='w-6 h-6' />
							</button>
							<button
								type='button'
								onClick={() => setSlide((s) => Math.min(maxSlide, s + 1))}
								disabled={slide >= maxSlide}
								aria-label='Next posts'
								className='text-[#1E212C] hover:text-[#FF3F1A] disabled:opacity-30 transition-colors'
							>
								<ArrowRight className='w-6 h-6' />
							</button>
						</div>
					</div>

					<div className='mt-[60px] overflow-hidden'>
						<div
							className='grid grid-flow-col auto-cols-[var(--card)] [--card:100%] sm:[--card:calc((100%-30px)/2)] lg:[--card:calc((100%-60px)/3)] gap-[30px] overflow-x-auto sm:overflow-visible snap-x snap-mandatory transition-transform duration-500'
							style={{ transform: `translateX(calc(-${slide} * (var(--card) + 30px)))` }}
						>
							{related.map((p) => (
								<div key={p.id} className='snap-start'>
									<PostCard post={p} />
								</div>
							))}
						</div>
					</div>

					<div className='mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-center'>
						<p className="text-2xl sm:text-[28px] font-bold text-[#1E212C] font-['Lato',sans-serif]">
							Do you want more articles, podcasts and videos?
						</p>
						<Link
							to='/blog'
							className='h-[52px] px-10 inline-flex items-center rounded text-white font-bold bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] hover:opacity-90 transition-opacity'
						>
							Go to blog
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}
