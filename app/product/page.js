import Link from "next/link";

export default function Product() {
  return (
    <div>
      <h1>Product Page</h1>
      <Link href="/product/cloth">Product description</Link> <br />
      <Link href="/product/cloth/1">Product Details</Link> <br />
    </div>
  );
}
