import React, { useState } from "react";
import Image from "next/image";
import FormateDate from "./date";
import { useAppContext } from "../context/appContext";

export default function PodCard({ image }) {
  const [like, setLike] = useState(image.isLiked);
  const [clicked, setClicked] = useState(false);
  const context = useAppContext();

  function handleLike() {
    if (like) {
      image.isLiked = false;
      setLike(false);
      context.removePic(image);
    } else {
      image.isLiked = true;
      setLike(true);
      context.addPic(image);
    }
  }
  return (
    <div className="m-10 rounded-lg shadow-md">
      <Image
        className="rounded-t-lg object-cover"
        src={image.url}
        alt={image.title}
        width={200}
        height={200}
        layout="responsive"
      />
      <section className="mx-5">
        <button
          onClick={handleLike}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg  m-1.5 w-full"
        >
          {like ? "Unlike" : "Like"}
        </button>
        <h2>{image.title}</h2>
        <FormateDate dateString={image.date} className="text-right" />
        <br />
        <button
          onClick={() => {
            setClicked(!clicked);
          }}
          type="button"
          className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-2 border-black hover:bg-orange-600 text-black hover:text-white font-normal px-4 rounded mx-auto flex place-content-center m-1.5"
        >
          Details
        </button>

        {clicked ? <p>{image.explanation}</p> : null}
      </section>
    </div>
  );
}
