import { PortableText } from "@portabletext/react";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import { groq } from "next-sanity";

import Banner from "@/app/_components/banner";
import { Card, CardContent } from "@/app/_components/ui/card";
import { urlFor } from "@/app/_lib/image";
import { client } from "@/app/_lib/sanity";
import { fullProject } from "@/app/_utils/interface";

async function getData(slug: string) {
  const query = groq`*[_type == 'project' && slug.current == "${slug}"][0] {
      _id,
      slug,
      title,
      "imageUrl": image.asset->url,
      publishedAt,
      body,
      livePreview,
      github,
      tags
    }`;

  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });

  return data;
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project: fullProject = await getData(params.slug);
  if (!project) return;

  return (
    <div className="m-2 min-h-[calc(100vh-14.5rem)] rounded-lg bg-white px-5 py-16 shadow-sm">
      <main className="flex flex-col items-center justify-center py-12 md:py-24">
        <div className="mx-auto space-y-8">
          <div className="mx-auto w-full md:px-10 xl:px-52">
            <Banner title={project.title} />
            <span className="mt-4 block text-center text-sm font-light">
              Publicado{" "}
              {formatDistanceToNow(project?.publishedAt, {
                locale: ptBR,
                addSuffix: true,
              })}{" "}
              <span className="font-extralight text-zinc-400">
                - {format(project?.publishedAt, "dd/MM/yyyy", { locale: ptBR })}
              </span>
            </span>
          </div>
          <div className="space-y-4">
            <Card className="border-none">
              <CardContent className="flex gap-4 p-4">
                <Link
                  href={project?.livePreview}
                  target="_blank"
                  className="flex w-full items-center justify-center gap-2 rounded bg-zinc-200 py-2 text-center transition-colors hover:bg-opacity-50"
                >
                  <ExternalLinkIcon /> Ver projeto
                </Link>
                <Link
                  href={project?.github}
                  target="_blank"
                  className="flex w-full items-center justify-center gap-2 rounded bg-zinc-200 py-2 text-center transition-colors hover:bg-opacity-50"
                >
                  <GitHubLogoIcon /> Ver repositório
                </Link>
              </CardContent>
            </Card>

            <Card className="p-4">
              <CardContent className="m-0 p-0 text-center text-xl font-semibold uppercase">
                Tecnologias utilizadas
                <div className="">
                  {project.tags.map((tagItem) => (
                    <span key={tagItem} className="mx-2 text-xs sm:text-sm">
                      &#128900; {tagItem}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <div className="text-justify">
              <PortableText
                value={project?.body}
                components={myPortableTextComponents}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlFor(value).url()}
        alt=""
        width={700}
        height={700}
        className="w-full rounded-xl bg-cover bg-center py-6"
      />
    ),
  },
};
