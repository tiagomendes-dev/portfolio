import ProjectCard from "@/app/_components/project-card";
import ProjectList from "@/app/_components/project-list";

export default function Projects() {
  return (
    <div className="m-2 min-h-[calc(100vh-14.5rem)] rounded-lg bg-white px-5 py-16 shadow-sm">
      <main className="flex flex-col items-center justify-center py-12 md:py-24">
        <h3 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
          Meus projetos
        </h3>

        <div>
          <ProjectList />
        </div>
      </main>
    </div>
  );
}
