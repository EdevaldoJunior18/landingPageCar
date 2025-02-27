export default function Header() {
  return (
    <div
      id="header-section"
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
        backgroundColor: '#000000',
        opacity: 1,
      }}
    >
      <h3 className="text-white text-[40px] font-oswald font-normal mb-6">
        CONTATE-NOS
      </h3>
      <h1 className="text-white text-[100px] font-oswald font-black mb-4">
        CONTATOS
      </h1>
      <h4 className="text-white text-[24px] font-oswald font-light mt-6 flex items-center">
        Home <span className="mx-2 font-bold relative top-[-0.13em]">→</span>{' '}
        Contatos
      </h4>

      <div className="absolute top-[60px] right-[150px] flex gap-[70px]">
        <a
          href="#header-section"
          id="inicio-button"
          className="text-white font-oswald font-light relative group text-[18px]"
        />
        <button className="text-white font-oswald font-light relative group text-[18px]">
          <span className="group-hover:text-orange-500 text-[20px] font-semibold">
            INICIO
          </span>
          <div className="absolute top-[-60px] left-0 w-full h-[3px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-all"></div>
        </button>
        <button className="text-white font-oswald font-normal relative group text-[18px]">
          <span className="group-hover:text-orange-500 text-[20px] font-semibold">
            SOBRE NÓS
          </span>
          <div className="absolute top-[-60px] left-0 w-full h-[3px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-all"></div>
        </button>
        <button className="text-white font-oswald font-light relative group text-[18px]">
          <span className="group-hover:text-orange-500 text-[20px] font-semibold">
            CONTATOS
          </span>
          <div className="absolute top-[-60px] left-0 w-full h-[3px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-all"></div>
        </button>
      </div>
    </div>
  );
}
