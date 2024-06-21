import FullImageView from "~/app/components/full-image-page";
import { Modal } from "../../modal";

export default function PhotoModal({
  params: { id: userId },
}: {
  params: { id: string };
}) {
  const isAsNumber = Number(userId);
  return (
    <Modal>
      {/* <img className="w-96" src={image.url} alt="" /> */}
      <FullImageView id={isAsNumber} />
    </Modal>
  );
}
