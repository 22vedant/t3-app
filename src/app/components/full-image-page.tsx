import { getImage } from "~/server/queries";
import { Modal } from "../@modal/modal";

export default async function FullImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0  text-white">
      <div className="flex flex-shrink items-center justify-center border-l">
        <img className="flex-shrink object-contain" src={image.url} alt="" />
      </div>
      <div className="flex w-56 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold text-white">{image.name}</div>
      </div>
    </div>
  );
}
