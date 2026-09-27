import { useState, useEffect } from 'react'
import { X, CheckCircle } from 'lucide-react'
import { useModal } from '../context/ModalContext'

export default function ConsultationModal() {
	const { consultationModalOpen, closeConsultation } = useModal()
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		message: '',
	})
	const [submitted, setSubmitted] = useState(false)

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape' && consultationModalOpen) {
				closeConsultation()
			}
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [consultationModalOpen, closeConsultation])

	if (!consultationModalOpen) return null

	const handleSubmit = (e) => {
		e.preventDefault()
		setSubmitted(true)
		setTimeout(() => {
			setSubmitted(false)
			closeConsultation()
		}, 2000)
	}

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E212C]/60 backdrop-blur-xs transition-opacity'
			onClick={closeConsultation}
		>
			<div
				className='relative w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 animate-modal-enter'
				onClick={(e) => e.stopPropagation()}
			>
				<button
					type='button'
					onClick={closeConsultation}
					className='absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors p-1.5 rounded-full hover:bg-gray-100'
					aria-label='Close modal'
				>
					<X className='w-5 h-5' />
				</button>

				<div className='mb-6'>
					<span className='text-xs font-bold text-[#FF3F1A] uppercase tracking-wider'>
						Free Consultation
					</span>
					<h3 className='text-2xl font-bold text-[#1E212C] font-heading mt-1'>
						Get a consultation
					</h3>
					<p className='text-sm text-gray-500 mt-1'>
						Leave your details and our education advisor will contact you within 15 minutes.
					</p>
				</div>

				{submitted ? (
					<div className='py-12 text-center text-emerald-600'>
						<CheckCircle className='w-14 h-14 mx-auto mb-3 text-emerald-500' />
						<h4 className='text-xl font-bold text-gray-900'>Thank you!</h4>
						<p className='text-sm text-gray-600 mt-1'>
							Our manager will call you soon with personal course recommendations.
						</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} className='space-y-4'>
						<div>
							<label className='block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1'>
								Full Name
							</label>
							<input
								type='text'
								required
								placeholder='Your name'
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								className='w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors'
							/>
						</div>

						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							<div>
								<label className='block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1'>
									Email
								</label>
								<input
									type='email'
									required
									placeholder='Your email'
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									className='w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors'
								/>
							</div>
							<div>
								<label className='block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1'>
									Phone
								</label>
								<input
									type='tel'
									required
									placeholder='+1 (555) 000-0000'
									value={formData.phone}
									onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
									className='w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors'
								/>
							</div>
						</div>

						<div>
							<label className='block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1'>
								What are you interested in?
							</label>
							<textarea
								rows={3}
								placeholder='e.g., I want to switch to UX Design or improve my Marketing skills...'
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								className='w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF3F1A] focus:ring-1 focus:ring-[#FF3F1A] transition-colors resize-none'
							/>
						</div>

						<button
							type='submit'
							className='w-full py-3 px-4 bg-[#FF3F1A] hover:bg-[#E0320F] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-2'
						>
							Request Consultation
						</button>
					</form>
				)}
			</div>
		</div>
	)
}
