"use client"
import { Button, Image } from '@nextui-org/react'

import React, { useState } from 'react'

function Banner() {
    const [cookieBanner, setCookieBanner] = useState({});
    return (

        <nav className={`flex mx-auto px-5 max-md:px-2 items-center justify-between fixed max-sm:w-[90%] max-sm:left-[5%] w-[60%] left-[20%] transition h-20 max-sm:h-32 z-40 bg-zinc-800/50 backdrop-blur-3xl rounded-t-2xl bottom-0 
        ${cookieBanner ? 'translate-y-28 max-sm:translate-y-36' : ''}`}>
            <Image isBlurred src='https://img.playbook.com/hniIUxoFdf1mlqqW5W3X-_lnK0tw2CUl2d0hSgntQoU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzM0OTI0MDc1/LTM2MzQtNDlmMi04/YmNiLTM0ZmI4MjRh/M2MxNw'
                className='w-16 mt-1 max-sm:w-32 ' fill />
            <p className='text-foreground-500 max-sm:text-sm'>We use cookies to improve your experience. By clicking agree, you allow us such use.</p>
            <Button className='bg-violet-800 border border-zinc-50/20' onClick={() => { setCookieBanner('') }}>
                Agree
            </Button>
        </nav>
    )
}

export default Banner;
