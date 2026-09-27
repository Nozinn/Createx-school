import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import AuthModal from './AuthModal'
import ConsultationModal from './ConsultationModal'
import VideoModal from './VideoModal'
import { ModalProvider } from '../context/ModalContext'

export default function Layout() {
	return (
		<ModalProvider>
			<div className='min-h-screen flex flex-col bg-white text-[#424551]'>
				<Header />
				<main className='flex-1'>
					<Outlet />
				</main>
				<Footer />

				{/* Shared Modals */}
				<AuthModal />
				<ConsultationModal />
				<VideoModal />
			</div>
		</ModalProvider>
	)
}
