import React from 'react'

function UserInfo({userInfo}) {
    console.log(userInfo);
  return (
    <div className='flex flex-col items-center'>
        <Image src={userInfo.userImage}
        alt='userImage'
        width = {100}
        height = {100}
        className = 'rounded-full'/>

        <h2 className='text-[30px]
        font-semibold'>{userInfo.userName}</h2>
        <h2>{userInfo.email}</h2>
        <button className='p-2 px-3 rounded-full font-semibold mt-5'>Share</button>
        <button className='p-2 px-3 rounded-full font-semibold mt-5'>Edit Profile</button>
    </div>
  )
}

export default UserInfo