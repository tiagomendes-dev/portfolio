import {
  BackpackIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  HomeIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/app/_components/ui/button";
import { Separator } from "@/app/_components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";

export default function MenuMobile() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigationExt = (path: string) => {
    window.open(path);
  };
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon />
      </SheetTrigger>
      <SheetContent className="h-full w-[400px] sm:w-[540px]">
        <SheetHeader className="h-full">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription className="flex h-full flex-col justify-between">
            <ul className="flex flex-col items-start gap-1">
              {headerLinks.map((headerLink) => (
                <li
                  className="flex w-full items-center gap-3"
                  key={headerLink.name}
                >
                  <Button
                    variant={pathname === headerLink.path ? "outline" : "ghost"}
                    className="flex w-full items-center justify-start text-base font-normal text-zinc-400"
                    onClick={() => handleNavigation(headerLink.path)}
                  >
                    {headerLink.icon}
                    <span className="ml-3">{headerLink.name}</span>
                  </Button>
                </li>
              ))}
            </ul>

            <div>
              <Separator className="mb-2" />

              <ul className="flex justify-between">
                {socialLinks.map((socialLink) => (
                  <li key={socialLink.name}>
                    <Button
                      variant="ghost"
                      onClick={() => handleNavigationExt(socialLink.url)}
                    >
                      {socialLink.icon}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
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
