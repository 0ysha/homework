import React,{useState} from 'react'

function ChatForm({setMessages}) {


  const sendMessage=e=>{
    e.preventDefault();
    let forma=new FormData(e.target);
    const {msg}=Object.fromEntries(forma.entries())

    setMessages(p=>[...p,{msg,id:p.length+1}])
  }
  return (
    <div className='sticky bottom-0 bg-zinc-500 p-4 rounded'>
      <form onSubmit={sendMessage} className='w-full' action="">
        <textarea required name="msg" placeholder='Add comment...' className='w-full h-full p-4' id=""></textarea>
        <button className='bg-zinc-300 text-white rounded p-1'>Send</button>
      </form>
    </div>
  )
}

export default ChatForm