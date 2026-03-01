import Image from "next/image";
import { FaPhone, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const FreyrFooter = () => {
    return (
        <footer className="text-[var(--light-font)] pt-12 pb-6">
            <div className="container mx-auto px-8">
                {/* Top section */}
                <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-[var(--border-gray)]">
                    {/* Left: Logo + Contact Info */}
                    <div className="flex flex-col gap-6">
                        {/* Logo */}
                        <div className="flex items-center gap-4">
                            <Image src="/freyr-logo.svg" alt="Freyr Logo" width={24} height={52} />
                            <div className="flex flex-col gap-1">
                                <Image src="/freyr-text.svg" alt="Freyr Text" width={72} height={14} />
                                <span className="font-display font-light text-sm text-[var(--light-font)]">
                                    Event & Congress
                                </span>
                            </div>
                        </div>

                        {/* Contact Person */}
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold text-lg text-[var(--light-font)]">Ufuk Kanburoğlu</p>
                            <p className="text-md text-[var(--passive-dark-color)]">Genel Müdür</p>
                        </div>

                        {/* Contact Details */}
                        <div className="flex flex-col gap-3">
                            <a href="tel:+905422473635" className="flex items-center gap-3 text-md text-[var(--light-font)] hover:text-[var(--golden-background)] transition-colors">
                                <FaPhone className="text-[var(--golden-background)] text-base shrink-0" />
                                +90 542 247 36 35
                            </a>
                            <a href="mailto:ufuk@freyreventcongress.com" className="flex items-center gap-3 text-md text-[var(--light-font)] hover:text-[var(--golden-background)] transition-colors">
                                <MdOutlineEmail className="text-[var(--golden-background)] text-xl shrink-0" />
                                ufuk@freyreventcongress.com
                            </a>
                            <a href="https://www.freyreventcongress.com.tr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-md text-[var(--light-font)] hover:text-[var(--golden-background)] transition-colors">
                                <TbWorld className="text-[var(--golden-background)] text-xl shrink-0" />
                                www.freyreventcongress.com.tr
                            </a>
                        </div>
                    </div>

                    {/* Right: Quick Links */}
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold text-md text-[var(--golden-background)]">Hızlı Bağlantılar</p>
                        <nav className="flex flex-col gap-3">
                            <a href="/" className="text-md text-[var(--light-font)] hover:text-[var(--golden-background)] transition-colors">Ana Sayfa</a>
                            <a href="/services" className="text-md text-[var(--light-font)] hover:text-[var(--golden-background)] transition-colors">Hizmetler</a>
                            <a href="/about" className="text-md text-[var(--light-font)] hover:text-[var(--golden-background)] transition-colors">Hakkımızda</a>
                            <a href="/contact" className="text-md text-[var(--light-font)] hover:text-[var(--golden-background)] transition-colors">İletişim</a>
                        </nav>
                    </div>
                </div>

                {/* Follow Us */}
                <div className="flex flex-col items-center gap-5 pt-8">
                    <p className="font-semibold text-md text-[var(--golden-background)]">Bizi Takip Edin</p>
                    <div className="flex items-center gap-4">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-[var(--golden-background)] flex items-center justify-center text-[var(--golden-background)] hover:bg-[var(--golden-background)] hover:text-black transition-colors">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-[var(--golden-background)] flex items-center justify-center text-[var(--golden-background)] hover:bg-[var(--golden-background)] hover:text-black transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-[var(--golden-background)] flex items-center justify-center text-[var(--golden-background)] hover:bg-[var(--golden-background)] hover:text-black transition-colors">
                            <FaXTwitter />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-[var(--golden-background)] flex items-center justify-center text-[var(--golden-background)] hover:bg-[var(--golden-background)] hover:text-black transition-colors">
                            <FaFacebookF />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FreyrFooter;