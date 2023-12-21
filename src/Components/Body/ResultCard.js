import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { storeVideoDataCache } from "../../utils/slices/appSlice";

const ResultCard = (videoData) => {
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const { snippet, id } = videoData;
  const dispatch = useDispatch();
  dispatch(storeVideoDataCache(videoData));
  return (
    <Link to={"/watch?v=" + id.videoId} className="m-4 px-10 py-3 flex">
      <img
        className="h-52 rounded-xl mb-2 hover:shadow-2xl"
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
      />
      <div className="ml-4">
        <h2 className="rounded-xl font-bold text-left">{snippet.title}</h2>
        <p className="text-left rounded-xl">{snippet.channelTitle}</p>
        <div className="flex text-gray-800 text-sm">
          <p>
            {new Date(snippet.publishedAt).toLocaleDateString(
              "en-US",
              dateOptions
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ResultCard;
