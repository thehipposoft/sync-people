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
            <div className="p-4 bg-[#FF8149] border border-[#FF8149] rounded-3xl text-sm text-white flex items-center flex-col gap-2">
                To install the app, tap{' '}
                <span className="inline-block px-1 py-0.5 rounded bg-white border border-gray-300">
                <svg
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                >
                    <g id="SVGRepo_iconCarrier">
                        <path d="M20 13V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V13M12 3L12 15M12 3L16 7M12 3L8 7" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                    </g>
                </svg>
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
