import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { User, Menu, X } from 'lucide-react'
import { useModal } from '../context/ModalContext'

export default function Header() {
	const { openSignIn, openConsultation } = useModal()
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	// Track scroll to apply subtle shadow
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navItems = [
		{ name: 'About Us', path: '/about' },
		{ name: 'Courses', path: '/courses' },
		{ name: 'Events', path: '/events' },
		{ name: 'Blog', path: '/blog' },
		{ name: 'Contacts', path: '/contacts' },
	]

	return (
		<header
			className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${
				scrolled ? 'shadow-md py-3.5' : 'py-5'
			}`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between'>
					{/* Logo */}
					<Link to='/' className='flex items-center space-x-1 group'>
						<span className='text-2xl font-black tracking-wider text-[#1E212C] font-heading'>
							CREATE<span className='text-[#FF3F1A] transition-transform duration-200 inline-block group-hover:scale-110'>X</span>
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex items-center space-x-8'>
						{navItems.map((item) => (
							<NavLink
								key={item.name}
								to={item.path}
								className={({ isActive }) =>
									`text-sm font-bold transition-colors duration-200 relative py-1 ${
										isActive
											? 'text-[#FF3F1A]'
											: 'text-[#424551] hover:text-[#FF3F1A]'
									}`
								}
							>
								{({ isActive }) => (
									<>
										{item.name}
										{isActive && (
											<span className='absolute bottom-0 left-0 w-full h-0.5 bg-[#FF3F1A] rounded-full' />
										)}
									</>
								)}
							</NavLink>
						))}
					</nav>

					{/* Desktop CTA & Auth */}
					<div className='hidden lg:flex items-center space-x-6'>
						<button
							type='button'
							onClick={openConsultation}
							className='px-6 py-2.5 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold text-sm rounded transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0'
						>
							Get consultation
						</button>

						<button
							type='button'
							onClick={openSignIn}
							className='flex items-center space-x-2 text-sm font-bold text-[#424551] hover:text-[#FF3F1A] transition-colors group'
						>
							<User className='w-4 h-4 text-gray-500 group-hover:text-[#FF3F1A] transition-colors' />
							<span>Log in / Register</span>
						</button>
					</div>

					{/* Mobile Menu Button */}
					<div className='flex items-center space-x-3 md:hidden'>
						<button
							type='button'
							onClick={openSignIn}
							className='p-2 text-[#424551] hover:text-[#FF3F1A]'
							aria-label='Log in'
						>
							<User className='w-5 h-5' />
						</button>
						<button
							type='button'
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className='p-2 text-[#1E212C] hover:text-[#FF3F1A] transition-colors'
							aria-label='Toggle menu'
						>
							{mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
						</button>
					</div>
				</div>

				{/* Mobile Dropdown Menu */}
				{mobileMenuOpen && (
					<div className='md:hidden pt-4 pb-6 border-t border-gray-100 mt-4 animate-modal-enter'>
						<nav className='flex flex-col space-y-3 mb-5'>
							{navItems.map((item) => (
								<NavLink
									key={item.name}
									to={item.path}
									className={({ isActive }) =>
										`px-3 py-2 text-base font-bold rounded-lg transition-colors ${
											isActive
												? 'text-[#FF3F1A] bg-orange-50'
												: 'text-[#424551] hover:text-[#FF3F1A] hover:bg-gray-50'
										}`
									}
								>
									{item.name}
								</NavLink>
							))}
						</nav>
						<div className='flex flex-col space-y-3 px-3'>
							<button
								type='button'
								onClick={() => {
									setMobileMenuOpen(false)
									openConsultation()
								}}
								className='w-full py-3 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold text-sm rounded shadow transition-colors'
							>
								Get consultation
							</button>
							<button
								type='button'
								onClick={() => {
									setMobileMenuOpen(false)
									openSignIn()
								}}
								className='w-full py-2.5 border border-gray-300 font-bold text-sm text-[#424551] rounded hover:bg-gray-50 transition-colors'
							>
								Log in / Register
							</button>
						</div>
					</div>
				)}
			</div>
		</header>
	)
}
