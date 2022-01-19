import Link from "next/link";
import { useAppContext } from "../context/appContext";

export default function NavBar() {
  const context = useAppContext();

  return (
    <nav className="grid grid-cols-2 mx-12">
      <h1 className="flex text-3xl font-bold underline p-8 mx-auto self-start">
        Spacestagram
      </h1>
      <ul className="flex flex-row align-middle justify-end items-center h-20 justify-items-center m-auto">
        <li className="flex-initial w-32 text-center m-5 rounded-lg bg-gray-700 text-slate-100 hover:shadow-lg hover:text-red-600 text-xl">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="flex-initial w-40 text-center m-5 rounded-lg bg-gray-700 text-slate-100 hover:shadow-lg hover:text-red-600 text-xl">
          <Link href="/likedImages">
            <a>
              Images
              <span className="w-10 h-10 bg-blue-600 mx-2 rounded-full hover:text-white">
                {context.likedPics.length > 0 ? context.likedPics.length : null}
              </span>
            </a>
          </Link>
        </li>
        <li className="flex-initial w-32 text-center m-5 rounded-lg bg-gray-700 text-slate-100 hover:shadow-lg hover:text-red-600 text-xl">
          <a href="https://www.henrypendleton.com">About Me</a>
        </li>
      </ul>
    </nav>
  );
}
