import Head from "next/head";
import Image from "next/image";
import PodCard from "../components/podCard";
import NavBar from "../components/navBar";
import { useState } from "react";
import {
  lastDayOfMonth,
  startOfMonth,
  subMonths,
  addMonths,
  format,
  getMonth,
} from "date-fns";

export async function getServerSideProps() {
  let today = new Date().toISOString().slice(0, 10);
  let lastMonth = subMonths(new Date(), 1).toISOString().slice(0, 10);
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=l2BazUwA8eSHdFeKmeFBJ93cuV43vAEDdqd610Xc&start_date=${lastMonth}&end_date=${today}`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  let newNasaPics = await data.map((pic) => ({ ...pic, isLiked: false }));

  return {
    props: {
      nasaPics: newNasaPics,
    },
  };
}

export default function Home({ nasaPics }) {
  const [currentPhotos, setCurrentPhotos] = useState(nasaPics.reverse());
  const [month, setMonth] = useState(startOfMonth(new Date()));
  const [isLoading, setIsLoading] = useState(false);

  // fetch photos from NASA API with date range from selected date range
  const fetchPhotos = async (startDate, endDate) => {
    setIsLoading(true);
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=l2BazUwA8eSHdFeKmeFBJ93cuV43vAEDdqd610Xc&start_date=${startDate}&end_date=${endDate}`
    );
    const data = await res.json();
    if (!data) {
      return {
        notFound: true,
      };
    }
    let newNasaPics = await data.map((pic) => ({ ...pic, isLiked: false }));
    setCurrentPhotos(newNasaPics.reverse());
    setIsLoading(false);
  };
  console.log(isLoading);

  function lastMonthHandler() {
    setMonth(subMonths(month, 1));
    fetchPhotos(
      subMonths(month, 1).toISOString().slice(0, 10),
      lastDayOfMonth(subMonths(month, 1)).toISOString().slice(0, 10)
    );
  }
  function nextMonthHandler() {
    const theNextMonth = addMonths(month, 1);
    setMonth(theNextMonth);
    let theEndDate;
    if (getMonth(theNextMonth) === getMonth(new Date())) {
      theEndDate = new Date().toISOString().slice(0, 10);
    } else theEndDate = lastDayOfMonth(theNextMonth).toISOString().slice(0, 10);
    fetchPhotos(
      startOfMonth(theNextMonth).toISOString().slice(0, 10),
      theEndDate
    );
  }

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
        <div className="flex-col mx-auto max-w-md place-items-center">
          <div className="flex flex-row justify-center font-semibold rounded-md shadow-md h-10">
            <button
              onClick={lastMonthHandler}
              className="flex-none w-auto h-auto p-1.5 hover:bg-slate-300 hover:rounded-l-md hover:cursor-pointer"
            >
              Last Month
            </button>
            <div className="grow m-1.5 text-center">
              {/* <FormateDate dateString={today} /> */}
              {format(month, "MMMM yyyy")}
            </div>
            <button
              disabled={getMonth(month) === getMonth(new Date())}
              onClick={nextMonthHandler}
              className="flex-none w-auto h-auto p-1.5 hover:bg-slate-300 hover:rounded-r-md hover:cursor-pointer"
            >
              Next Month
            </button>
          </div>
          {isLoading ? (
            <div className="flex flex-col justify-center items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto animate-spin">
                <div className="w-4 h-4 bg-gray-500 rounded-full mx-auto"></div>
              </div>
              <p className="text-center text-gray-500">Loading...</p>
            </div>
          ) : (
            currentPhotos.map((image) => {
              return <PodCard key={image.date} image={image} />;
            })
          )}
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
