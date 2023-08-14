import React from "react";
import Link from "next/link";
import "@/public/styles/header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1>Header </h1>
      <Link href="/users">User</Link>
      <Link href="/about">About</Link>
      <Link href="/product">Product</Link>
    </div>
  );
};

export default Header;
