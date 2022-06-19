import type { NextPage } from "next";
import Image from "next/image";

import { Dropdown, SEO } from "@components";

const Home: NextPage = () => {
  return (
    <div>
      <SEO />
      <div className="snap-y snap-mandatory grid-cols-2 uppercase lg:grid">
        <div className="sticky top-0 h-[66.666666vh] p-3 text-[#0E0E0E] lg:h-screen lg:p-6">
          <div className="flex h-full flex-col justify-between">
            <div>
              <span className="mb-1.5 inline-block text-sm font-medium leading-5 lg:mb-3 lg:text-base">
                Leon Onyango Omondi
              </span>
              <h1 className="text-2xl tracking-tight lg:text-3xl 2xl:text-4xl">
                <span className="opacity-50">
                  Independent digital designer <br />
                  with
                </span>{" "}
                6+ years experience
              </h1>
            </div>
            <div className="flex items-end justify-between text-sm">
              <ul>
                <li className="mb-1">Identity + Visual Language</li>
                <li className="mb-1">Design Systems</li>
                <li className="mb-1">UX/UI Design</li>
                <li>Illustration</li>
              </ul>
              <ul className="text-right">
                <li className="mb-1">
                  <a
                    href="/resume.pdf"
                    className="underline-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    About
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="mailto:omondi2leon@gmail.com"
                    className="underline-link is-link"
                  >
                    Email
                  </a>
                </li>
                <li className="mb-1">
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
          </div>
        </div>
        <div className="relative text-sm text-white">
          <div className="fixed top-6 right-6 z-10 hidden space-x-2 lg:flex">
            <span>Recent Work</span>
            <span className="-mt-0.5 animate-pulse duration-1000">↓</span>
          </div>
          <div className="sticky top-0 flex h-[66.666666vh] items-center bg-[#293241] p-[7.5vw] lg:h-screen">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/mookh.png"
                alt=""
                priority
              />
            </div>
            <div className="absolute bottom-6 right-6 flex items-center space-x-6 text-sm">
              <p>Mookh Streaming App Design</p>
              <Dropdown
                items={[
                  {
                    type: "Prototype",
                    url: "https://xd.adobe.com/view/5b072815-7ba8-4140-9003-5408d9ed6ee0-0e54/grid",
                  },
                  { type: "Website" },
                ]}
              />
            </div>
          </div>
          <div className="sticky top-0 flex h-[66.666666vh] items-center bg-[#2847B5] p-[6.5vw] lg:h-screen">
            <div className="aspect-w-1 aspect-h-1 mx-auto w-full">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/ilara-mobile.png"
                alt=""
                priority
                className="translate-x-[15%]"
              />
            </div>
            <div className="absolute bottom-6 right-6 flex items-center space-x-6 text-sm">
              <p>Ilara Health Monitoring App</p>
              <Dropdown
                items={[
                  {
                    type: "Prototype",
                    url: "https://tinyurl.com/2p8s575s",
                  },
                  { type: "Website" },
                ]}
              />
            </div>
          </div>
          <div className="sticky top-0 flex h-[66.666666vh] items-center bg-[#22389C] px-[1vw] py-[7.5vw] lg:h-screen">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <Image
                layout="fill"
                objectFit="cover"
                src="/images/ilara-mobile-2.png"
                alt=""
                priority
              />
            </div>
            <div className="absolute bottom-6 right-6 flex items-center space-x-6 text-sm">
              <p>Ilara Health Monitoring App</p>
              <Dropdown
                items={[
                  {
                    type: "Prototype",
                    url: "https://tinyurl.com/2p8s575s",
                  },
                  { type: "Website" },
                ]}
              />
            </div>
          </div>
          <div className="sticky top-0 flex h-[66.666666vh] items-center bg-[#2847B5] px-[1vw] py-[7.5vw] lg:h-screen">
            <div className="aspect-w-4 aspect-h-3 mx-auto w-3/4">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/desktop-3.png"
                alt=""
                style={{ boxShadow: "0px 3px 26px #00000029" }}
                priority
              />
            </div>
            <div className="absolute bottom-6 right-6 flex items-center space-x-6 text-sm">
              <p>Patient App Admin Panel</p>
              <Dropdown
                items={[
                  {
                    type: "Prototype",
                    url: "https://tinyurl.com/427t6e42",
                  },
                  { type: "Website" },
                ]}
              />
            </div>
          </div>
          <div className="sticky top-0 flex h-[66.666666vh] items-center bg-[#22389C] py-[7.5vw] lg:h-screen">
            <div className="aspect-w-2 aspect-h-1 w-full">
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="10%"
                src="/images/ilara.png"
                alt=""
                priority
              />
            </div>
            <div className="absolute bottom-6 right-6 flex items-center space-x-6 text-sm">
              <p>Ilara Health EMR/HMIS</p>
              <Dropdown
                items={[
                  {
                    type: "Prototype",
                    url: "https://tinyurl.com/27m3pudq",
                  },
                  { type: "Website" },
                ]}
              />
            </div>
          </div>
          <div className="sticky top-0 flex h-[66.666666vh] items-center bg-[#3F4A60] px-[2vw] py-[7.5vw] lg:h-screen">
            <div className="aspect-w-4 aspect-h-3 w-full">
              <Image
                layout="fill"
                objectFit="cover"
                src="/images/f-app.png"
                alt=""
                priority
              />
            </div>
            <div className="absolute bottom-6 right-6 flex items-center space-x-6 text-sm">
              <p>F-App Fitness Tracking App</p>
              <Dropdown
                items={[
                  {
                    type: "Prototype",
                    url: "https://xd.adobe.com/spec/9d99725e-ac61-4d6f-5558-a9ae9f523cf9-eba8/grid",
                  },
                  { type: "Website" },
                ]}
              />
            </div>
          </div>
          <div className="sticky top-0 flex h-[66.666666vh] items-center bg-[#293141] py-[7.5vw] lg:h-screen">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <Image
                layout="fill"
                objectFit="cover"
                src="/images/f-app-2.png"
                alt=""
                priority
              />
            </div>
            <div className="absolute bottom-6 right-6 flex items-center space-x-6 text-sm">
              <p>F-App Fitness Tracking App</p>
              <Dropdown
                items={[
                  {
                    type: "Prototype",
                    url: "https://xd.adobe.com/spec/9d99725e-ac61-4d6f-5558-a9ae9f523cf9-eba8/grid",
                  },
                  { type: "Website" },
                ]}
              />
            </div>
          </div>
          <div
            className="sticky top-0 flex h-[66.666666vh] items-center py-[7.5vw] lg:h-screen"
            style={{
              background:
                "transparent linear-gradient(180deg, #656565 0%, #4B4949 100%) 0% 0% no-repeat padding-box",
            }}
          >
            <div className="aspect-w-16 aspect-h-9 mx-auto w-3/4">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/figurations-1.png"
                alt=""
                priority
              />
            </div>
            <div className="absolute bottom-6 right-6 flex items-center space-x-6 text-sm">
              <p>Figurations Website</p>
              <Dropdown
                items={[
                  {
                    type: "Prototype",
                  },
                  { type: "Website", url: "https://figurations.xyz" },
                ]}
              />
            </div>
          </div>
          <div className="sticky top-0 flex h-[66.666666vh] items-center bg-[#0073ED] py-[7.5vw] lg:h-screen">
            <div className="aspect-w-16 aspect-h-9 mx-auto w-3/4">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/emalify.png"
                alt=""
                priority
              />
            </div>
            <div className="absolute bottom-6 right-6 flex items-center space-x-6 text-sm">
              <p>Emalify Dashboard Redesign</p>
              <Dropdown
                items={[
                  {
                    type: "Prototype",
                    url: "https://xd.adobe.com/spec/c9ffc7c0-8ccb-419f-731e-08be6877d2d3-bfce/grid",
                  },
                  { type: "Website" },
                ]}
              />
            </div>
          </div>
          <div className="sticky top-0 flex h-[66.666666vh] items-center bg-[#CF4B40] py-[7.5vw] lg:h-screen">
            <div className="aspect-w-16 aspect-h-9 mx-auto w-3/4">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/cradle.png"
                alt=""
                priority
              />
            </div>
            <div className="absolute bottom-6 right-6 flex items-center space-x-6 text-sm">
              <p>Cradle Arts Website</p>
              <Dropdown
                items={[
                  {
                    type: "Prototype",
                    url: "https://xd.adobe.com/view/9fd5fca2-3e2e-4d60-6130-55df21270b28-e9e4/grid",
                  },
                  { type: "Website" },
                ]}
              />
            </div>
          </div>
          <div className="sticky top-0 flex h-[66.666666vh] items-center bg-[#212E2F] py-[7.5vw] lg:h-screen">
            <div className="aspect-w-16 aspect-h-9 mx-auto w-1/2">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/opticlear-logo.png"
                alt=""
                priority
              />
            </div>
          </div>
          <div className="sticky top-0 flex h-[66.666666vh] items-center bg-[#E5E5E5] py-[7.5vw] lg:h-screen">
            <div className="aspect-w-16 aspect-h-9 mx-auto w-3/4">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/opticlear.png"
                alt=""
                priority
              />
            </div>
          </div>
          <div className="sticky top-0 flex h-[66.666666vh] items-center bg-[#151D32] py-[7.5vw] lg:h-screen">
            <div className="aspect-w-1 aspect-h-1 mx-auto w-1/4">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/debe.png"
                alt=""
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
