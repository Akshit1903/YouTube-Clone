import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { hideSideBar } from "../../utils/slices/appSlice";
import ChipBar from "./ChipBar";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideSideBar());
  }, [dispatch]);
  const videoID = searchParams.get("v");
  const videoData = useSelector((store) => store.app.videoDataCache[videoID]);
  console.log(videoData);
  const title =
    videoData.snippet !== undefined
      ? videoData.snippet.title
      : videoData.snippet.localized.title;
  console.log(videoData);
  return (
    <div className="flex">
      <div className="mt-6 ml-28">
        <iframe
          className=""
          width="870"
          height="450"
          src={"https://www.youtube.com/embed/" + videoID}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1 className="font-semibold text-3xl mt-2">{title}</h1>
        <h2 className="text-md text-gray-800 mt-2">
          {videoData.snippet.channelTitle}
        </h2>
      </div>
      <div>
        <ChipBar />
      </div>
    </div>
  );
};

export default Watch;
