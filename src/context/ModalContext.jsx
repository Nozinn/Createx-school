/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export function ModalProvider({ children }) {
	const [authModalOpen, setAuthModalOpen] = useState(false)
	const [authMode, setAuthMode] = useState('signin') // 'signin' | 'signup'
	const [consultationModalOpen, setConsultationModalOpen] = useState(false)
	const [videoModalOpen, setVideoModalOpen] = useState(false)

	const openSignIn = () => {
		setAuthMode('signin')
		setAuthModalOpen(true)
	}

	const openSignUp = () => {
		setAuthMode('signup')
		setAuthModalOpen(true)
	}

	const closeAuthModal = () => {
		setAuthModalOpen(false)
	}

	const openConsultation = () => setConsultationModalOpen(true)
	const closeConsultation = () => setConsultationModalOpen(false)

	const openVideo = () => setVideoModalOpen(true)
	const closeVideo = () => setVideoModalOpen(false)

	return (
		<ModalContext.Provider
			value={{
				authModalOpen,
				authMode,
				setAuthMode,
				openSignIn,
				openSignUp,
				closeAuthModal,
				consultationModalOpen,
				openConsultation,
				closeConsultation,
				videoModalOpen,
				openVideo,
				closeVideo,
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}

export function useModal() {
	const context = useContext(ModalContext)
	if (!context) {
		throw new Error('useModal must be used within a ModalProvider')
	}
	return context
}
