import Link from 'next/link'
import React from 'react'

const CardsSec = () => {
    return (
        <div className='w-[80.5%] mx-auto mt-12 bgDot rounded-3xl shadow-sm shadow-zinc-800'>
            <div className='bg-card px-4 rounded-3xl h-44 max-md:h-auto w-full'>
                <h1 className="text-center text-4xl pt-4 text-transparent bg-clip-text bg-gradient-to-tr from-violet-700  via-pink-600 to-violet-900 font-semibold">All D.Pharm Proffs </h1>
                <center>
                    <p className="mx-auto mt-1 mb-3">
                        With a focus on practical skills and cutting-edge research, our professors are committed to fostering a dynamic learning environment.
                        Join us on a journey of discovery and growth as we empower the next generation of pharmaceutical experts.
                    </p>
                    <Link href="/proffs">
                        <button className='py-2 mt-2 rounded-xl bg-black/50 backdrop-blur-[1px] hover:bg-pink-500 border border-zinc-500/20 transition active:bg-zinc-900 active:scale-90 px-12 mb-5'>
                            Visit Now
                        </button>
                    </Link>
                </center>
            </div>
        </div>
    )
}

export default CardsSec
