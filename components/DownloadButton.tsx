'use client'
import { useEffect, useState } from 'react'

export default function InstallButton() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
    const [showInstallPrompt, setShowInstallPrompt] = useState(false)
    const [isIOS, setIsIOS] = useState(false)
    const [isInStandaloneMode, setIsInStandaloneMode] = useState(false)

    useEffect(() => {
        const userAgent = window.navigator.userAgent.toLowerCase()
        const iOS = /iphone|ipad|ipod/.test(userAgent)
        const standalone = (window.navigator as any)?.standalone === true

        setIsIOS(iOS)
        setIsInStandaloneMode(standalone)

        // For Android/Chrome
        const handler = (e: any) => {
            //e.preventDefault()
            setDeferredPrompt(e)
            setShowInstallPrompt(true)
        }

        window.addEventListener('beforeinstallprompt', handler)

        return () => {
            window.removeEventListener('beforeinstallprompt', handler)
        }
    }, [])

    const handleInstallClick = async () => {
        if (!deferredPrompt) return
        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            console.log('PWA installed')
        } else {
            console.log('Installation declined')
        }
        setDeferredPrompt(null)
        setShowInstallPrompt(false)
    }

    if (isIOS && !isInStandaloneMode) {
        return (
            <div className="p-4 bg-yellow-100 border border-yellow-300 rounded-xl text-sm text-gray-800">
                To install the app, tap{' '}
                <span className="inline-block px-1 py-0.5 rounded bg-white border border-gray-300">
                <img
                    src="/share-icon.svg"
                    alt="Share"
                    className="inline-block w-4 h-4 align-text-bottom"
                />
                </span>{' '}
                then "Add to Home Screen"
            </div>
        )
    }

    if (!showInstallPrompt) return null

    return (
        <button
            onClick={handleInstallClick}
            className="block md:hidden uppercase py-3 px-5 bg-[#FF8149] border border-[#FF8149] duration-300 hover:text-[#FF8149] text-white z-50 text-sm rounded-3xl hover:bg-transparent"
        >
            Download App
        </button>
    )
}
