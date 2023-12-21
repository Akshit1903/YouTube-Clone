import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { YOUTUBE_POPULAR_VIDEOS_API } from "../../constants/apis";
import VideoCard from "./VideoCard";
import { useDispatch } from "react-redux";
import { showSideBar } from "../../utils/slices/appSlice";
import ChipBar from "./ChipBar";

const Body = () => {
  const [mostPopularVideos, setMostPopularVideos] = useState(null);
  const dispatch = useDispatch();
  const getYouTubeVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
    const videos = await data.json();
    setMostPopularVideos(videos.items);
  };
  useEffect(() => {
    getYouTubeVideos();
    dispatch(showSideBar());
  }, [dispatch]);
  if (!mostPopularVideos) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }
  return (
    <div>
      <ChipBar />
      <div className="flex flex-wrap justify-center items-start">
        {mostPopularVideos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Body;
