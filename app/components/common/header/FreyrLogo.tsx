import Image from "next/image";

const FreyrLogo = () => {
  return (
    <div className="flex justify-center items-center gap-6">
      <Image src="/freyr-logo.svg" alt="Freyr Logo" width={28} height={60} />
      <div className="flex flex-col gap-2">
        <Image src="/freyr-text.svg" alt="Freyr Text" width={81} height={16} />
        <h3 className={`font-display font-light text-md`}>
          Event & Congress
        </h3>
      </div>
    </div>
  );
};
export default FreyrLogo;
