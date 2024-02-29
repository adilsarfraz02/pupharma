"use client"
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className=" body-font px-20">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a href='https://pupharma.online/' className="flex title-font font-medium items-center md:justify-start justify-center ">
          <img
            isBlurred loading='lazy'
            src='https://img.playbook.com/-xNC4T-l13Asj1y0JnkUWWe6X9rypjwRXV5U7sLQ9Nk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2M0ZmU4NTU0/LTgxNTUtNDU3MS1i/YTc0LWYyNDllOTEw/YzVjYw'
            width={25} height={40} className='w-12 invert' />
          <span className="ml-3 text-xl">Pu Pharma</span>
        </a>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Pupharma —
          <a href="https://www.instagram.com/a4adilsarfraz/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@ADil Sarfraz</a>
        </p>
        <span className="inline-flex gap-2 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <button onClick={() => {window.scrollTo(0,0) }} aria-label="Back to Top" className='text-[12px]'>Back to top </button>
          <Link href="/">
            <button className='bg-zinc-900 px-4 py-2 rounded-xl hover:bg-black border border-zinc-50/10 active:scale-95'>Visit Now</button>
          </Link>
          {/* back to top */}
        </span>

      </div>
    </footer>
  )
}

export default Footer
