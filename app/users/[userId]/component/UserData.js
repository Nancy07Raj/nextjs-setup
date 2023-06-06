export default async function UserPost({promise}){

    const post = await promise
    console.log(post,'userPost')
    return(<>
            <h2>Posts</h2>
            <p> Title : {post?.title}</p>
            <p> Description : {post?.body}</p>
        </>)
}