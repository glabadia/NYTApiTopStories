import React from "react";
import ShowNewsItem from "./showNewsItem";
import GetNews from "../components/getNews";

const ShowNews = () => {
  const { status, data } = GetNews();

  if (status === "idle") return <p>Idle...</p>;
  if (status === "pending") return <p>Loading...</p>;

  if (status === "resolved") {
    return (
      <div className="container">
        {data.results.map((item, idx) => (
          <ShowNewsItem key={idx} {...item} />
        ))}
      </div>
    );
  }
};

export default ShowNews;
