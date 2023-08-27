import { WrapperMenuItem } from "@/common/components/WrapperMenuItem/WrapperMenuItem";
import InviteIcon from "../../../../public/icon/invite.svg";

export const Invitations = () => {
  return (
    <div>
      <WrapperMenuItem onClick={() => console.log(1)} title={"Invitations"} icon={<InviteIcon />} />
    </div>
  );
};
