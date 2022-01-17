import Head from "next/head";
import Image from "next/image";
import PodCard from "../components/podCard";
import NavBar from "../components/navBar";
import { useEffect } from "react";

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=l2BazUwA8eSHdFeKmeFBJ93cuV43vAEDdqd610Xc&start_date=2021-12-20&end_date=2021-12-31"
  );
  const data = await res.json();

  let newNasaPics = await data.map((pic) => ({ ...pic, isLiked: false }));

  return {
    props: {
      nasaPics: newNasaPics,
    },
  };
}

export default function Home({ nasaPics }) {
  // let newNasaPics = nasaPics.forEach((pic) => {
  //   return {
  //     pic: pic,
  //     isLiked: false,
  //   };
  // });
  // useEffect(()=>{

  // },[])
  console.log(nasaPics);
  return (
    <div>
      <Head>
        <title>Spacestagram</title>
        <meta
          name="description"
          content="Spacestagram: Image-sharing from the final frontier - Shopify Frontend Intern Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main className="mx-10">
        <div className="flex-col mx-auto max-w-md">
          {nasaPics.map((image) => {
            return <PodCard key={image.date} image={image} />;
          })}
        </div>
      </main>

      <footer className="max-h-40">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
