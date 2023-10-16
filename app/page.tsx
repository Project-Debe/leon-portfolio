import Image from 'next/image';

import Mookh from '@/images/mookh.png';
import IlaraMobile from '@/images/ilara-mobile.png';

export default function Leon() {
  return (
    <div className="sm:flex">
      <div className="order-2 bg-[#0C0C0C] max-w-[32.25rem] py-8 px-6 text-white flex flex-col justify-between sticky top-0 space-y-4 h-screen">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#F45500] rounded-full animate-pulse" />
          <p className="text-[1.375rem]/none tracking-tight">Leon Omondi Onyango</p>
        </div>
        <h1 className="text-4xl/[2.375rem] tracking-tight">
          Independent digital designer © <br />
          <span className="text-[#9D9D9D]">Six years working on digital interfaces for start-ups.</span>
        </h1>
        <p className="text-xl/6 tracking-tight">
          Achieving simplicity involves understanding user goals, automating processes, offering limited options, and
          bridging the gap between user intentions and product capabilities.
        </p>
        <ul className="text-[#9D9D9D] text-xl/[normal] tracking-tight">
          <li className="text-white font-medium">Product (UX/UI) Design</li>
          <li>Design Systems</li>
          <li>Identity + Visual Language</li>
          <li>Illustration</li>
        </ul>
        <ul className="flex space-x-6 text-xl/none tracking-tight">
          <li>
            <a href="/resume.pdf" className="underline-link" target="_blank" rel="noreferrer">
              About
            </a>
          </li>
          <li>
            <a href="mailto:omondi2leon@gmail.com" className="underline-link is-link">
              Email
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/leonomondi"
              className="underline-link is-link"
              target="_blank"
              rel="noreferrer"
            >
              Behance
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/leon-omondi-6a3a77101"
              className="underline-link is-link"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="order-1 flex-1">
        <div className="sticky top-0 bg-[#293241] h-[66.666666vh] sm:h-screen grid place-items-center px-6 sm:px-[11.5vh]">
          <div className="w-full sm:w-[70vh]">
            <div className="aspect-w-[3169] aspect-h-[3831]">
              <Image src={Mookh} alt="" fill className="object-cover" priority />
            </div>
          </div>
        </div>
        <div className="sticky top-0 bg-[#2847B5] h-[66.666666vh] sm:h-screen grid place-items-center px-6 sm:px-[11.5vh]">
          <div className="w-full sm:w-[75vh]">
            <div className="aspect-w-[3840] aspect-h-[3773] translate-x-[20%]">
              <Image src={IlaraMobile} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
