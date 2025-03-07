//? We made an endpoint for users, here wer're fetching them from CLIENT (useEffect)

import { useEffect, useState } from "react"

export const UserList = () => {

    const [users,setUsers] = useState([])

    useEffect(()=> {
        fetch('/api/users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
    },[])

    return (
        <div className="flex flex-col items-center justify-center gap-3 border p-3 m-4 rounded-xl">
            {users?.length > 0 ? users.map((user : {id:number , username : string}) => {
                return (
                    <div key={user?.id}>
                        <h1>{user?.username}</h1>
                    </div>
                )
            })
        : <span>No Users Found!</span>
        }
        </div>
    )
}