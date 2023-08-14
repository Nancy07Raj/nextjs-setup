"use client";
// import { getUsers } from "@/lib/getJSON";
import Link from "next/link";
import withLoader from "../withLoader";
import useFetch from "../useFetch";

function User({ style }) {
  const { data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div style={style}>
      <h1> List of Users</h1>
      {data?.map((u) => (
        <p key={u.id}>
          <Link style={{ textDecoration: "none" }} href={`/users/${u.id}`}>
            {u?.name}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default withLoader(User);
