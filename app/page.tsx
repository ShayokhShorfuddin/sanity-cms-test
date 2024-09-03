import { getProjects } from "@/sanity/sanity.utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <h1>My projects go here!</h1>

      {projects.map((project: any) => (
        <div key={project._id}>
          <h1> {project.name} </h1>
        </div>
      ))}
    </>
  );
}
