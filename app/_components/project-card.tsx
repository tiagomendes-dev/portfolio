import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { simpleProjectCard } from "@/app/_utils/interface";

interface ProjectCardProps {
  project: simpleProjectCard;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-zinc-100 shadow-sm">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>
          {project.tags.map((tagItem) => (
            <span
              key={tagItem}
              className="mr-4 inline-flex items-center text-xs text-zinc-400 sm:text-sm"
            >
              {tagItem}
            </span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{project.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/projects/project/${project?.slug?.current}`}
          className="flex items-center justify-center gap-2 rounded bg-zinc-200 px-4 py-2 text-center transition-colors hover:bg-opacity-50"
        >
          Ver projeto <ArrowRightIcon />
        </Link>
      </CardFooter>
    </Card>
  );
}
