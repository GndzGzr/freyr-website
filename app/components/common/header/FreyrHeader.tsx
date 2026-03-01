import FreyrLogo from "./FreyrLogo";
import MenuLinks from "./MenuLinks";
const FreyerHeader = () => {
  return (
    <div className="h-fit flex justify-between font-sans border-2 border-solid border-gray w-full py-4 px-24">
      <FreyrLogo />
      <MenuLinks />
    </div>
  );
};

export default FreyerHeader;
