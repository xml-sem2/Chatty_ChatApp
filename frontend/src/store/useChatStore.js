import {create} from 'zustand';
import toast from 'react-hot-toast';
import { axiosInstance } from '../lib/axios';
import { Socket } from 'socket.io-client';
import { useAuthStore } from './useAuthStore';

export const useChatStore = create((set,get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUserSelected: false,
  isMessagesLoading: false,


  getUsers: async () => {
    set({isUsersLoading: true});
    try {
      const res = await axiosInstance.get("/messages/user");
      set({users: res.data});
    } catch (error) {
      toast.error(error.response.data.message);
    }finally{
      set({isUsersLoading: false});
    }
  },
 
  getMessages: async (userId) => {
    set({isMessagesLoading: true});
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({messages: res.data});
   
    } catch (error) {
      toast.error(error.response.data.message);
    }finally{
      set({isMessagesLoading: false});
    }
  },

  sendMessage: async (messagedata) => {
     const {selectedUser,messages} = get();
     try{
        const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`,messagedata);
        set({messages: [...messages,res.data]});
     }catch(error){
       toast.error(error.response.data.message);
     }
  },
  subscribeToMessages: ()=> {
      const {selectedUser} = get()
      if(!selectedUser) return;
      const socket =  useAuthStore.getState().socket;
      // todo: optimize this one later
      socket.on("newMessage", (newMessage) => {
        set({
          messages: [...get().messages, newMessage]
        });
  });
},
unsubscribeFromMessages: () => {}
  //optimize later
  setSelectedUser: (selectedUser) => set({ selectedUser}),
}));