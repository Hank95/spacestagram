import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = useSharedState();

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

function useSharedState() {
  const [likedPics, setLikedPics] = useState([]);

  function addPic(pic) {
    setLikedPics([pic, ...likedPics]);
  }

  function removePic(likedPic) {
    let removevedPics = likedPics.filter((pic) => pic.date !== likedPic.date);
    setLikedPics(removevedPics);
  }

  return { likedPics, addPic, removePic };
}
