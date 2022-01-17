import React, { useState } from "react";
import Image from "next/image";
import Date from "./date";

export default function PodCard({ image }) {
  const [like, setLike] = useState(false);
  const [clicked, setClicked] = useState(false);
  console.log(image);
  return (
    <div className="m-10 rounded-lg shadow-md">
      <Image
        className="rounded-t-lg"
        src={image.url}
        alt={image.title}
        width={200}
        height={200}
        layout="responsive"
      />
      <section className="mx-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ">
          Like
        </button>
        <Date dateString={image.date} className="flex justify-self-end " />
        <h2>{image.title}</h2>
        <br />
        <button
          onClick={() => {
            setClicked(!clicked);
          }}
          type="button"
          className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-2 border-black hover:bg-orange-600 text-black hover:text-white font-normal px-4 rounded mx-auto flex place-content-center"
        >
          Details
        </button>

        {clicked ? <p>{image.explanation}</p> : null}
      </section>
    </div>
  );
}
