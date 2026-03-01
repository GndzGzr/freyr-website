import CFAButton from "../CFAButton";
const MenuLinks = () => {
  return (
    <div className="flex items-center gap-16">
      <a href="/" className="menu-link">Home</a>
      <a href="/about" className="menu-link">About</a>
      <a href="/services" className="menu-link">Services</a>
      <a href="/contact" className="menu-link">Contact</a>
      <CFAButton />
    </div>
  );
};

export default MenuLinks;
