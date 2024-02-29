"use client"
import { Button, Image, Input, Tooltip } from '@nextui-org/react'
import Link from 'next/link'
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';

function Hero() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('Noreplay', 'template_dzkx4pd', form.current, '9m-i2cIAQWf0iMwIB')
            .then((result) => {
                console.log(result.text);

                toast.success('Email Sent ')
                setLoading(false);
            }, (error) => {
                console.log(error.text);
                toast.error('Something is wrong')
                setLoading(false);
            });
    };
    return (
        <>
            <div className='flex max-md:flex-col z-20 min-h-[81vh] max-md:w-auto'>
                <div className="w-1/2 max-md:hidden float-right max-md:w-full max-sm:px-3 mt-9 px-12">
                    <h1 className="max-md:text-3xl text-4xl text-center max-sm:mt-24 mt-32">
                        High-Quality, Practical-based&nbsp;
                        <Link className='underline transition text-pink-500 hover:text-violet-600' href='/notes'>Notes</Link> ,
                        <Link className='underline transition text-pink-500 hover:text-violet-600' href='/books'>Books</Link> ,
                        <Link className='underline transition text-pink-500 hover:text-violet-600' href="/proffs">Professers Lectures</Link>
                    </h1>
                    <p className="text-center mx-6 my-4 text-zinc-500">
                        Our mission is to provide you with valuable insights and information that will
                        empower you in the world of pharmacy. In each edition of <label for="email" className="cursor-pointer underline text-pink-500">Our Newsletter 💌</label> , you
                        can expect a wealth of resources, including the latest updates in pharmaceutical research, informative articles on medication management, tips for aspiring pharmacists, and much more.
                    </p>
                    <form className='w-1/2 max-md:w-full max-md:px-12 mx-auto' ref={form} onSubmit={sendEmail}>
                        <input id="email" className='outline-none border-2 border-white/50 w-full focus:border-purple-500 px-4 py-3 bg-transparent rounded-xl focus:bg-black invalid:border-red-500'
                            name='to_email' value={input} onChange={(e) => { setInput(e.target.value) }}
                            type="email" autoComplete='false' variant='bordered' placeholder="Email address *" />
                        <Button type="submit" isDisabled={input === '' ? true : false} isLoading={loading ? true : false}
                            className='w-full my-2 hover:bg-viloet-950 disabled:bg-zinc-900 border border-zinc-50/20 bg-violet-700'>Submit</Button>
                    </form>
                </div>
                <div className="w-1/2 float-left max-sm:px-0 px-14 max-md:w-full max-md:flex max-md:justify-center" >
                    <Tooltip showArrow={true} color='foreground' content="Pu Pharma 😍">
                        <Button className='herobtn max-md:absolute max-sm:right-20'>
                            Welcome to the Pu Pharma ✨
                        </Button>
                    </Tooltip>
                    <div className="ml-32 max-md:hidden flex max-md:w-1/2  max-md:h-1/2 justify-center saturate-[125%] mt-12 max-sm:ml-0 px-2 ">
                        <Image
                            isBlurred className=""
                            width={400} height={600} src="https://img.playbook.com/-9CXuDndGfTX-EPccObvVeFTun1PSr3_i1TeNkMrJQ8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzBhYmE3YzY1/LWY4YjQtNGFjOS04/NjYwLTE2NDAyMjBl/YWNmZA" alt="Pucp Image" />

                    </div>
                </div>
                <div className="w-1/2 max-md:block hidden float-right max-md:w-full max-sm:px-3 mt-9 px-12">
                    <h1 className="max-md:text-3xl text-4xl text-center max-sm:mt-24 mt-32">
                        High-Quality, Practical-based&nbsp;
                        <Link className='underline transition text-pink-500 hover:text-violet-600' href='/notes'>Notes</Link> ,
                        <Link className='underline transition text-pink-500 hover:text-violet-600' href='/books'>Books</Link> ,
                        <Link className='underline transition text-pink-500 hover:text-violet-600' href="/proffs">Professers Lectures</Link>
                    </h1>
                    <p className="text-center mx-6 my-4 text-zinc-500">
                        Our mission is to provide you with valuable insights and information that will
                        empower you in the world of pharmacy. In each edition of <span className="underline text-pink-500">Our Newsletter 💌</span> , you
                        can expect a wealth of resources, including the latest updates in pharmaceutical research, informative articles on medication management, tips for aspiring pharmacists, and much more.
                    </p>
                    <form className='w-1/2 max-md:w-full max-md:px-12 mx-auto' ref={form} onSubmit={sendEmail}>
                        <Input className='outline-none border-none'
                            name='to_email' value={input} onChange={(e) => { setInput(e.target.value) }}
                            type="email" autoComplete='false' variant='bordered' placeholder="Email address *" />
                        <Button type="submit" isDisabled={input === '' ? true : false} isLoading={loading ? true : false}
                            className='w-full my-2 hover:bg-viloet-950 disabled:bg-zinc-900 border border-zinc-50/20 bg-violet-700'>Submit</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Hero
