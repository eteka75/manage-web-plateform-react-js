import React,{useState} from 'react';
import Logo from '../assets/logo.svg';

function Navbar() {
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }
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
                <button onClick={handleNav} className={nav?"open block  hamburger md:hidden focus:outline-none":"block  hamburger md:hidden focus:outline-none"}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>

        </nav>
        <div className="md:hidden ">
            <div className={nav?"absolute top-8 flex flex-col items-center self-end  mt-8 font-bold bg-white  sm:w-auto sm:self-center left-4 right-4 drop-shadow-md duration-300":'hidden absolute top-0 left-[-120%] duration-300 flex flex-col items-center self-end  mt-8 font-bold bg-white sm:w-auto sm:self-center  drop-shadow-md'}>
                <a className='hover:text-white hover:bg-brightRed border-b w-full px-8 py-4' href="http://">Tarifs</a>
                <a className='hover:text-white hover:bg-brightRed border-b w-full px-8 py-4' href="http://">Produits</a>
                <a className='hover:text-white hover:bg-brightRed border-b w-full px-8 py-4' href="http://">A propos</a>
                <a className='hover:text-white hover:bg-brightRed border-b w-full px-8 py-4' href="http://">Carrières</a>
                <a className='hover:text-white hover:bg-brightRed border-b w-full px-8 py-4' href="http://">Communauté</a>

            </div>
        </div>
    </div>
  )
}

export default Navbar
