import Link from "next/link";

export default function About(){
    // throw new Error('Not today!') // code to throw new error, which will handle by error.js
    return(
        <main>
        <Link href="/">Home</Link>
        <h1>About Page</h1>
        </main>
    )
    
}