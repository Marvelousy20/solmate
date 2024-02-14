import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-4 lg:px-20 pt-4 z-20 relative">
      <div className="flex items-center gap-4">
        <div>
          <Image src="/avatar.svg" alt="avatar" width={32} height={40} />
        </div>
        <ul className="lg:flex gap-8 hidden">
          <li>Home</li>
          <li>Roadmap</li>
          <li>Tokenomics</li>
          <li>Whitepaper</li>
        </ul>
      </div>

      <div>
        <button className="bg-[#7F56D9] rounded-lg py-2.5 px-4">
          Buy $SOLM
        </button>
      </div>
    </div>
  );
}
