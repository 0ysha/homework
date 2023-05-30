import React from 'react'

function Chats({messages,setMessages}) {
  const deleteBtn=id=>{
    let filtered =messages.filter(item=>item.id !==id)
    setMessages(filtered)
  }
  return (
    <div className='h-screen overflow-y-scroll bg-red-light p-10 flex flex-col items-start gap-4'>
      {messages.map(item=>(
        <div
          key={item.id}
          className='p-4 bg-zinc-800 text-white rounded w-1/2 flex justify-between items-center'
        >
          <h2>{item.msg}</h2>
          <button
            onClick={()=>deleteBtn(item.id)}
            className='bg-[#dbdbdb] text-black rounded'
          >
            delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Chats