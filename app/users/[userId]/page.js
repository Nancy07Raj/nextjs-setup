import { getUser, getUserPost, getUsers } from "@/lib/getJSON"
import UserPost from "./component/UserData"
import Link from "next/link"
import {notFound} from 'next/navigation' // provide nextjs default notfound page if no 'not-found.js' page


//generateMetadata is reserved function to create dynamic metadata
export async function generateMetadata ({params: {userId}}){
    const userData = getUser(userId) // getUser() will be deep duplicated
    const user = await userData
    
    if(!user?.name) 
    return{
        title: 'No User',
        description: 'No User Found'
    }

    return{
        title: user?.name,
        description: `This page is about ${user?.name}`
    }
}

export default async function User({params: {userId}}){
    console.log(userId,'userID')
    const userData = getUser(userId) 
    const postData = getUserPost(userId)


    // const [user, post] = await Promise.all([userData, postData]) // call 2 API simultaneously without wait for other to complete
    const user = await userData

    if(!user?.name) return notFound()

    return(
        <>
        <Link href="/users">Back to User List</Link>
        <h1>{`User ${userId} Details`}</h1>
        <p>Name  : {user?.name}</p>
        <p>Email : {user?.email}</p>
        <p>Company : {user?.company?.name}</p>
        <p>Address: {user?.address?.street},{user?.address?.city}</p>
        <br />
        <UserPost promise={postData} />
        </>
    )
}

export async function generateStaticParams(){ // will collected all id's data during build
    const users = getUsers();
    const userData = await users

   return userData.map(user=> ({
        userId : user?.id.toString()
    }))

}