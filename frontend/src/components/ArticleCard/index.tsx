"use client";

import { truncateText } from "@/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  data: {
    title: string;
    url: string;
    description: string;
    photos: string[];
    tags: string[];
  };
}

const ArticleCard = (props: IProps) => {
  const { title, photos, url, description, tags } = props.data;
  const addAndInTags = [...tags];
  addAndInTags.splice(addAndInTags.length - 1, 0, "และ");

  return (
    <div className="flex flex-col space-y-2 md:flex-row md:space-x-5">
      <div className="flex w-full md:w-2/5">
        <Image
          alt={title}
          src={photos[0]}
          width={800}
          height={800}
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="flex flex-col w-full md:w-3/4 space-y-4">
        <div className="flex flex-col space-y-2">
          <Link href={url} passHref={true}>
            <h1 className="text-xl font-bold break-words hover:opacity-80">
              {title}
            </h1>
          </Link>

          <div className="text-sm text-gray-500">
            {truncateText(description, 150)}{" "}
            <Link
              href={url}
              passHref={true}
              className="inline text-sky-400 hover:text-sky-500"
            >
              อ่านต่อ
            </Link>
          </div>

          <div className="flex space-x-2">
            <div className="text-sm text-gray-300">หมวด: </div>

            <ul className="flex flex-wrap">
              {addAndInTags.map((tag) => {
                return (
                  <li key={tag} className="flex flex-shrink-0 pr-2">
                    <Link
                      href={`?keyword=${tag}`}
                      className="text-sm underline text-gray-500 hover:text-gray-600"
                    >
                      {tag}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="md:flex space-x-6 hidden justify-between">
          {photos.slice(1).map((photo, index) => {
            return (
              <div key={index} className="w-[100px] h-[100px]">
                <Image
                  alt={title}
                  src={photo}
                  width={100}
                  height={100}
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
