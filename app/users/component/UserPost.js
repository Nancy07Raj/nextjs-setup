export default function UserPost(post){
    return(<>
            <p> Title : {post?.title}</p>
            <p> Description : {post?.body}</p>
        </>)
}