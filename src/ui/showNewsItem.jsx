import React from "react";

const ShowNewsItem = item => {
  const { title, abstract, url, published_date, multimedia } = item;
  const { url: imageUrl, caption } = multimedia[0] || "#";
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{abstract}</p>
        <img src={imageUrl} alt={caption} />
        <p>{published_date}</p>
      </div>
    </>
  );
};

export default ShowNewsItem;
