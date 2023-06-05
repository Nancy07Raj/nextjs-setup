export const getUsers = async() =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!res.ok) throw new Error('Failed to fetch users')
        return res.json();
}

export const getUser = async(userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        if(!res.ok) throw new Error('Failed to fetch user')
        return res.json();

}

export const getUserPost = async(userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        if(!res.ok) throw new Error('Failed to fetch users post')
        return res.json();
}