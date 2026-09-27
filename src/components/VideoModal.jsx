import { useEffect } from 'react'
import { X } from 'lucide-react'
import { useModal } from '../context/ModalContext'

export default function VideoModal() {
	const { videoModalOpen, closeVideo } = useModal()

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape' && videoModalOpen) {
				closeVideo()
			}
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [videoModalOpen, closeVideo])

	if (!videoModalOpen) return null

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'
			onClick={closeVideo}
		>
			<div
				className='relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl animate-modal-enter aspect-video'
				onClick={(e) => e.stopPropagation()}
			>
				<button
					type='button'
					onClick={closeVideo}
					className='absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 transition-colors p-2 rounded-full'
					aria-label='Close video'
				>
					<X className='w-6 h-6' />
				</button>
				<iframe
					className='w-full h-full'
					src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0'
					title='Createx Online Courses Showreel'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				/>
			</div>
		</div>
	)
}
