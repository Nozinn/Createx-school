import { Award, CheckCircle2 } from 'lucide-react'

export default function Certificate() {
	return (
		<section className='py-20 bg-white overflow-hidden'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
					{/* Left Info Column */}
					<div className='lg:col-span-5 space-y-6'>
						<div>
							<span className='text-xs font-bold uppercase tracking-widest text-[#1E212C]'>
								CREATE CERTIFICATE
							</span>
							<h2 className='text-3xl sm:text-4xl font-black text-[#1E212C] font-heading mt-2 leading-tight'>
								Your expertise will be confirmed
							</h2>
						</div>

						<p className='text-base text-gray-600 leading-relaxed'>
							We are accredited by leading international bodies and industry associations. Your certificate will be verifiable online and valued by top employers globally.
						</p>

						{/* Partner / Accreditation Badges */}
						<div className='pt-4 border-t border-gray-100'>
							<p className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-4'>
								Accredited by industry leaders:
							</p>
							<div className='flex flex-wrap items-center gap-6 opacity-75'>
								<div className='flex items-center space-x-1.5 text-gray-700 font-bold tracking-tighter text-lg'>
									<span className='w-2 h-2 rounded-full bg-emerald-500' />
									<span>Deloitte.</span>
								</div>
								<div className='flex items-center space-x-1.5 text-gray-700 font-extrabold tracking-widest text-sm'>
									<span>HRCI</span>
									<span className='text-[10px] bg-gray-200 px-1 py-0.5 rounded'>INSTITUTE</span>
								</div>
								<div className='flex items-center space-x-1.5 text-gray-700 font-bold text-sm'>
									<Award className='w-4 h-4 text-[#FF3F1A]' />
									<span>GlobalEd</span>
								</div>
							</div>
						</div>
					</div>

					{/* Right Certificate Graphic Column */}
					<div className='lg:col-span-7 flex justify-center'>
						<div className='relative w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-100 hover:shadow-3xl transition-shadow duration-300'>
							{/* Certificate Background Pattern */}
							<div className='absolute -top-3 -right-3 w-28 h-28 bg-gradient-to-br from-pink-400 to-[#FF3F1A] rounded-full blur-xl opacity-20 pointer-events-none' />
							<div className='absolute -bottom-3 -left-3 w-28 h-28 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 pointer-events-none' />

							{/* Inner Certificate Box */}
							<div className='relative border-2 border-dashed border-[#FF3F1A]/30 rounded-xl p-6 sm:p-8 text-center bg-radial from-amber-50/20 to-white'>
								{/* Top Header */}
								<div className='flex items-center justify-between border-b border-gray-100 pb-4 mb-6'>
									<span className='text-xs font-black tracking-widest text-[#1E212C] font-heading'>
										CREATE<span className='text-[#FF3F1A]'>X</span>
									</span>
									<div className='flex items-center space-x-1 text-emerald-600 text-xs font-bold'>
										<CheckCircle2 className='w-3.5 h-3.5' />
										<span>Verified Credential</span>
									</div>
								</div>

								{/* Certificate Title */}
								<h3 className='text-2xl sm:text-3xl font-black tracking-widest text-[#FF3F1A] font-heading uppercase mb-1'>
									CERTIFICATE
								</h3>
								<p className='text-xs text-gray-400 tracking-wider uppercase mb-6'>
									THIS IS TO CERTIFY THAT
								</p>

								{/* Student Name */}
								<h4 className='text-xl sm:text-2xl font-black text-[#1E212C] font-heading mb-2 border-b border-gray-300 pb-2 inline-block px-8'>
									Jacob William
								</h4>

								{/* Course Name */}
								<p className='text-xs text-gray-500 max-w-sm mx-auto mb-8'>
									has successfully completed all assignments, practical workshops, and capstone project defense with honors in Online Professional Studies.
								</p>

								{/* Signatures & Seal */}
								<div className='flex items-end justify-between pt-4 border-t border-gray-100 text-left text-xs'>
									<div>
										<p className='font-bold text-[#1E212C]'>Dianne Russell</p>
										<p className='text-[10px] text-gray-400'>Founder & CEO, Createx</p>
									</div>

									{/* Golden/Red Seal */}
									<div className='w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white shadow-md'>
										<Award className='w-6 h-6' />
									</div>

									<div className='text-right'>
										<p className='font-bold text-[#1E212C]'>Jerome Bell</p>
										<p className='text-[10px] text-gray-400'>Program Director</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
