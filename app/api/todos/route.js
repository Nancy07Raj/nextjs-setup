import { NextResponse } from 'next/server';

const todosURL = "https://jsonplaceholder.typicode.com/todos"
 
export async function POST(request) {
    const {userId, title} = await request.json()

    if(!userId || !title) return NextResponse.json({"message": "Missing required data"})
  const res = await fetch( todosURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, title, completed: false }),
  });
 
  const data = await res.json();
 
  return NextResponse.json(data);
}
export async function GET() {

    // if(!userId || !title) return NextResponse.json({"message": "Missing required data"})
  const res = await fetch( todosURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
 
  const data = await res.json();
 
  return NextResponse.json(data);
}