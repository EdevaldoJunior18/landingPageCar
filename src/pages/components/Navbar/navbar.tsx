export default function Navbar() {
    return (
        <nav className="bg-black h-[134px] flex items-center justify-center">
            <ul className="flex space-x-8">
                <li><a href="#" className="text-white text-lg">Home</a></li>
                <li><a href="#" className="text-white text-lg">Estoque</a></li>
                <li><a href="#" className="text-white text-lg">Quem Somos</a></li>
                <li><a href="#" className="text-white text-lg">Contato</a></li>
            </ul>
        </nav>
    );
}
