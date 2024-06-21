import FullImageView from "~/app/components/full-image-page";

export default function PhotoPage({
  params: { id: userId },
}: {
  params: { id: string };
}) {
  const isAsNumber = Number(userId);
  return <FullImageView id={isAsNumber} />;
}
