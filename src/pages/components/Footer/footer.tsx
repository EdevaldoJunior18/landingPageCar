import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#1A1A1A] py-10 text-white flex flex-col items-center">
            <div className="w-full border-t-2 border-white max-w-7xl mx-auto"></div>

            <div className="mt-6">
                <img src="/assets/images/logo.png" alt="Logo da Empresa" className="h-16 w-auto" />
            </div>

            <div className="max-w-7xl w-full px-4 flex flex-col md:flex-row justify-between items-start text-left space-y-8 md:space-y-0 py-6">
                <div className="w-1/3 flex flex-col items-start">
                    <h3 className="text-lg font-semibold mb-4">CONTATO</h3>
                    <p>44 9999-9999 - João</p>
                    <p>44 9999-9999 - João</p>
                    <p>joao@contato.com</p>
                </div>

                <div className="w-1/3 flex flex-col items-center text-center">
                    <h3 className="text-lg font-semibold mb-4">HORÁRIO DE ATENDIMENTO</h3>
                    <p>Segunda à Sexta: 08h - 18h</p>
                    <p>Sábado: 08h - 16h</p>
                    <p>Domingo: Não há atendimento</p>
                </div>

                <div className="w-1/3 flex flex-col items-end text-right">
                    <h3 className="text-lg font-semibold mb-4">ENDEREÇO</h3>
                    <p>R. Curitiba, 2751 - Centro, Cascavel - PR</p>
                    <p>CEP: 85876-564</p>
                </div>
            </div>

            <div className="w-full border-t-2 border-white max-w-7xl mx-auto"></div>

            <div className="mt-6 text-center text-sm text-gray-400">
                Copyright 2025 • Desenvolvido por Lenna
            </div>
        </footer>
    );
}
