import { useState } from 'react'
import { Check, CheckCircle2 } from 'lucide-react'
import newsletterIllustration from './images/newsletter.png'

export default function BlogSubscribe() {
	const [email, setEmail] = useState('')
	const [agree, setAgree] = useState(true)
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!email || !agree) return
		setSubmitted(true)
		setEmail('')
		setTimeout(() => setSubmitted(false), 3000)
	}

	return (
		<section className='bg-[#F4F5F6] overflow-hidden'>
			<div className='max-w-[1230px] mx-auto px-4 sm:px-6 lg:px-0 grid lg:grid-cols-2 items-center gap-10'>
				<img
					src={newsletterIllustration}
					alt=''
					className='order-2 lg:order-1 w-full max-w-[507px] mx-auto lg:mx-0 lg:-ml-9 self-end'
				/>

				<div className='order-1 lg:order-2 pt-16 lg:py-16'>
					<h2 className="text-[28px] sm:text-[34px] font-black leading-tight font-['Lato',sans-serif]">
						Want to get the best articles weekly? Subscribe to our newsletter!
					</h2>

					{submitted ? (
						<div className='mt-8 flex items-center gap-2 text-emerald-700 font-bold'>
							<CheckCircle2 className='w-5 h-5' />
							Thank you! You have successfully subscribed.
						</div>
					) : (
						<form onSubmit={handleSubmit} className='mt-10'>
							<div className='flex flex-col sm:flex-row gap-6'>
								<input
									type='email'
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder='Your working email'
									className='flex-1 h-[52px] px-4 bg-white border border-[#D7DADD] rounded text-base placeholder-[#B3B3BA] focus:outline-none focus:border-[#FF3F1A]'
								/>
								<button
									type='submit'
									disabled={!agree}
									className='h-[52px] px-10 rounded text-white font-bold bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] hover:opacity-90 disabled:opacity-50 transition-opacity'
								>
									Subscribe
								</button>
							</div>
							<label className='mt-6 flex items-center gap-3 cursor-pointer select-none'>
								<input
									type='checkbox'
									checked={agree}
									onChange={(e) => setAgree(e.target.checked)}
									className='peer sr-only'
								/>
								<span className='w-4 h-4 rounded-sm border border-[#D7DADD] flex items-center justify-center peer-checked:bg-[#FF3F1A] peer-checked:border-[#FF3F1A] peer-focus-visible:ring-2 peer-focus-visible:ring-[#FF3F1A]/40'>
									{agree && <Check className='w-3 h-3 text-white' strokeWidth={3} />}
								</span>
								<span className='text-base text-[#424551]'>
									I agree to receive communications from Createx Online School
								</span>
							</label>
						</form>
					)}
				</div>
			</div>
		</section>
	)
}
