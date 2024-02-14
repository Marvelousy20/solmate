import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" px-20 relative py-16 mt-20">
      <div className="flex justify-between">
        <div className="">
          <div className="mb-8">
            <Image src="/avatar.svg" alt="avatar" width={32} height={40} />
          </div>
          <ul className="flex space-x-8 text-[#667085]">
            <li>Overview</li>
            <li>Roadmap</li>
            <li>Tokenomics</li>
            <li>Whitepaper</li>
            <li>Swap</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-sm mb-2">Stay up to date</h3>

          <div className="space-x-2 mt-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="py-2.5 px-2 rounded-lg bg-transparent border border-white border-opacity-20"
            />
            <button
              className="bg-[#7F56D9] rounded-lg py-2.5 px-4
          900="
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="opacity-20 mt-16 mb-12" />

      <div className="opacity-50">© 2024 Solmate. All rights reserved.</div>
      <div className="absolute inset-0 z-20">
        <Image src="/footer.svg" alt="footer" fill objectFit="cover" />
      </div>
    </footer>
  );
}
