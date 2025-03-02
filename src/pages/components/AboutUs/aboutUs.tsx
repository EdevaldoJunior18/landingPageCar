import React from 'react';

export default function Sobre() {
    return (
        <>
            <div id="quem-somos" className="w-full bg-[#1A1A1A] py-8">
                <div className="w-full border-t-2 border-white max-w-7xl mx-auto mb-6 sm:mb-10"></div>

                <h2 className="text-3xl font-bold text-center mb-8 text-white">Sobre nós</h2>

                <p className="text-white mx-auto text-justify px-6 md:px-20 lg:px-72"
                    style={{
                        fontFamily: 'Inria Sans, sans-serif',
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '1.5'
                    }}>
                    Somos a XXXXXXXX Veículos. Somos uma empresa apaixonada por conectar sonhos à realidade sobre quatro rodas.
                    Na vanguarda da revenda de veículos, oferecemos uma experiência única, onde cada carro é mais que um mero
                    meio de locomoção; é uma extensão do estilo de vida de nossos clientes. Nossa seleção cuidadosamente curada
                    abrange desde elegantes sedãs até robustos utilitários esportivos, garantindo opções para todos os gostos.
                    Além disso, comprometemo-nos com a transparência e a excelência no atendimento ao cliente, buscando sempre
                    superar expectativas. Confie em nós para encontrar o veículo perfeito que se alinha não apenas com suas
                    necessidades de transporte, mas com seus desejos e aspirações.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4"></div>
            </div>

            <section className="w-full bg-[#1A1A1A] py-8 flex flex-col items-center">
                <div className="w-full border-t-2 border-white max-w-7xl mx-auto mb-6 sm:mb-10"></div>

                <h2 className="text-3xl font-bold text-center mb-8 text-white">Venha conhecer nossa loja</h2>

                <div className="w-full h-[250px] sm:h-[300px] lg:h-[321px]">
                    <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.219976697583!2d-53.46611858437256!3d-24.95123118400423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d4d7f5e8e9eb%3A0x5c7f8e8e8f8e8f8e!2sR.%20Curitiba%2C%202751%20-%20Alto%20Alegre%2C%20Cascavel%20-%20PR%2C%2085805-050%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1677654321098!5m2!1spt-BR!2sus"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </>
    );
}
