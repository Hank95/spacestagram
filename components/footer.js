// footer component for spacestagram with links to github and linkedin
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-500 text-white mt-5 p-4 text-center">
      <div className="flex flex-row justify-around">
        <a href="https://www.linkedin.com/in/henry-pendleton-25255243/">
          <Image
            src="/images/linkedin.svg"
            alt="linkedin"
            height={100}
            width={100}
          />
        </a>
        <a href="https://github.com/Hank95">
          <Image
            src="/images/gitHub.svg"
            alt="Git Hub"
            height={100}
            width={100}
          />
        </a>
        <a href="https://hhpendleton.com">
          <Image
            src="/images/hp_logo2_white.svg"
            alt="Medium"
            height={100}
            width={100}
          />
        </a>
      </div>
    </footer>
  );
}
