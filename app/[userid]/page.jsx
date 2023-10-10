"use client"
import React, { useEffect } from 'react'
import { getFirestore } from 'firebase/firestore'
import app from '../Shared/firebaseConfig'
import UserInfo from '../components/Pins/UserInfo'

function Profile({params}) {
  const db = getFirestore(app);
  const [ userInfo, setUserInfo ] = useState(); 
  useEffect(()=>{
    console.log(params.userId.replace('%40', '@'))
    if (params){
      getUserInfo(params.userId.replace('%40', '@'))
    }
  }, [params])

  const getUserInfo=async()=>{
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
      console.log("Document data: ", docSnap.data());
      setUserInfo(docSnap.data())
    }
    else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  return (
    <div>
    {userInfo?
      <UserInfo userInfo = {userInfo}/>
      :null}
    </div>
  )
}

export default Profile