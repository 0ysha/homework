import React,{useState} from 'react'
import ChatForm from './ChatForm'
import Chats from './Chats'

function Main() {
  const [messages,setMessages]=useState([])

  return (
    <main className='text-lg w-full p-48'>
      <Chats messages={messages} setMessages={setMessages} />
      <ChatForm setMessages={setMessages} />
    </main>
  )
}

export default Main