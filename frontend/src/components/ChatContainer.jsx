import React from 'react'
import { useChatStore } from '../store/useChatStore';
import { useEffect } from 'react';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import { useAuthStore } from '../store/useAuthStore';
const ChatContainer = () => {
  const {messages, getMessages,isMessageLoading,selectedUser} = useChatStore();
  const{ authUser }=useAuthStore()
  useEffect(() => {
    getMessages(selectedUser._id); 
  },[selectedUser._id,getMessages]);
  if(isMessageLoading) return <div className="flex items-center justify-center h-full">Loading...</div>

  return(
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader/>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message)=>(
            <div
            key ={message._id}


            className={`chat${message.senderId===authUser._id ? "chat-end":"chat-start"}`}>
             <div classname=" chat-image-avatar">
              <div classname="size-10 rounded-full border">
                <img 
                src={message.senderId===authUser._id?authUser.profilePic || "/avatar.png"
                  :selectedUser.profilePic||"/avatar.png"
                }
             
                
                alt="profile pic"/>

              </div>
             </div>
             <div classname="chat-header mb-1">
              <time classname="text-xs opacity-50 ml-1">
                {message.createdAt}
              </time>
              </div>
             </div>
          ))}
      </div>
      <MessageInput/>
    </div>
  )
}

export default ChatContainer
