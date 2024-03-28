/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import New from "./NewItem";
import NewSkeleton from "./Skeleton";

export default function News(): JSX.Element {
  const [news, setNews] = useState<InewProps[]>([]);

  useEffect(() => {
    (async () => {
      const response: { data: IapiResponse } = await axios({
        baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
        url: "all",
        method: "GET",
        params: {
          api_token: process.env.NEXT_PUBLIC_API_KEY,
          language: "en",
          page: Math.floor(Math.random() * 100),
        },
      });

      setNews(response.data.data);
    })();
  }, []);

  return (
    <section
      id="news"
      className="w-full pb-6 z-30 overflow-hidden my-6 flex items-center flex-col gap-14"
    >
      <h3 className=" text-center text-2xl">
        Stay up to date about &quot;Finance & Market News&quot;
      </h3>

      <div className=" flex flex-wrap items-center justify-center gap-12 w-full">
        {news.length ? (
          news.map((item, key) => {
            return (
              <New
                key={key}
                description={item?.description}
                published_at={item?.published_at}
                url={item?.url}
                image_url={item?.image_url}
                source={item?.source ?? { name: "unknown" }}
              />
            );
          })
        ) : (
          <NewSkeleton />
        )}
      </div>
      <p className="w-[40rem] text-center font-light max-[550px]:w-[22rem] ">
        I used &quot;marketaux&quot; because it has a wide range of financial
        and market data available, covering various markets and regions around
        the world. This could be useful for those who want to stay up-to-date
        with the latest market trends.
      </p>
      <p className="w-[40rem] text-center font-light max-[550px]:w-[22rem] ">
        This API provides a real-time data updates, which can be crucial for
        those who need to react quickly to market changes. This could be
        particularly important for day traders.
      </p>
    </section>
  );
}
