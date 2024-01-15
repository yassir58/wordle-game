import toast from "react-hot-toast";
import { trpc } from "../_trpc/client";
import { useContext, useEffect, useRef, useState } from "react";
import useAuth from "~/lib/hooks/useAuth";
import ProfileIcon from "./ui/icons/profile";
import { keyBoardContext } from "../_trpc/Provider";
import { globalContext } from "~/lib/context/globalContext";
import { modalContext } from "./ui/Modal";

const SendInvite: React.FC = ({}) => {
  const utils = trpc.useUtils();
  const [solution, setSolution] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [username, setUsername] = useState("");
  const [selected, setSelected] = useState<User | null>(null);
  const { user } = useAuth();

  const sendInviteMutation = trpc.gameRouter.sendInvite.useMutation({
    onSuccess: () => {
      toast.success("Challenge sent successfully");
      utils.gameRouter.invalidate();
    },
    onError: () => toast.error("Failed to send challenge"),
  });
  const { data: userList } = trpc.gameRouter.getUsers.useQuery();
  const { setModalVisible, modalVisible } = useContext(keyBoardContext);

  const sendInvite = () => {
    if (solution.length === 5) {
      sendInviteMutation.mutateAsync({
        solution: solution ?? "",
        senderId: user?.id ?? "",
        userId: selected?.id ?? "",
        senderName: user?.name ?? ''
      });
    } else toast.error("Make sure you have 5 charachter word");
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <p className="px-6 py-3 text-mediumGray dark:text-lightGray">
        Challenge Your friend with a word with your choice
      </p>
      <div className="relative h-full w-full">
        <div
          className={`absolute left-0 top-12 z-50 h-20 max-h-[20vh] w-full rounded-md border border-lines bg-white shadow-md ${
            username === "" ? "hidden" : "flex"
          }`}
        >
          {users.map((item, index) => {
            return (
              <button
                className="btn-field"
                key={index}
                onClick={() => {
                  setUsername("");
                  setSelected(item ?? {});
                }}
              >
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-md bg-[#f6e6ff]">
                  <ProfileIcon />
                </div>
                <p>{item.name}</p>
              </button>
            );
          })}
        </div>
        <input
          onBlur={() => {
            setModalVisible?.(false);
          }}
          onFocus={() => {
            setModalVisible?.(true);
          }}
          className="input-regular w-full"
          placeholder="Search for friends ..."
          onChange={(e) => {
            setUsername(e.target.value);
            const newList = userList?.filter(
              (item) =>
                item.name.includes(e.target.value) && item.id !== user?.id,
            );
            setUsers(newList ?? []);
          }}
        />
      </div>
      <input
        onBlur={() => {
          setModalVisible?.(false);
        }}
        onFocus={() => {
          setModalVisible?.(true);
        }}
        className="input-regular w-full"
        placeholder="Your word ..."
        onChange={(e) => {
          setSolution(e.target.value);
        }}
      />
      <button
        className="primary-btn w-full"
        onClick={() => {
          setModalVisible?.(false);
          sendInvite();
        }}
      >
        Send Challenge
      </button>
    </div>
  );
    }
const InviteList: React.FC = ({}) => {
  const { user } = useAuth();
  const { data: invites } = trpc.gameRouter.getInvites.useQuery({
    id: user?.id ?? "",
  });
  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
      <h1 className="text-[25px] font-semibold text-navy dark:text-white">
        Your Invites
      </h1>
      <div className="flex flex-col items-center justify-center gap-4">
        {invites?.map((item, index) => {
          return (
            <InviteItem invite={item} key={index}/>
          );
        })}
      </div>
    </div>
  );
};
interface props {
    invite: Invite
}
const InviteItem:React.FC<props> = ({invite}) =>{

    return (<div className="flex flex-col items-center justify-center gap-2 rounded-md bg-lightGray dark:bg-darkNavy px-4 py-2">
    <h1 className="text-[20px] font-semibold text-navy dark:text-white">
      {invite?.senderName}
    </h1>
    <p className="text-mediumGray dark:text-lightGray">
      Challenged you to guess word
    </p>
    <button className="primary-btn" onClick={()=> {
        toast.success (`Challenge accepted`)
    }}>Start game</button>
  </div>)
}
export default SendInvite;
export {InviteList}