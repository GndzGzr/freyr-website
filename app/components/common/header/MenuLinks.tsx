import CFAButton from "../CFAButton";
const MenuLinks = () => {
  return (
    <div className="flex items-center gap-16">
      <a href="/" className="menu-link">Ana Sayfa</a>
      <a href="/about" className="menu-link">Hakkımızda</a>
      <a href="/services" className="menu-link">Hizmetler</a>
      <a href="/contact" className="menu-link">İletişim</a>
      <CFAButton />
    </div>
  );
};

export default MenuLinks;
