//We're creating this section because now we want to pass PROPS to components and mock components

import React from 'react'


interface UserProps {
    displayName? : string , 
    username? : string , 
    email? : string , 
    isEmailVerified? : boolean
}

const UserProfile = ({
    displayName , 
    username , 
    email , 
    isEmailVerified
}:UserProps) => {

  return (
    <div className='flex flex-col items-center justify-center border p-3 rounded-xl mx-5'>
    <div>UserProfile</div>
    <div>Name : { displayName && displayName?.length > 30 ? displayName?.slice(0,25).concat('...') : displayName}</div>
    <div>Username : {username}</div>
    <div>Email Address : {email}</div>
    <div>Verified :
        <span>
        {isEmailVerified ? 'Email is Verified' : 'Email is not Verified'}
        </span> 
    </div>
    </div>
  )
}

export default UserProfile