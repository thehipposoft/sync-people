import Link from 'next/link'
import React from 'react'

const DownloadButton = () => {
  return (
    <Link href={'/manifest.json'} rel='manifest' className='uppercase fixed bottom-4 right-4 py-2 px-4 bg-[#FF8149] text-white z-50 text-sm rounded-3xl'>
        download
    </Link>
  )
}

export default DownloadButton
