import { getProjects } from "@/sanity/sanity.utils";
import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <h1>My projects go here!</h1>

      {projects.map((project) => (
        <div key={project._id}>
          <Link href={`/projects/${project.slug}`}>{project.name}</Link>

          <Image
            src={project.image}
            alt={project.name}
            width={100}
            height={100}
          />
        </div>
      ))}
    </>
  );
}
