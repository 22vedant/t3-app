import { getImage } from "~/server/queries";
import { Modal } from "../@modal/modal";

export default async function FullImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div>
      <img className="w-96" src={image.url} alt="" />
    </div>
  );
}
