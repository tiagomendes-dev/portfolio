"use client";

import {
  BackpackIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HomeIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import MenuMobile from "@/app/_components/menu-mobile";
import { Button } from "@/app/_components/ui/button";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigationExt = (path: string) => {
    window.open(path);
  };
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-2 px-4 py-3 md:flex-col md:justify-start lg:px-10">
        <div>
          <Image src="/avatar.png" alt="Tiago Mendes" width={52} height={52} />
        </div>
        <div className="flex flex-1 flex-col items-start leading-none md:hidden">
          <h1>Tiago Mendes</h1>
          <span className="text-sm font-light opacity-60">Front-end</span>
        </div>

        <div className="block md:hidden">
          <MenuMobile />
        </div>

        <div className="hidden md:mt-20 md:flex md:flex-col md:items-center md:gap-10">
          <ul className="w-full md:flex md:flex-col md:items-center md:gap-3 lg:items-start">
            {headerLinks.map((headerLink) => (
              <li
                className="lg:flex lg:w-full lg:items-center lg:gap-3"
                key={headerLink.name}
              >
                <Button
                  variant={pathname === headerLink.path ? "outline" : "ghost"}
                  className="flex w-full items-center justify-start text-base text-zinc-400"
                  onClick={() => handleNavigation(headerLink.path)}
                >
                  {headerLink.icon}
                  <span className="md:ml-3 md:hidden lg:block">
                    {headerLink.name}
                  </span>
                </Button>
              </li>
            ))}
          </ul>
          <ul className="md:flex md:flex-col md:items-center md:gap-3 lg:items-start">
            {socialLinks.map((socialLink) => (
              <li
                className="w-full lg:flex lg:w-full lg:items-center lg:gap-3"
                key={socialLink.name}
              >
                <Button
                  variant="ghost"
                  className="flex w-full items-center justify-start text-base text-zinc-400"
                  onClick={() => handleNavigationExt(socialLink.url)}
                >
                  {socialLink.icon}
                  <span className="md:ml-3 md:hidden lg:block">
                    {socialLink.name}
                  </span>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

const headerLinks = [
  {
    name: "Início",
    icon: <HomeIcon className="size-5 text-zinc-400" />,
    path: "/",
  },
  {
    name: "Projetos",
    icon: <BackpackIcon className="size-5 text-zinc-400" />,
    path: "/projects",
  },
  {
    name: "Contato",
    icon: <EnvelopeClosedIcon className="size-5 text-zinc-400" />,
    path: "/contact",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: <GitHubLogoIcon className="size-5 text-zinc-400" />,
    url: "https://github.com/tiagomendes-dev",
  },
  {
    name: "Instagram",
    icon: <InstagramLogoIcon className="size-5 text-zinc-400" />,
    url: "https://www.instagram.com/tiago.css/",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInLogoIcon className="size-5 text-zinc-400" />,
    url: "https://www.linkedin.com/in/tiago-mends/",
  },
];
