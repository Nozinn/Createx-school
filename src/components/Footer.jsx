import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp, ArrowRight, Phone, Mail, Check } from 'lucide-react'

export default function Footer() {
	const [email, setEmail] = useState('')
	const [subscribed, setSubscribed] = useState(false)

	const handleScrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const handleSubscribe = (e) => {
		e.preventDefault()
		if (email) {
			setSubscribed(true)
			setTimeout(() => {
				setSubscribed(false)
				setEmail('')
			}, 3000)
		}
	}

	return (
		<footer className='bg-[#1E212C] text-white pt-16 pb-8'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Top Columns */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-gray-700/60'>
					{/* Brand Column */}
					<div className='lg:col-span-2 space-y-5'>
						<Link to='/' className='inline-block group'>
							<span className='text-2xl font-black tracking-wider text-white font-heading'>
								CREATE<span className='text-[#FF3F1A] transition-transform duration-200 inline-block group-hover:scale-110'>X</span>
							</span>
						</Link>
						<p className='text-sm text-gray-400 max-w-sm leading-relaxed'>
							Createx Online School is a leader in online education. We deliver high-quality courses taught by industry practitioners to help you achieve your career goals.
						</p>

						{/* Socials */}
						<div className='flex items-center space-x-4 pt-2'>
							{[
								{ name: 'Facebook', label: 'FB' },
								{ name: 'Twitter', label: 'TW' },
								{ name: 'YouTube', label: 'YT' },
								{ name: 'Telegram', label: 'TG' },
								{ name: 'Instagram', label: 'IG' },
								{ name: 'LinkedIn', label: 'IN' },
							].map((item) => (
								<a
									key={item.name}
									href={`#${item.name.toLowerCase()}`}
									className='w-9 h-9 rounded-full bg-white/5 hover:bg-[#FF3F1A] flex items-center justify-center text-xs font-bold text-gray-300 hover:text-white transition-all duration-200 hover:-translate-y-0.5'
									title={item.name}
								>
									{item.label}
								</a>
							))}
						</div>
					</div>

					{/* Sitemap */}
					<div>
						<h4 className='text-xs font-bold tracking-widest text-white uppercase mb-5 font-heading'>
							SITE MAP
						</h4>
						<ul className='space-y-3 text-sm text-gray-400'>
							<li>
								<Link to='/about' className='hover:text-[#FF3F1A] transition-colors'>
									About Us
								</Link>
							</li>
							<li>
								<Link to='/courses' className='hover:text-[#FF3F1A] transition-colors'>
									Courses
								</Link>
							</li>
							<li>
								<Link to='/events' className='hover:text-[#FF3F1A] transition-colors'>
									Events
								</Link>
							</li>
							<li>
								<Link to='/blog' className='hover:text-[#FF3F1A] transition-colors'>
									Blog
								</Link>
							</li>
							<li>
								<Link to='/contacts' className='hover:text-[#FF3F1A] transition-colors'>
									Contacts
								</Link>
							</li>
						</ul>
					</div>

					{/* Courses */}
					<div>
						<h4 className='text-xs font-bold tracking-widest text-white uppercase mb-5 font-heading'>
							COURSES
						</h4>
						<ul className='space-y-3 text-sm text-gray-400'>
							<li>
								<Link to='/courses' className='hover:text-[#FF3F1A] transition-colors'>
									Marketing
								</Link>
							</li>
							<li>
								<Link to='/courses' className='hover:text-[#FF3F1A] transition-colors'>
									Management
								</Link>
							</li>
							<li>
								<Link to='/courses' className='hover:text-[#FF3F1A] transition-colors'>
									HR & Recruiting
								</Link>
							</li>
							<li>
								<Link to='/courses' className='hover:text-[#FF3F1A] transition-colors'>
									Design
								</Link>
							</li>
							<li>
								<Link to='/courses' className='hover:text-[#FF3F1A] transition-colors'>
									Development
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact & Mini Newsletter */}
					<div className='space-y-4'>
						<h4 className='text-xs font-bold tracking-widest text-white uppercase mb-5 font-heading'>
							CONTACT US
						</h4>
						<div className='space-y-2 text-sm text-gray-400'>
							<a
								href='tel:+14055550128'
								className='flex items-center space-x-2 hover:text-white transition-colors'
							>
								<Phone className='w-4 h-4 text-[#FF3F1A]' />
								<span>(405) 555-0128</span>
							</a>
							<a
								href='mailto:hello@createx.com'
								className='flex items-center space-x-2 hover:text-white transition-colors'
							>
								<Mail className='w-4 h-4 text-[#FF3F1A]' />
								<span>hello@createx.com</span>
							</a>
						</div>

						{/* Newsletter */}
						<div className='pt-2'>
							<h5 className='text-xs font-bold uppercase tracking-wider text-gray-300 mb-2'>
								SIGN UP TO OUR NEWSLETTER
							</h5>
							<form onSubmit={handleSubscribe} className='relative'>
								<input
									type='email'
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder='Email address'
									className='w-full bg-white/10 text-white placeholder-gray-400 text-xs px-3.5 py-2.5 pr-10 rounded border border-white/20 focus:outline-none focus:border-[#FF3F1A] transition-colors'
								/>
								<button
									type='submit'
									className='absolute right-1 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-white transition-colors'
									aria-label='Subscribe'
								>
									{subscribed ? (
										<Check className='w-4 h-4 text-emerald-400' />
									) : (
										<ArrowRight className='w-4 h-4 hover:translate-x-0.5 transition-transform' />
									)}
								</button>
							</form>
							<p className='text-[10px] text-gray-400 mt-2 leading-tight'>
								*Subscribe to our newsletter to receive communications and early updates.
							</p>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4'>
					<p>© {new Date().getFullYear()} Createx School. All rights reserved. Made with love by Createx Studio.</p>

					<button
						type='button'
						onClick={handleScrollTop}
						className='flex items-center space-x-2 uppercase tracking-widest font-bold text-xs text-gray-400 hover:text-[#FF3F1A] transition-all duration-200 group'
					>
						<span>GO TO TOP</span>
						<span className='w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#FF3F1A] group-hover:text-white flex items-center justify-center transition-all duration-200'>
							<ArrowUp className='w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform' />
						</span>
					</button>
				</div>
			</div>
		</footer>
	)
}
