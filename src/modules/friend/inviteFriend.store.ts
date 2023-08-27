import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { FriendRequest } from "@/api/friendRequest";

interface IInviteFriendStore {
  loading: boolean;
  inviteFriend: (email: string) => Promise<void>;
  acceptFriend: (id: string) => Promise<void>;
  rejectFriend: (id: string) => Promise<void>;
}

export const useInviteFriendStore = create<IInviteFriendStore>()(
  devtools(
    immer((set) => ({
      loading: false,
      inviteFriend: async (email: string) => {
        set({ loading: true });
        await new FriendRequest().invite(email);
        set({ loading: false });
      },
      acceptFriend: async (id: string) => {
        await new FriendRequest().accept(id);
      },
      rejectFriend: async (id: string) => {
        await new FriendRequest().reject(id);
      },
    })),
  ),
);
