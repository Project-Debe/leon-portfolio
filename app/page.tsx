import Image from "next/image";
import { client, urlFor } from "@/sanity/client";
import Dropdown from "@/components/Dropdown";
import ProjectGallery from "@/components/ProjectGallery";

// Define interfaces for type safety
interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  skills: string[];
  socialLinks: { platform: string; url: string }[];
}

interface Project {
  _id: string;
  title: string;
  slug: string;
  mainImage: any;
  images?: any[];
  description: string;
  links: { type: string; url?: string }[];
  backgroundColor: string;
}

// Revalidate data every 60 seconds
export const revalidate = 60;

export default async function Homepage() {
  // Fetch data from Sanity
  const profile: Profile = await client.fetch(`*[_type == "profile"][0]`);
  const projects: Project[] = await client.fetch(`*[_type == "project"]{..., "images": images[]}|order(order asc)`);

  return (
    <main className="landscape:flex">
      <div className="sticky top-0 order-2 flex h-[90vh] max-w-[32.25rem] flex-col justify-between space-y-4 bg-[#0C0C0C] px-6 py-8 text-white landscape:h-screen">
        <div className="flex items-center space-x-2 animate-view [animation-delay:100ms]">
          <div className="h-4 w-4 animate-pulse rounded-full bg-[#F45500]" />
          <p className="text-[1.375rem]/none tracking-tight">
            {profile?.name || "Leon Omondi Onyango"}
          </p>
        </div>
        <h1 className="text-4xl/[2.375rem] tracking-tight animate-view [animation-delay:200ms]">
          {profile?.role || "Independent digital designer"} © <br />
          <span className="text-[#9D9D9D]">
            {profile?.tagline || "6+ years working on digital interfaces for start-ups."}
          </span>
        </h1>
        <p className="text-xl/6 tracking-tight animate-view [animation-delay:300ms]">
          {profile?.bio ||
            "Achieving simplicity involves understanding user goals, automating processes, offering limited options, and bridging the gap between user intentions and product capabilities."}
        </p>
        <ul className="text-xl/[normal] tracking-tight text-[#9D9D9D] animate-view [animation-delay:400ms]">
          {profile?.skills?.map((skill, index) => (
            <li key={index} className={index === 0 ? "font-medium text-white" : ""}>{skill}</li>
          )) || (
              <>
                <li className="font-medium text-white">Product (UX/UI) Design</li>
                <li>Design Systems</li>
                <li>Identity + Visual Language</li>
                <li>Illustration</li>
              </>
            )}
        </ul>
        <footer className="animate-view [animation-delay:500ms]">
          <ul className="flex space-x-6 text-xl/none tracking-tight">
            {profile?.socialLinks?.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.platform}
                </a>
              </li>
            )) || (
                <>
                  <li>
                    <a href="/resume.pdf" target="_blank" rel="noreferrer">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="mailto:omondi2leon@gmail.com">Email</a>
                  </li>
                  <li>
                    <a href="https://www.behance.net/leonomondi" target="_blank" rel="noreferrer">
                      Behance
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/leon-omondi-6a3a77101" target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                  </li>
                </>
              )}
          </ul>
        </footer>
      </div>
      <div className="order-1 flex-1 min-w-0 uppercase text-white">
        {projects?.map((project) => (
          <div
            key={project._id}
            className="sticky top-0 grid h-[66.666666vh] place-items-center overflow-hidden px-6 sm:h-screen"
            style={{ backgroundColor: project.backgroundColor || "#293241" }}
          >
            <div className={`w-full ${project.slug === 'mookh' ? 'landscape:w-[85vh] w-[85%]' : 'sm:w-full'}`}>
              <ProjectGallery
                images={project.images}
                mainImage={project.mainImage}
                title={project.title}
              />
            </div>
            <div className="absolute right-6 top-6 flex items-center space-x-6 max-sm:text-sm">
              <p>{project.description}</p>
              {project.links && project.links.length > 0 && (
                <Dropdown items={project.links as any} />
              )}
            </div>
          </div>
        ))}
        {(!projects || projects.length === 0) && (
          <div className="h-screen w-full flex items-center justify-center bg-[#293241]">
            <p>No projects found. Please add content in Sanity Studio.</p>
          </div>
        )}
      </div>
    </main>
  );
}
