import React from 'react'
import { useChatStore } from '../store/useChatStore';
import { useEffect } from 'react';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
const ChatContainer = () => {
  const {messages, getMessages,isMessageLoading,selectedUser} = useChatStore();

  useEffect(() => {
    getMessages(selectedUser._id); 
  },[selectedUser._id,getMessages]);
  if(isMessageLoading) return <div className="flex items-center justify-center h-full">Loading...</div>

  return(
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader/>
      <p>messages..</p>
      <MessageInput/>
    </div>
  )
}

export default ChatContainer
