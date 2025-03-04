import React from 'react';
import logo from '../../assets/images/logo_fipal.png';

export default function Navbar() { 
    return (
        <nav id="top" className="bg-[#1A1A1A] min-h-[180px] flex flex-col items-center justify-center px-4 py-6">
            <img
                src={logo.src}
                alt="Logo"
                className="w-[251px] h-[41.82px] mb-4 max-w-full" />
            <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12 justify-center items-center">
                <li>
                    <a href="#top" className="text-white text-lg relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-4px] hover:after:h-[2px] hover:after:w-full hover:after:bg-white">
                        HOME
                    </a>
                </li>
                <li>
                    <a href="#estoque" className="text-white text-lg relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-4px] hover:after:h-[2px] hover:after:w-full hover:after:bg-white">
                        ESTOQUE
                    </a>
                </li>
                <li>
                    <a href="#quem-somos" className="text-white text-lg relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-4px] hover:after:h-[2px] hover:after:w-full hover:after:bg-white">
                        QUEM SOMOS
                    </a>
                </li>
                <li>
                    <a href="#contato" className="text-white text-lg relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-4px] hover:after:h-[2px] hover:after:w-full hover:after:bg-white">
                        CONTATO
                    </a>
                </li>
            </ul>
        </nav>
    );
}