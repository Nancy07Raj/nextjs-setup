import { getUsers } from "@/lib/getJSON"
import Link from "next/link"

export default async function User(){
    const users = getUsers();

    const userData = await users
    return(
    <>
    <h1> List of Users</h1>
    {userData.map(u=>
            (<p key={u.id}><Link href={`/users/${u.id}`}>{u?.name}</Link></p>)
    )}
    </>
    )
}