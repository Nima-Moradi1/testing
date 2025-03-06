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
    <>
    <div>UserProfile</div>
    <div>Name : {displayName}</div>
    <div>Username : {username}</div>
    <div>Email Address : {email}</div>
    <div>Verified :
         {isEmailVerified ? 'Email is Verified' : 'Email is not Verified'}
    </div>
    </>
  )
}

export default UserProfile