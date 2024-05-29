import ProjectCard from "@/app/_components/project-card";
import { client } from "@/app/_lib/sanity";
import { simpleProjectCard } from "@/app/_utils/interface";

async function getData() {
  const query = `*[_type == 'project'] | order(_createdAt desc) {
    title,
    _id,
    excerpt,
    slug,
    tags
  }`;

  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });

  return data;
}

export default async function ProjectList() {
  const projects: simpleProjectCard[] = await getData();

  return (
    <div className="mx-auto">
      <div className="flex w-full flex-col gap-4">
        {projects?.length > 0 &&
          projects?.map((item) => (
            <div key={item?._id}>
              <ProjectCard project={item} />
            </div>
          ))}
      </div>
    </div>
  );
}
