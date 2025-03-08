'use client'
import React, { useState } from 'react'

const LoginForm = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error , setError] = useState('')
    const [success , setSuccess] = useState('')

    const handleLogin = (e: React.FormEvent<HTMLButtonElement>): void => {
        setSuccess('')
        setError('')
        e.preventDefault();
        fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            }),
        })
        .then((res) => res.json())
        .then(()=> {
            setSuccess('Success Logging In.')
        })
        .catch((err) =>  {
            console.log(err);
            setError('Error Logging in')
        } )
    }

  return (
    <div className='w-full flex items-center justify-center mt-20'>
          <form className='flex flex-col items-center justify-center gap-y-5'>
            <div className='text-red-500'>{error}</div>
            <div className='text-green-500'>{success}</div>
    <label htmlFor="username">Username</label>
    <input className='outline-1 rounded-xl p-1 m-1'
     type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
    <label htmlFor="password">Password</label>
    <input className='outline-1 rounded-xl p-1 m-1'
     type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

    <button className='border p-2 rounded-xl px-5 cursor-pointer disabled:text-gray-400 disabled:cursor-default'
    disabled={!username || !password}
    onClick={handleLogin}>Login</button>
        </form>
    </div>
 
  )
}

export default LoginForm