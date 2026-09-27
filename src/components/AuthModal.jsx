import { useState, useEffect } from 'react'
import { X, Eye, EyeOff } from 'lucide-react'
import { useModal } from '../context/ModalContext'

export default function AuthModal() {
	const { authModalOpen, authMode, setAuthMode, closeAuthModal } = useModal()
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const [rememberMe, setRememberMe] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	})
	const [submitted, setSubmitted] = useState(false)

	// Close on Escape key
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape' && authModalOpen) {
				closeAuthModal()
			}
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [authModalOpen, closeAuthModal])

	// Lock body scroll when open
	useEffect(() => {
		if (authModalOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [authModalOpen])

	if (!authModalOpen) return null

	const handleSubmit = (e) => {
		e.preventDefault()
		setSubmitted(true)
		setTimeout(() => {
			setSubmitted(false)
			closeAuthModal()
		}, 1500)
	}

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E212C]/60 backdrop-blur-xs transition-opacity duration-300'
			onClick={closeAuthModal}
		>
			<div
				className='relative w-full max-w-md bg-white rounded-xl shadow-2xl p-8 transform transition-all duration-300 animate-modal-enter'
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close Button */}
				<button
					type='button'
					onClick={closeAuthModal}
					className='absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors p-1.5 rounded-full hover:bg-gray-100'
					aria-label='Close modal'
				>
					<X className='w-5 h-5' />
				</button>

				{/* Title */}
				<div className='text-center mb-6'>
					<h3 className='text-2xl font-bold text-[#1E212C] font-heading'>
						{authMode === 'signin' ? 'Sign in' : 'Sign up'}
					</h3>
					<p className='text-sm text-gray-500 mt-1'>
						{authMode === 'signin'
							? 'Sign in to your account using email and password'
							: 'Registration takes less than a minute. And gives you lots of benefits!'}
					</p>
				</div>

				{/* Tabs */}
				<div className='flex border-b border-gray-200 mb-6'>
					<button
						type='button'
						onClick={() => setAuthMode('signin')}
						className={`flex-1 pb-3 text-sm font-semibold transition-colors relative ${
							authMode === 'signin'
								? 'text-[#FF3F1A] border-b-2 border-[#FF3F1A]'
								: 'text-gray-400 hover:text-gray-700'
						}`}
					>
						Sign In
					</button>
					<button
						type='button'
						onClick={() => setAuthMode('signup')}
						className={`flex-1 pb-3 text-sm font-semibold transition-colors relative ${
							authMode === 'signup'
								? 'text-[#FF3F1A] border-b-2 border-[#FF3F1A]'
								: 'text-gray-400 hover:text-gray-700'
						}`}
					>
						Sign Up
					</button>
				</div>

				{submitted ? (
					<div className='py-8 text-center text-emerald-600 font-medium animate-fadeIn'>
						<div className='w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3'>
							✓
						</div>
						{authMode === 'signin' ? 'Successfully signed in!' : 'Account created successfully!'}
					</div>
				) : (
					<form onSubmit={handleSubmit} className='space-y-4'>
						{authMode === 'signup' && (
							<div>
								<label className='block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1'>
									Full Name
								</label>
								<input
									type='text'
									required
									placeholder='John Doe'
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className='w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors'
								/>
							</div>
						)}

						<div>
							<label className='block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1'>
								Email
							</label>
							<input
								type='email'
								required
								placeholder='Your working email'
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								className='w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors'
							/>
						</div>

						<div>
							<label className='block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1'>
								Password
							</label>
							<div className='relative'>
								<input
									type={showPassword ? 'text' : 'password'}
									required
									placeholder='••••••••'
									value={formData.password}
									onChange={(e) => setFormData({ ...formData, password: e.target.value })}
									className='w-full px-4 py-2.5 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors'
								/>
								<button
									type='button'
									onClick={() => setShowPassword(!showPassword)}
									className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
									aria-label='Toggle password visibility'
								>
									{showPassword ? <EyeOff className='w-4 h-4' /> : <Eye className='w-4 h-4' />}
								</button>
							</div>
						</div>

						{authMode === 'signup' && (
							<div>
								<label className='block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1'>
									Confirm Password
								</label>
								<div className='relative'>
									<input
										type={showConfirmPassword ? 'text' : 'password'}
										required
										placeholder='••••••••'
										value={formData.confirmPassword}
										onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
										className='w-full px-4 py-2.5 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors'
									/>
									<button
										type='button'
										onClick={() => setShowConfirmPassword(!showConfirmPassword)}
										className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
										aria-label='Toggle confirm password visibility'
									>
										{showConfirmPassword ? <EyeOff className='w-4 h-4' /> : <Eye className='w-4 h-4' />}
									</button>
								</div>
							</div>
						)}

						<div className='flex items-center justify-between text-xs pt-1'>
							<label className='flex items-center space-x-2 text-gray-600 cursor-pointer select-none'>
								<input
									type='checkbox'
									checked={rememberMe}
									onChange={(e) => setRememberMe(e.target.checked)}
									className='rounded border-gray-300 text-[#FF3F1A] focus:ring-[#FF3F1A]'
								/>
								<span>Remember me</span>
							</label>
							{authMode === 'signin' && (
								<button
									type='button'
									className='text-[#FF3F1A] hover:underline transition-colors'
								>
									Forgot password?
								</button>
							)}
						</div>

						<button
							type='submit'
							className='w-full py-3 px-4 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-2'
						>
							{authMode === 'signin' ? 'Sign in' : 'Sign up'}
						</button>
					</form>
				)}

				{/* Social login divider */}
				<div className='relative my-6 text-center'>
					<div className='absolute inset-0 flex items-center'>
						<div className='w-full border-t border-gray-200' />
					</div>
					<span className='relative px-3 bg-white text-xs text-gray-400 uppercase tracking-wider'>
						Or sign in with
					</span>
				</div>

				{/* Social Buttons */}
				<div className='flex justify-center space-x-3'>
					{['Google', 'Facebook', 'Twitter', 'LinkedIn'].map((network) => (
						<button
							key={network}
							type='button'
							className='px-3 py-2 text-xs font-medium border border-gray-200 rounded-md hover:bg-gray-50 text-gray-600 transition-colors'
							title={`Sign in with ${network}`}
						>
							{network}
						</button>
					))}
				</div>

				{/* Switch mode footer */}
				<div className='mt-6 text-center text-xs text-gray-600'>
					{authMode === 'signin' ? (
						<p>
							Don't have an account?{' '}
							<button
								type='button'
								onClick={() => setAuthMode('signup')}
								className='text-[#FF3F1A] font-bold hover:underline ml-1'
							>
								Sign up
							</button>
						</p>
					) : (
						<p>
							Already have an account?{' '}
							<button
								type='button'
								onClick={() => setAuthMode('signin')}
								className='text-[#FF3F1A] font-bold hover:underline ml-1'
							>
								Sign in
							</button>
						</p>
					)}
				</div>
			</div>
		</div>
	)
}
