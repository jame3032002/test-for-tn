"use client";

import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import ArticleCard from "@/components/ArticleCard";
import NotFoundArticle from "@/components/ArticleCard/NotFoundArticle";
import ArticleCardLoading from "@/components/ArticleCard/ArticleCard.loading";

interface ITrip {
  id: string;
  title: string;
  url: string;
  description: string;
  photos: string[];
  tags: string[];
}

function Home() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");
  const { data, isLoading } = useQuery({
    queryKey: ["trips", keyword],
    queryFn: getTrips,
  });

  return (
    <div className="container mx-auto w-full px-4 md:w-[600px] pb-10">
      <div className="w-full flex align-middle justify-center mt-10">
        <Link href={`/`}>
          <h1 className="text-5xl md:text-5xl leading-[unset] text-link">
            เที่ยวไหนดี
          </h1>
        </Link>
      </div>

      <div className="text-center pb-2 md:pb-1 md:pt-6">
        {keyword ? (
          <h3 className="font-bold md:text-lg">{keyword}</h3>
        ) : (
          <h3 className="font-bold md:text-lg text-gray-200">
            หาที่เที่ยวแล้วไปกัน...
          </h3>
        )}
      </div>

      <div className="w-11/12 mx-auto">
        <hr className="pb-8" />
      </div>

      <div className="flex flex-col space-y-16">
        {isLoading && (
          <>
            <ArticleCardLoading />
            <ArticleCardLoading />
            <ArticleCardLoading />
          </>
        )}
        {data?.trips.length > 0 ? (
          data?.trips.map((trip: ITrip) => {
            return <ArticleCard data={trip} key={trip.id} />;
          })
        ) : (
          <NotFoundArticle />
        )}
      </div>
    </div>
  );
}

const getTrips = async (keyword: any) => {
  const keywordQuery = keyword.queryKey[1] || "";
  const res = await axios({
    method: "GET",
    url: `http://localhost:2000/api/trips?keyword=${keywordQuery}`,
  });

  return res.data;
};

export default Home;
