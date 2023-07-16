import React from 'react';
import Logo from '../assets/logo-white.svg';
import Facebook from '../assets/icon-facebook.svg';
import Youtube from '../assets/icon-youtube.svg';
import Twitter from '../assets/icon-twitter.svg';
import Pinterest from '../assets/icon-pinterest.svg';
import Instagram from '../assets/icon-instagram.svg';

function Footer() {
  return (
    <footer className="bg-veryDarkBlue text-slate-200">
        <div className="container flex flex-col-reverse justify-between px-4 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
            <div className="flex_flex-col-reverse items-center justify-between space-y-4 sm:mt-8 md:flex-row md:space-y-4 md:items-start">
                <div className="mx-auto text-sm my-6 text-center md:hidden">
                Copyright &copy; 2022, Tout droit réservé.
                </div>
                <div className="flex justify-center space-x-4">
                    <img src={Logo} alt="Logo" className='h-8' />
                </div>
                <div className="flex justify-center space-x-4">
                    <a href="/v1">
                        <img src={Facebook} alt="/" className="h-8" />
                    </a>
                    <a href="/v1">
                        <img src={Youtube} alt="/" className="h-8" />
                    </a>
                    <a href="/v1">
                        <img src={Twitter} alt="/" className="h-8" />
                    </a>
                    <a href="/v1">
                        <img src={Pinterest} alt="/" className="h-8" />
                    </a>
                    <a href="/v1">
                        <img src={Instagram} alt="/" className="h-8" />
                    </a>
                </div>
            </div>
            <div className="flex justify-around  space-x-32 ">
                <div className="flex flex-col space-y-3 text-white">
                    <a href="/m" className="hover:text-brightRed">
                        Accueil
                    </a>
                    <a href="/m" className="hover:text-brightRed">
                        Tarifs
                    </a>
                    <a href="/m" className="hover:text-brightRed">
                        Produits
                    </a>
                    <a href="/m" className="hover:text-brightRed">
                        A propos
                    </a>

                </div>

                <div className="flex flex-col space-y-3 text-white">
                    <a href="/m" className="hover:text-brightRed">
                        Carrières
                    </a>
                    <a href="/m" className="hover:text-brightRed">
                        Communité
                    </a>
                    <a href="/m" className="hover:text-brightRed">
                        Condition d'utilisations
                    </a>
                    <a href="/m" className="hover:text-brightRed">
                        Cookies
                    </a>
                </div>
            </div>
            <div className="flex  flex-col justify-between">
                <form action="">
                    <div className="flex space-x-3">
                        <input placeholder='Entrez votre adresse email...' type="text" className="flex-1 px-4 py-2 w-[300px] rounded-full focus:outline-none" />
                        <button className="px-6 text-white bg-brightRed py-2 rounded-full hover:bg-brightRedLight focus:outline-none">Go</button>
                    </div>
                </form>
                <div className="hidden text-white text-sm md:block">
                Copyright &copy; 2022, Tout droit réservé.
            </div>
            </div>


        </div>
    </footer>
  )
}

export default Footer
