import type { NextPage } from "next";
import Image from "next/image";
// import Link from 'next/link';

import { Dropdown, SEO } from "@components";

const Home: NextPage = () => {
  return (
    <div>
      <SEO />
      <div className="grid-cols-2 uppercase lg:grid">
        <div className="sticky top-0 h-[66.666666vh] p-3 text-[#0E0E0E] lg:h-screen lg:p-6">
          <div className="flex h-full flex-col justify-between">
            <h1 className="text-2xl lg:text-3xl 2xl:text-4xl">
              <span className="font-medium">Leon Onyango Omondi</span>
              <br />
              <span className="opacity-50">
                Independent digital designer <br />
                with over 6 years experience
              </span>
            </h1>
            <div className="flex items-end justify-between text-sm">
              <ul>
                <li className="mb-1">Identity + Visual Language</li>
                <li className="mb-1">Design Systems</li>
                <li className="mb-1">UX/UI Design</li>
                <li className="mb-1">Digital Product Design</li>
                <li>Illustration</li>
              </ul>
              <ul className="text-right">
                {/* <li className="mb-1">
                  <Link href="/about">
                    <a className="underline">About</a>
                  </Link>
                </li> */}
                <li className="mb-1">
                  <a href="mailto:omondi2leon@gmail.com" className="underline">
                    Email
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="https://www.behance.net/leonomondi"
                    className="underline"
                  >
                    Behance
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/leon-omondi-6a3a77101"
                    className="underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative text-sm text-white">
          <div className="fixed top-6 right-6 z-10 hidden space-x-2 lg:flex">
            <span>Recent Work</span>
            <span className="-mt-0.5 animate-pulse duration-1000">↓</span>
          </div>
          <div className="sticky top-0 flex h-[66.666666vh] items-center bg-[#558188] p-[7.5vw] lg:h-screen">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/mookh.png"
                alt=""
                priority
              />
            </div>
            <div className="absolute bottom-6 right-6 flex items-center space-x-6">
              <p>Mookh Streaming App Design</p>
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
