"use client";
import Link from "next/link";
import withLoader from "./withLoader";

function Home({ style }) {
  return (
    <main style={style}>
      Nextjs Tutorial for Higher Order Components and custom Hook
    </main>
  );
}

export default withLoader(Home);
