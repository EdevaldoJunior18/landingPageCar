import React from 'react';

interface Veiculo {
    id: number;
    nome: string;
    descricao: string;
    imagem: string;
}

export default function Sobre() {
    return (
        <>
            <div className="w-full bg-[#1A1A1A] py-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">Sobre</h2>
                <p className="text-white text-left max-w-4xl mx-auto px-4">
                    Somos a XXXXXXXX Veículos. Somos uma empresa apaixonada por conectar sonhos à realidade sobre quatro rodas.
                    Na vanguarda da revenda de veículos, oferecemos uma experiência única, onde cada carro é mais que um mero
                    meio de locomoção; é uma extensão do estilo de vida de nossos clientes. Nossa seleção cuidadosamente curada
                    abrange desde elegantes sedãs até robustos utilitários esportivos, garantindo opções para todos os gostos.
                    Além disso, comprometemo-nos com a transparência e a excelência no atendimento ao cliente, buscando sempre
                    superar expectativas. Confie em nós para encontrar o veículo perfeito que se alinha não apenas com suas
                    necessidades de transporte, mas com seus desejos e aspirações.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                </div>
            </div>

            <section className="w-full bg-[#1A1A1A] py-8 flex flex-col items-center">
                <h2 className="text-2xl font-bold text-center mb-4 text-white">Venha conhecer nossa loja</h2>
                <div className="w-full h-[300px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.219976697583!2d-53.46611858437256!3d-24.95123118400423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d4d7f5e8e9eb%3A0x5c7f8e8e8f8e8f8e!2sR.%20Curitiba%2C%202751%20-%20Alto%20Alegre%2C%20Cascavel%20-%20PR%2C%2085805-050%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1677654321098!5m2!1spt-BR!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </>
    );
}
