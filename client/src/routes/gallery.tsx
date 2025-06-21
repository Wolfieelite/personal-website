import { createFileRoute } from "@tanstack/react-router";
import ImageGroup from "../components/UI/ImageGroup";

export const Route = createFileRoute("/gallery")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <ImageGroup sectionTitle="Traditional art" images={["image 1", "image 2", "image 3"]} />
      <ImageGroup sectionTitle="Ditgital art" images={["image 1", "image 2", "image 3"]} />
      <ImageGroup sectionTitle="Pixle art" images={["image 1", "image 2", "image 3"]} />
      <ImageGroup sectionTitle="Assets" images={["image 1", "image 2", "image 3"]} />
      <ImageGroup sectionTitle="Assets" images={["image 1", "image 2", "image 3"]} />
      <ImageGroup sectionTitle="3d Models" images={["image 1", "image 2", "image 3"]} />
    </>
  );
}
