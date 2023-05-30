import { nanoid } from '@reduxjs/toolkit'
import React, { useEffect, useRef, useState } from 'react'
import { useAddShopMutation } from '../services/shopApi'

function Admin() {
  const [showFrom,setShowForm]=useState(false)
  const [addShop]=useAddShopMutation()
  const inputRef=useRef()
    const addClientHandler=async(e)=>{
        e.preventDefault()
        let forma=new FormData(e.target)
        const newShop=Object.fromEntries(forma.entries())
        const id=nanoid()
        await addShop({ ...newShop, id})
        setShowForm(false)
    }
    useEffect(() =>{
      inputRef.current.focus()
    },[showFrom])
  return (
    <div className='py-5 px-16 text-center flex flex-col gap-5 items-center rounded-lg '>
        <h1>Admin sahifasi</h1>
        <button onClick={()=>{setShowForm((p)=>!p)}} className='p-3 bg-black text-white rounded cursor-pointer'>Magazin yaratish</button>
        <form onSubmit={addClientHandler} style={{display:showFrom ? "flex" : "none"}} className='w-1/2 rounded-lg bg-gray-700 flex flex-col gap-4 items-center p-5 '>
        <input ref={inputRef} required type="image" name='image' className='w-3/4 outline-none rounded py-2 text-2xl' placeholder='magazin raqami' />
        <input required type="title" name='title' className='w-3/4 outline-none rounded py-2 text-2xl' placeholder='magazin manzili' />
        <input required type="price" name='price' className='w-3/4 outline-none rounded py-2 text-2xl' placeholder='hodimlar soni' />
        <input required type="tel" name='tel' className='w-3/4 outline-none rounded py-2 text-2xl' placeholder='tel raqam' />
        <button className='p-3 bg-black text-white rounded cursor-pointer' >add shop</button>
        </form>
      
    </div>
  )
}

export default Admin
