import { useEffect, useState } from "react";
import logoWhatsapp from "../../assets/images/logo_whatsapp.png";

export default function WhatsButton() {
    const [bottomOffset, setBottomOffset] = useState("24px");

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector("footer");
            if (!footer) return;

            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (footerRect.top < windowHeight) {
                setBottomOffset(`${footerRect.top - windowHeight + 40}px`);
            } else {
                setBottomOffset("24px");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <a
            href="https://wa.me/459998545587"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed right-6 flex flex-col items-center z-50 transition-all duration-300"
            style={{ bottom: bottomOffset }}
        >
            <div className="bg-[#25D366] p-3 rounded-full shadow-lg hover:bg-[#20b858] transition-colors duration-300">
                <img src={logoWhatsapp.src} alt="WhatsApp" className="w-8 h-8" />
            </div>
            <span
                className="text-white font-bold text-base mt-2"
                style={{
                    fontFamily: "Inria Sans, sans-serif",
                    lineHeight: "12px",
                    letterSpacing: "0%",
                }}
            >
                Contate um Vendedor
            </span>
        </a>
    );
}
