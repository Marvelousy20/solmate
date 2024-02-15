"use client";
import Image from "next/image";
import Navbar from "@/component/Navbar";
import { motion } from "framer-motion";

export const Main = () => {
  return (
    <main className="justify-between">
      {/*Hero */}
      <div className="text-center max-w-4xl mx-auto pt-16 lg:pt-40">
        <div className="z-0 block lg:block">
          <Image
            src="/gradient.svg"
            alt="gradient"
            layout="fill"
            className="z-0"
          />
        </div>
        <div className="relative !z-20">
          <p className="font-semibold">Love. Token. Simple.</p>
          <h3 className="text-[2.25rem] md:text-5xl lg:text-7xl font-semibold mt-3 leading-[46px]">
            Discover Your Soulmate on SOLMATE
          </h3>
          <p className="mt-3 md:mt-6 px-4 md:px-0">
            Gift your soulmate while getting paid to socialize.
          </p>

          <div className="font-medium md:space-x-3 space-y-2 mt-12">
            <button className="bg-white rounded-lg py-2.5 px-4 text-black w-[13rem] md:w-aut">
              Join Telegram Channel
            </button>
            <br className="md:hidden" />
            <button className="bg-[#7F56D9] rounded-lg py-2.5 px-4 w-[13rem] md:w-auto">
              Buy $SOLM
            </button>
          </div>
        </div>
      </div>

      {/*  */}

      <section className="md:flex items-center justify-center relative hidden mt-20">
        <div className="flex w-[800px] h-[500px] z-[9999] justify-center mt-20 relative bg-[url(/notifyyy/main.svg)] bg-no-repeat bg-cover"></div>
        <motion.figure
          animate={{
            scale: [1, 1.2, 1], // Scale from 1 to 1.2 and back to 1
          }}
          transition={{
            duration: 2, // Total animation duration in seconds
            repeat: Infinity, // Repeat infinitely
            ease: "easeInOut", // Easing function
          }}
          className="h-[300px] w-[300px] absolute bottom-0 left-[16%] -mb-36 -ml-8"
        >
          <Image
            src="/notifyyy/livestream.svg"
            alt="main"
            width={300}
            height={300}
            className="w-full h-full"
          />
        </motion.figure>

        <motion.figure
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-[300px] w-[300px] absolute z-[9999] top-0 -mt-20 left-[10%]"
        >
          <Image
            src="/notifyyy/addfriend.svg"
            alt="main"
            width={300}
            height={300}
            className="w-full h-full"
          />
        </motion.figure>

        <motion.figure
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-[300px] w-[300px] absolute top-0 right-[14%] -mt-10 -mr-20"
        >
          <Image
            src="/notifyyy/subscribe.svg"
            alt="main"
            width={300}
            height={300}
            className="w-full h-full"
          />
        </motion.figure>

        <motion.figure
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-[300px] w-[300px] absolute bottom-0 right-[14%] -mb-32 -mr-20 z-[9999]"
        >
          <Image
            src="/notifyyy/newfriend.svg"
            alt="main"
            width={300}
            height={300}
            className="w-full h-full"
          />
        </motion.figure>
      </section>

      {/* Solmate */}
      <div className="mt-20 lg:mt-32 px-4 lg:px-24 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="order-2 mt-10 md:mt-0">
            <h1 className="text-[2.35rem] md:text-[3rem] font-semibold text-center md:text-start">
              SOLMATE
            </h1>
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
          <div className="order-1 md:order-2">
            <Image
              src="/solmate.svg"
              alt="solmate"
              width={500}
              height={510}
              className="hidden lg:block"
              priority
            />
            <Image
              src="/solmate.svg"
              alt="solmate"
              width={294}
              height={304}
              className="block lg:hidden"
              priority
            />
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="bg-white py-12">
        <div className="lg:flex justify-around items-center hidden">
          <Image src="/tiktok.svg" alt="tiktok" width={213} height={62} />
          <Image src="/onlyfans.svg" alt="onlyfans" width={213} height={62} />
          <Image src="/tinder.svg" alt="tinder" width={213} height={62} />
          <p className="text-black text-5xl">=</p>
          <Image src="/solmateimg.svg" alt="solmate" width={213} height={62} />
        </div>

        <div className="flex justify-around flex-col items-center lg:hidden space-y-10">
          <Image src="/tiktok.svg" alt="tiktok" width={150} height={62} />
          <Image src="/onlyfans.svg" alt="onlyfans" width={150} height={62} />
          <Image src="/tinder.svg" alt="tinder" width={150} height={62} />
          <p className="text-black text-5xl">=</p>
          <Image src="/solmateimg.svg" alt="solmate" width={150} height={62} />
        </div>
      </div>

      {/* Download */}

      <div className="py-20 lg:py-36 relative">
        <Image
          src="/cgradient.svg"
          alt="gradient"
          width={600}
          height={600}
          className="z-0 absolute -top-40 left-0"
        />
        <div className="flex flex-col lg:flex-row items-center relative !z-20 gap-2 lg:px-24">
          <Image
            src="/smart.svg"
            alt="community"
            width={802}
            height={586}
            priority
          />

          <div>
            <p className="font-semibold text-xl text-center">Coming Soon</p>
            <div className="flex flex-col lg:flex-row gap-5 mt-4">
              <div className="flex items-center border rounded-md p-2 gap-2">
                <Image
                  src="/apple.svg"
                  alt="googleplay"
                  width={38}
                  height={45}
                />
                <span>
                  Download on the <br />
                  <span className="text-xl md:text-2xl">App Store</span>
                </span>
              </div>

              <div className="flex items-center border rounded-md p-2 gap-2">
                <Image
                  src="/googleplay.svg"
                  alt="apple"
                  width={38}
                  height={45}
                />
                <span>
                  GET IT ON <br />{" "}
                  <span className="text-xl md:text-2xl">Google Play</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* People */}
      <div className="relative">
        <div className="relative h-[590px] hidden md:block">
          <Image
            src="/people.svg"
            alt="people"
            fill
            className="h-full w-full"
          />
        </div>

        <div className="relative h-[300px] block md:hidden">
          <Image
            src="/peopleMobile.svg"
            alt="people"
            fill
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Community */}
      <div className="text-center mt-28">
        <h1 className="text-3xl lg:text-[4rem] font-semibold">
          Join Community
        </h1>
        <p className="mt-2 md:mt-6">Solmate is created with love for Solana</p>

        <div className="flex justify-center gap-4 mt-6 md:mt-10">
          <Image src="/X.svg" alt="x" width={42} height={42} />
          <Image src="/Telegram.svg" alt="x" width={42} height={42} />
        </div>
      </div>
    </main>
  );
};
