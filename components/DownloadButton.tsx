'use client'
import { useEffect, useState } from 'react'

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowButton(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      console.log('PWA instalada')
    } else {
      console.log('Instalación rechazada')
    }
    setDeferredPrompt(null)
    setShowButton(false)
  }

  if (!showButton) return null

  return (
    <button
      onClick={handleInstallClick}
      className='block md:hidden uppercase fixed bottom-5 right-5 py-3 px-5 bg-[#FF8149] border border-[#FF8149] duration-300 hover:text-[#FF8149] text-white z-50 text-sm rounded-3xl hover:bg-transparent'
    >
      download
    </button>
  )
}
