import { useState } from 'react'
import { Check, CheckCircle2, MapPin, MessagesSquare, Smartphone } from 'lucide-react'
import SocialLinks from '../blog/SocialIcons'
import mapImage from './images/map.jpg'
import contactIllustration from './images/contact.png'

const contactInfo = [
	{ icon: MessagesSquare, label: 'Talk to us:', value: 'hello@createx.com', href: 'mailto:hello@createx.com' },
	{ icon: Smartphone, label: 'Call us:', value: '(405) 555-0128', href: 'tel:+14055550128' },
	{ icon: MapPin, label: 'Address:', value: '2464 Royal Ln. Mesa, New Jersey 45463, USA' },
]

const emptyForm = { firstName: '', lastName: '', email: '', phone: '', message: '' }

const inputClass =
	'w-full px-4 border rounded text-base text-[#424551] placeholder-[#B3B3BA] focus:outline-none focus:border-[#FF3F1A] transition-colors'

function Field({ label, required, error, children }) {
	return (
		<label className='block'>
			<span className='block mb-2 text-base text-[#424551]'>
				{label}
				{required && '*'}
			</span>
			{children}
			{error && <span className='block mt-1 text-sm text-[#FF3F1A]'>{error}</span>}
		</label>
	)
}

export default function Contacts() {
	const [form, setForm] = useState(emptyForm)
	const [errors, setErrors] = useState({})
	const [agree, setAgree] = useState(true)
	const [sent, setSent] = useState(false)

	const update = (key) => (e) => {
		setForm((f) => ({ ...f, [key]: e.target.value }))
		setErrors((err) => ({ ...err, [key]: undefined }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const next = {}
		if (!form.firstName.trim()) next.firstName = 'Please enter your first name'
		if (!form.lastName.trim()) next.lastName = 'Please enter your last name'
		if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email'
		if (!form.message.trim()) next.message = 'Please write a message'
		setErrors(next)
		if (Object.keys(next).length) return

		setSent(true)
		setForm(emptyForm)
		setTimeout(() => setSent(false), 4000)
	}

	const borderFor = (key) => (errors[key] ? 'border-[#FF3F1A]' : 'border-[#D7DADD]')

	return (
		<div className="bg-white font-['Lato',sans-serif]">
			{/* Contact info + map */}
			<section className='pt-12 sm:pt-16 pb-20 lg:pb-[120px]'>
				<div className='max-w-[1230px] mx-auto px-4 sm:px-6 lg:px-0 grid lg:grid-cols-[1fr_705px] gap-12 lg:gap-10'>
					<div>
						<p className='text-base font-bold uppercase tracking-wider text-[#1E212C]'>Contact info</p>
						<h1 className="mt-2 text-[34px] sm:text-[46px] font-black leading-tight font-['Lato',sans-serif]">
							Get in touch
						</h1>

						<ul className='mt-10 space-y-6'>
							{contactInfo.map(({ icon: Icon, label, value, href }) => (
								<li key={label} className='flex items-start gap-3'>
									<Icon className='w-6 h-6 shrink-0 text-[#FF3F1A]' strokeWidth={1.5} />
									<div>
										<p className='text-sm font-bold text-[#787A80]'>{label}</p>
										{href ? (
											<a href={href} className='text-lg text-[#1E212C] hover:text-[#FF3F1A] transition-colors'>
												{value}
											</a>
										) : (
											<p className='text-lg text-[#1E212C]'>{value}</p>
										)}
									</div>
								</li>
							))}
						</ul>

						<p className='mt-12 text-base font-bold uppercase tracking-wider text-[#1E212C]'>Follow us:</p>
						<SocialLinks
							names={['facebook', 'twitter', 'youtube', 'telegram', 'instagram', 'linkedin']}
							className='mt-6 gap-8'
							iconClassName='w-6 h-6'
						/>
					</div>

					<a
						href='https://maps.google.com/?q=Lakewood,+New+Jersey'
						target='_blank'
						rel='noreferrer'
						className='block self-start mt-0 lg:mt-5 rounded overflow-hidden shadow-[0_80px_80px_-20px_rgba(154,156,165,0.08),0_30px_24px_-10px_rgba(154,156,165,0.05),0_12px_10px_-6px_rgba(154,156,165,0.04),0_4px_4px_-4px_rgba(30,33,44,0.03)] hover:opacity-95 transition-opacity'
						aria-label='Open location in Google Maps'
					>
						<img src={mapImage} alt='Createx School location on the map' className='w-full h-auto' />
					</a>
				</div>
			</section>

			{/* Contact form */}
			<section className='pb-20 lg:pb-[180px]'>
				<div className='max-w-[1230px] mx-auto px-4 sm:px-6 lg:px-0 grid lg:grid-cols-[1fr_705px] gap-12 lg:gap-10 items-center'>
					<img
						src={contactIllustration}
						alt=''
						className='hidden lg:block w-full max-w-[435px] -ml-3 mt-10'
					/>

					<div>
						<p className='text-base font-bold uppercase tracking-wider text-[#1E212C]'>Any questions?</p>
						<h2 className="mt-2 text-[34px] sm:text-[46px] font-black leading-tight font-['Lato',sans-serif]">
							Drop us a line
						</h2>

						{sent && (
							<div className='mt-8 flex items-center gap-2 rounded bg-emerald-50 px-4 py-3 text-emerald-700 font-bold'>
								<CheckCircle2 className='w-5 h-5' />
								Thank you! Your message has been sent.
							</div>
						)}

						<form onSubmit={handleSubmit} noValidate className='mt-8 grid sm:grid-cols-2 gap-x-[25px] gap-y-6'>
							<Field label='First Name' required error={errors.firstName}>
								<input
									value={form.firstName}
									onChange={update('firstName')}
									placeholder='Your first name'
									className={`${inputClass} h-[52px] ${borderFor('firstName')}`}
								/>
							</Field>
							<Field label='Last Name' required error={errors.lastName}>
								<input
									value={form.lastName}
									onChange={update('lastName')}
									placeholder='Your last name'
									className={`${inputClass} h-[52px] ${borderFor('lastName')}`}
								/>
							</Field>
							<Field label='Email' required error={errors.email}>
								<input
									type='email'
									value={form.email}
									onChange={update('email')}
									placeholder='Your working email'
									className={`${inputClass} h-[52px] ${borderFor('email')}`}
								/>
							</Field>
							<Field label='Phone'>
								<input
									type='tel'
									value={form.phone}
									onChange={update('phone')}
									placeholder='Your phone number'
									className={`${inputClass} h-[52px] ${borderFor('phone')}`}
								/>
							</Field>
							<div className='sm:col-span-2'>
								<Field label='Message' required error={errors.message}>
									<textarea
										rows={4}
										value={form.message}
										onChange={update('message')}
										placeholder='Your message'
										className={`${inputClass} h-32 py-3 resize-y ${borderFor('message')}`}
									/>
								</Field>
							</div>

							<label className='mt-6 flex items-start gap-3 cursor-pointer select-none'>
								<input
									type='checkbox'
									checked={agree}
									onChange={(e) => setAgree(e.target.checked)}
									className='peer sr-only'
								/>
								<span className='mt-1 w-4 h-4 shrink-0 rounded-sm border border-[#D7DADD] flex items-center justify-center peer-checked:bg-[#FF3F1A] peer-checked:border-[#FF3F1A] peer-focus-visible:ring-2 peer-focus-visible:ring-[#FF3F1A]/40'>
									{agree && <Check className='w-3 h-3 text-white' strokeWidth={3} />}
								</span>
								<span className='text-base leading-relaxed text-[#424551]'>
									I agree to receive communications from Createx Online School
								</span>
							</label>
							<button
								type='submit'
								disabled={!agree}
								className='sm:mt-6 h-[52px] rounded text-white font-bold bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] hover:opacity-90 disabled:opacity-50 transition-opacity'
							>
								Send message
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	)
}
