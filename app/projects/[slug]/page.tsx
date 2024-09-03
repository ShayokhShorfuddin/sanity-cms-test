import { getProject } from "@/sanity/sanity.utils";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.slug;
  const project = await getProject(slug);

  return (
    <div>
      <Image src={project.image} alt={project.name} height={500} width={500} />
      <p> {project.name} </p>
    </div>
  );
}
