import Head from "next/head";
import NavBar from "../components/navBar";
import PodCard from "../components/podCard";
import { useState } from "react";
import { useAppContext } from "../context/appContext";

export default function LikedImages() {
  const context = useAppContext();
  //   const [likedImages, setLikedImages] = useState(context.likedPics);

  return (
    <>
      <Head>
        <title>Likes Images</title>
        <meta
          name="description"
          content="Spacestagram: My liked images from NASA's Pictor of the day feed."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        {context.likedPics.map((pic) => (
          <PodCard key={pic.date} image={pic} />
        ))}
      </main>
    </>
  );
}
