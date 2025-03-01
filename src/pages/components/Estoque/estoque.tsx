import React from 'react';

interface Veiculo {
    id: number;
    nome: string;
    descricao: string;
    imagem: string;
}

export default function Estoque() {
    const veiculos: Veiculo[] = [
        { id: 1, nome: 'Ram 2500 Laramie 6.7 2018', descricao: 'Clássico em ótimo estado', imagem: 'https://static.wixstatic.com/media/51bed3_4a6ddf48c9964ef0a40d4e78fdc1e6f0~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/51bed3_4a6ddf48c9964ef0a40d4e78fdc1e6f0~mv2.jpg' },
        { id: 2, nome: 'Toyota Corolla Xei 2.0 2020', descricao: 'Sedan moderno e econômico', imagem: 'https://revistacarro.com.br/wp-content/uploads/2019/12/Toyota-Corolla-XEi_4-1080x675.jpg' },
        { id: 3, nome: 'Gol GTI 1995', descricao: 'Esportivo nacional', imagem: 'https://i.ytimg.com/vi/4uZW78S_HzM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALCmQjt7zFGnlEJ8naomFv2RmIhQ' },
        { id: 4, nome: 'Jeep Renegade', descricao: 'SUV compacto 4x4', imagem: 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2024/02/06123446/JeepRenegadeMY24.jpg' },
        { id: 5, nome: 'Chevette 1980', descricao: 'Clássico restaurado', imagem: 'https://ateliedocarro.com.br/wp-content/uploads/2018/12/chevette80_01.jpg' },
        { id: 6, nome: 'Onix 2022', descricao: 'Hatch popular', imagem: 'https://imgsapp.em.com.br/app/noticia_127983242361/2021/04/17/1257870/20210416191605965912u.jpg' },
        { id: 7, nome: 'Corolla 2019', descricao: 'Sedan confiável', imagem: 'https://carango.com.br/f.php?w=810&h=620&cc=0&zc=1&src=https://carango.nyc3.digitaloceanspaces.com/images/veiculos/2022/10/toyota-corolla-2019-2-0-xei-16v-flex-4p-automatico-flex-108692-8ehf6y.jpg' },
        { id: 8, nome: 'Ranger 2021', descricao: 'Picape robusta', imagem: 'https://bocamafra.com.br/wp-content/uploads/2024/12/321d1308296d4c338b42b37c667c735d_1701889902443.jpg' },
    ];

    return (
        <div className="w-full bg-[#1A1A1A] py-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Estoque</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                {veiculos.map((veiculo) => (
                    <div key={veiculo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={veiculo.imagem}
                            alt={veiculo.nome}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{veiculo.nome}</h3>
                            <p className="text-gray-600 text-sm mb-4">{veiculo.descricao}</p>
                            <button className="bg-black text-white border border-black px-4 py-2 rounded hover:bg-white hover:text-black transition-colors w-full font-bold"
                            >Ver Detalhes
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}