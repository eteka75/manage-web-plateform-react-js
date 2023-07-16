import React from 'react';
import Illustration from '../assets/illustration-intro.svg';

function Hero() {
  return (
    <div className="pb-4 shadow-lg mb-8 z-10">
    <div className='container flex flex-col-reverse md:flex-row
    items-center px-4 mx-auto mt-10 space-y-0 md:space-y-0'>
        <div className="flex flex-col mb-32 space-y-8 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-start">
                Bring Everyone together to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
                <a href="https://yahoo.fr" className="p-3 px-4 font-medium px-6 pt-2 text-white
                    bg-brightRed rounded-full baseline hover:bg-brightRedLight hover:shadow">
                    Démarrer
                </a>
            </div>

        </div>
        <div className='md:w-1/2'>
                <img src={Illustration} alt="Illustration" />
        </div>
    </div>
    </div>
  )
}

export default Hero
