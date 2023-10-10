"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { HiSearch, HiBell, HiChat } from "react-icons/hi"
import { useSession, signIn, signOut } from "next-auth/react"
import { doc, getFirestore, setDoc } from "firebase/firestore"
import app from './../Shared/firebaseConfig'
import { useRouter } from 'next/navigation'

function Header() {
  const { data : session } = useSession();
  const router = useRouter();
  const db = getFirestore(app);

  useEffect(()=>{
    saveUserInfo();
  },[session])

  const saveUserInfo=async()=>{
    if(session?.user){
      await setDoc(doc(db, "user", session.user.email), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image,
      });
    }
  };
  // Add a new doc in collection

  return (
    <div className='flex gap-3 md:gap-2 items-center p-6'>
        <Image src='/logo.png' alt='logo'
        width={50} height={50}
        className='hover:bg-[#f9f9f9] p-2 rounded-full cursor-pointer'/>
        <button className='bg-[#f9f9f9]  text-black p-2 px-4 rounded-full'>Home</button>
        <button className='font-semibold p-2 px-4 rounded-full'>Create</button>
        <div className='bg-[#DEB887] p-3 flex gap-3 items-center rounded-full w-full hidden md:flex'>
            <HiSearch className='text-[25px] text-#f9f9f9 md:hidden'/>
            <input type="text" placeholder='Search' className='bg-transparent outline-none'/>
        </div>
        <HiBell className='text-[25px] md:text-[40px] text-#f9f9f9 cursor-pointer'/>
        <HiChat className='text-[25px] md:text-[40px] text-#f9f9f9 cursor-pointer'/>
        {session?.user?
        <Image src={session.user.image} 
        onClick={()=>router.push('/'+session.user.email)} 
        alt='user-image' width={50} height={50}
        className='hover:bg-#f9f9f9 p-2 rounded-full cursor-pointer'/>:
        <button className='font-semibold p-2 px-4 rounded-full' onClick={() => signIn()}>Login</button>}
    </div>
  )
}

export default Header