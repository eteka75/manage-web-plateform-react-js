import React from 'react';
import Logo from '../assets/logo.svg';

function Navbar() {
  return (
    <div className="shadow-md_">
        <nav className='container relative mx-auto p-4'>
            <div className='flex items-center justify-between'>
                <div className="pt-2">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="whitespace-nowrap md:flex  hidden space-x-6">
                    <a className='hover:text-darkGrayishBlue' href="http://">Tarifs</a>
                    <a className='hover:text-darkGrayishBlue' href="http://">Produits</a>
                    <a className='hover:text-darkGrayishBlue' href="http://">A propos</a>
                    <a className='hover:text-darkGrayishBlue' href="http://">Carrières</a>
                    <a className='hover:text-darkGrayishBlue' href="http://">Communauté</a>
                </div>
                <a href="https://yahoo.fr" className="hidden md:block p-3 text-xs font-medium px-6 pt-2 text-white
                bg-brightRed rounded-full baseline hover:bg-brightRedLight hover:shadow">
                    Démarrer
                </a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
