import Image from "next/image";

import Dropdown from "@/components/Dropdown";
import Mookh from "@/images/mookh.png";
import Ilara from "@/images/ilara.png";
import IlaraMobile from "@/images/ilara-mobile.png";
import IlaraMobile2 from "@/images/ilara-mobile-2.png";
import Desktop from "@/images/desktop.png";
import FApp from "@/images/f-app.png";
import FApp2 from "@/images/f-app-2.png";
import Figurations from "@/images/figurations.png";
import Emalify from "@/images/emalify.png";
import Cradle from "@/images/cradle.png";
import OpticlearLogo from "@/images/opticlear-logo.png";
import Opticlear from "@/images/opticlear.png";
import Debe from "@/images/debe.png";

export default function Homepage() {
  return (
    <main className="sm:flex">
      <div className="sticky top-0 order-2 flex h-screen max-w-[32.25rem] flex-col justify-between space-y-4 bg-[#0C0C0C] px-6 py-8 text-white">
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 animate-pulse rounded-full bg-[#F45500]" />
          <p className="text-[1.375rem]/none tracking-tight">
            Leon Omondi Onyango
          </p>
        </div>
        <h1 className="text-4xl/[2.375rem] tracking-tight">
          Independent digital designer © <br />
          <span className="text-[#9D9D9D]">
            Six years working on digital interfaces for start-ups.
          </span>
        </h1>
        <p className="text-xl/6 tracking-tight">
          Achieving simplicity involves understanding user goals, automating
          processes, offering limited options, and bridging the gap between user
          intentions and product capabilities.
        </p>
        <ul className="text-xl/[normal] tracking-tight text-[#9D9D9D]">
          <li className="font-medium text-white">Product (UX/UI) Design</li>
          <li>Design Systems</li>
          <li>Identity + Visual Language</li>
          <li>Illustration</li>
        </ul>
        <footer>
          <ul className="flex space-x-6 text-xl/none tracking-tight">
            <li>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                About
              </a>
            </li>
            <li>
              <a href="mailto:omondi2leon@gmail.com">Email</a>
            </li>
            <li>
              <a
                href="https://www.behance.net/leonomondi"
                target="_blank"
                rel="noreferrer"
              >
                Behance
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/leon-omondi-6a3a77101"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </footer>
      </div>
      <div className="order-1 flex-1 uppercase text-white">
        <div className="sticky top-0 grid h-[66.666666vh] place-items-center bg-[#293241] px-6 sm:h-screen sm:px-[11.5vh]">
          <div className="w-[70%] sm:w-[70vh]">
            <div className="aspect-h-[3831] aspect-w-[3169]">
              <Image
                src={Mookh}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="absolute right-6 top-8">
            <p>Mookh Streaming App Design</p>
          </div>
        </div>
        <div className="sticky top-0 grid h-[66.666666vh] place-items-center overflow-hidden bg-[#2847B5] px-6 sm:h-screen sm:px-[11.5vh]">
          <div className="w-full sm:w-[75vh]">
            <div className="aspect-h-[3773] aspect-w-[3840]">
              <Image
                src={IlaraMobile}
                alt=""
                fill
                className="translate-x-[20%] translate-y-[5%] object-cover"
              />
            </div>
          </div>
          <div className="absolute right-6 top-6 flex items-center space-x-6 max-sm:text-sm">
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
        <div className="sticky top-0 grid h-[66.666666vh] place-items-center bg-[#22389c] px-6 sm:h-screen">
          <div className="w-full">
            <div className="aspect-h-9 aspect-w-16">
              <Image src={IlaraMobile2} alt="" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute right-6 top-6 flex items-center space-x-6 max-sm:text-sm">
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
        <div className="sticky top-0 grid h-[66.666666vh] place-items-center bg-[#2847B5] px-6 sm:h-screen">
          <div className="w-[90%]">
            <div className="aspect-h-8 aspect-w-15">
              <Image src={Desktop} alt="" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute right-6 top-6 flex items-center space-x-6 max-sm:text-sm">
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
        <div className="sticky top-0 grid h-[66.666666vh] place-items-center bg-[#22389C] px-6 sm:h-screen">
          <div className="w-full">
            <div className="aspect-h-[487] aspect-w-[1280]">
              <Image src={Ilara} alt="" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute right-6 top-6 flex items-center space-x-6 max-sm:text-sm">
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
        <div className="sticky top-0 grid h-[66.666666vh] place-items-center overflow-hidden bg-[#3F4A60] px-6 sm:h-screen">
          <div className="w-full sm:w-[70vh]">
            <div className="aspect-h-[473] aspect-w-[1024]">
              <Image
                src={FApp}
                alt=""
                fill
                className="scale-[180%] object-cover sm:scale-[220%]"
              />
            </div>
          </div>
          <div className="absolute right-6 top-6 flex items-center space-x-6 max-sm:text-sm">
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
        <div className="sticky top-0 grid h-[66.666666vh] place-items-center overflow-hidden bg-[#293141] px-6 sm:h-screen">
          <div className="w-full sm:w-[70vh]">
            <div className="aspect-h-[821] aspect-w-[1280]">
              <Image
                src={FApp2}
                alt=""
                fill
                className="scale-[180%] object-cover sm:translate-y-[15%] sm:scale-[250%]"
              />
            </div>
          </div>
          <div className="absolute right-6 top-6 flex items-center space-x-6 max-sm:text-sm">
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
          className="sticky top-0 grid h-[66.666666vh] place-items-center px-6 sm:h-screen"
          style={{
            background:
              "transparent linear-gradient(180deg, #656565 0%, #4B4949 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <div className="w-full sm:w-[90%]">
            <div className="aspect-h-[2021] aspect-w-[3840]">
              <Image src={Figurations} alt="" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute right-6 top-6 flex items-center space-x-6 max-sm:text-sm">
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
        <div className="sticky top-0 grid h-[66.666666vh] place-items-center bg-[#0073ED] px-6 sm:h-screen">
          <div className="w-full sm:w-[90%]">
            <div className="aspect-h-[89] aspect-w-[160]">
              <Image src={Emalify} alt="" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute right-6 top-6 flex items-center space-x-6 max-sm:text-sm">
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
        <div className="sticky top-0 grid h-[66.666666vh] place-items-center bg-[#CF4B40] px-6 sm:h-screen">
          <div className="w-full sm:w-[90%]">
            <div className="aspect-h-[89] aspect-w-[160]">
              <Image src={Cradle} alt="" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute right-6 top-6 flex items-center space-x-6 max-sm:text-sm">
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
        <div className="sticky top-0 grid h-[66.666666vh] place-items-center bg-[#212E2F] px-6 sm:h-screen">
          <div className="w-full sm:w-[90%]">
            <div className="aspect-h-[225] aspect-w-[557]">
              <Image src={OpticlearLogo} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="sticky top-0 grid h-[66.666666vh] place-items-center bg-[#E5E5E5] px-6 sm:h-screen">
          <div className="w-full sm:w-[90%]">
            <div className="aspect-h-[29] aspect-w-[48]">
              <Image src={Opticlear} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="sticky top-0 grid h-[66.666666vh] place-items-center bg-[#151D32] px-6 sm:h-screen">
          <div className="w-1/3">
            <div className="aspect-h-[841] aspect-w-[1324]">
              <Image src={Debe} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
