import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { storeVideoDataCache } from "../../utils/slices/appSlice";

const VideoCard = (videoData) => {
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const { snippet, statistics, id } = videoData;
  const dispatch = useDispatch();
  dispatch(storeVideoDataCache(videoData));
  return (
    <Link to={"watch?v=" + id} className="m-4">
      <img
        className="w-96 h-52 rounded-xl mb-2 hover:shadow-2xl"
        src={snippet.thumbnails.medium.url}
        alt={snippet.localized.title}
      />
      <div className="flex">
        <img
          className="rounded-full w-10 h-10"
          src={snippet.thumbnails.default.url}
          alt={snippet.localized.title}
        />
        <div className="ml-4">
          <h2 className="w-60 rounded-xl font-bold text-left">
            {snippet.localized.title}
          </h2>
          <p className="text-left w-60 rounded-xl">{snippet.channelTitle}</p>
          <div className="flex text-gray-800 text-sm">
            <p>{statistics.viewCount} Views - </p>
            <p>
              {new Date(snippet.publishedAt).toLocaleDateString(
                "en-US",
                dateOptions
              )}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
