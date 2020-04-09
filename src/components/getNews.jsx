import { useEffect, useState } from "react";
import { url, getData } from "../utils/fetchNews";

const GetNews = () => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState({});

  useEffect(() => {
    setStatus("pending");

    (async function fetchData() {
      const rawData = await getData(url);
      setData(rawData);
      setStatus("resolved");
    })();
  }, []);

  // if (status === "idle") return <p>Welcome...</p>;
  // if (status === "pending") return <p>Loading...</p>;
  // if (status === "resolved")
  // return <pre>{JSON.stringify(data, null, 1)}</pre>;
  return { status, data };
};

export default GetNews;
