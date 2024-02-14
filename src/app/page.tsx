import Image from "next/image";
import Navbar from "@/component/Navbar";

export default function Home() {
  return (
    <main className="justify-between">
      {/*Hero */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="z-0">
          <Image
            src="/gradient.svg"
            alt="gradient"
            layout="fill"
            className="z-0"
          />
        </div>
        <div className=" relative !z-20">
          <p className="font-semibold ">Love. Token. Simple.</p>
          <h3 className="text-7xl font-semibold mt-3">
            Discover Your Soulmate on SOLMATE
          </h3>
          <p className="mt-6">
            Gift your soulmate while getting paid to socialize.
          </p>

          <div className="font-medium space-x-3 mt-12">
            <button className="bg-white rounded-lg py-2.5 px-4 text-black">
              Join Telegram Channel
            </button>
            <button className="bg-[#7F56D9] rounded-lg py-2.5 px-4">
              Buy $SOLM
            </button>
          </div>
        </div>
      </div>
      {/* Solmate */}
      <div className="mt-32 lg:px-24">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[3rem]">SOLMATE</h1>
            <div>
              The Solana Meme for all memes. <br /> <br /> Solmate brings love
              and riches to the Solana community. With a billion <br /> dollar
              market cap gem. <br /> <br /> Solmate is all you need on Solana{" "}
              <br /> <br />
              Become a Solmate whale now. <br /> <br />
              <ul className="list-disc list-inside">
                <li>No team allocation</li>
                <li>No airdrop</li>
                <li>Fair Launch</li>
                <li>Created out of love and strength of Solana</li>
                <li>Backed by some of the best ETH and Sol whales.</li>
              </ul>
            </div>
          </div>
          <div>
            <Image src="/solmate.svg" alt="solmate" width={500} height={510} />
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="bg-white py-12">
        <div className="flex justify-around items-center">
          <Image src="/tiktok.svg" alt="tiktok" width={213} height={62} />
          <Image src="/onlyfans.svg" alt="onlyfans" width={213} height={62} />
          <Image src="/tinder.svg" alt="tinder" width={213} height={62} />
          <p className="text-black">=</p>
          <Image src="/solmateimg.svg" alt="solmate" width={213} height={62} />
        </div>
      </div>

      {/* Download */}

      <div className="py-36 relative">
        <Image
          src="/cgradient.svg"
          alt="gradient"
          width={600}
          height={600}
          className="z-0 absolute -top-40 left-0"
        />
        <div className="flex items-center relative !z-20 gap-2 lg:px-24">
          <Image
            src="/smart.svg"
            alt="community"
            width={802}
            height={586}
            priority
          />

          <div>
            <p className="font-semibold text-xl text-center">Coming Soon</p>
            <div className="flex gap-5 mt-4">
              <div className="flex items-center border rounded-md p-2">
                <Image
                  src="/apple.svg"
                  alt="googleplay"
                  width={38}
                  height={45}
                />
                <span>
                  Download on the <br />
                  <span className="text-2xl">App Store</span>
                </span>
              </div>

              <div className="flex items-center border rounded-md p-2">
                <Image
                  src="/googleplay.svg"
                  alt="apple"
                  width={38}
                  height={45}
                />
                <span>
                  GET IT ON <br /> <span className="text-2xl">Google Play</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* People */}
      <div className="relative">
        <div className="relative h-[590px]">
          <Image src="/people.svg" alt="people" fill className="h-full" />
        </div>
      </div>

      {/* Community */}
      <div className="text-center mt-28">
        <h1 className="text-[4rem] font-semibold">Join Community</h1>
        <p>Solmate is created with love for Solana</p>

        <div className="flex justify-center gap-4 mt-10">
          <Image src="/X.svg" alt="x" width={42} height={42} />
          <Image src="/Telegram.svg" alt="x" width={42} height={42} />
        </div>
      </div>
    </main>
  );
}
