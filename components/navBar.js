import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="grid grid-cols-2 mx-12">
      <h1 className="flex text-3xl font-bold underline p-8 mx-auto self-start">
        Spacestagram
      </h1>
      <ul className="flex flex-row align-middle justify-end items-center">
        <li className="flex-initial w-32">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="flex-initial w-32">
          <Link href="/likedImages">
            <a>Your Images</a>
          </Link>
        </li>
        <li className="flex-initial w-32">
          <a href="https://www.henrypendleton.com">About Me</a>
        </li>
      </ul>
    </nav>
  );
}
