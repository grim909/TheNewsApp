import React from "react";

const NewsFeed = ({ title, url, urlToImage, description }) => {
  return (
    <div className="grid place-items-center m-5 p-5 border rounded-lg shadow-md border-black">
      <a href={url}>
        <img className=" md:w-4/5 items-center rounded-lg" src={urlToImage} />
        <div>
          <div className="md:text-xl underline mb-2">{title}</div>
          <div className="text-xs md:text-sm">{description}</div>
        </div>
      </a>
    </div>
  );
};

export default NewsFeed;
