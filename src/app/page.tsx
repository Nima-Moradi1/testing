'use client'
import { UserList } from "@/components/UserList";
import UserProfile from "@/components/UserProfile";
import React from "react";

export default function Home() {

  const [showText, setShowText] = React.useState(false)

  return (
    <div>
      <main className="flex flex-col items-center justify-center gap-5 my-10 border rounded-xl mx-5 p-5">
        <div>
        <h1>Home Page</h1>
        <button className="border p-2 rounded-xl cursor-pointer"
        >Click Me
        </button>
        </div>
        <div>
        <label htmlFor="randomInput">Enter Random Text : </label>
        <input className=" border p-2 rounded-xl" id="randomInput"/>
        </div>
        <div>
        <label htmlFor="specificText">Enter Specific Text : </label>
        <input className=" border p-2 rounded-xl" id="specificText"/>
        </div>
        <div>
        <label>Test With Placeholder : </label>
        <input className=" border p-2 rounded-xl" placeholder="something"/>
        </div>
        <div>
        <label htmlFor="">Test with Input Value : </label>
        <input className=" border p-2 rounded-xl" value='hey there' readOnly/>
        </div>
        <div>
          {
            showText && <span className="mx-5"
            >this is the show text!</span> 
          }
            <button
            onClick={()=> setShowText(!showText)}
            className="border p-2 rounded-xl cursor-pointer"
            >Show Text</button>
          
          
        </div>
      </main>
      <UserProfile />
      <UserList />
    </div>
  );
}
