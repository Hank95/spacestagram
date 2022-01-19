import Head from "next/head";
import NavBar from "../components/navBar";
import PodCard from "../components/podCard";
import { useAppContext } from "../context/appContext";
import Footer from "../components/footer";

export default function LikedImages() {
  const context = useAppContext();
  //   const [likedImages, setLikedImages] = useState(context.likedPics);

  return (
    <>
      <Head>
        <title>Liked Images</title>
        <meta
          name="description"
          content="Spacestagram: My liked images from NASA's Pictor of the day feed."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <h1 className="text-2xl font-semibold underline p-8 mx-auto self-center">
          Liked Images
        </h1>
        {context.likedPics.length > 0 ? null : (
          <h2 className="text-xl font-extrabold mx-60">
            You havent liked any images yet.
          </h2>
        )}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {context.likedPics.map((pic) => (
            <PodCard key={pic.date} image={pic} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
