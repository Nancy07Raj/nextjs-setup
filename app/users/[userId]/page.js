import { getUser, getUserPost } from "@/lib/getJSON"
import UserPost from "../component/UserPost"

export default async function User({params: {userId}}){
    console.log(userId,'userID')
    const userData = getUser(userId)
    const postData = getUserPost(userId)

    const [user, post] = await Promise.all([userData, postData])


    return(
        <>
        <h1>{`User ${userId} Details`}</h1>
        <p>Name  : {user?.name}</p>
        <p>Email : {user?.email}</p>
        <p>Company : {user?.company?.name}</p>
        <p>Address: {user?.address?.street},{user?.address?.city}</p>
        <p>Posts:</p>
        <UserPost post={post} />
        </>
    )
}