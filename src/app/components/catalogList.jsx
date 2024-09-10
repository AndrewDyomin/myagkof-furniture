"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./carousel";
import Fancybox from "./fancybox";
import { CldImage } from "next-cloudinary";

export default function CatalogList({ array }) {
  return (
    <>
      <ul className={clsx("flex gap-8 flex-wrap mb-10 catalog-list")}>
        {array.map((item) => (
          <li key={item._id} className={clsx("w-72 catalog-item")}>
            <Link href={`/category/${item._id}`}>
              <Fancybox
                options={{
                  Carousel: {
                    infinite: false,
                    zoom: false,
                  },
                }}
              >
                <Carousel
                  options={{
                    infinite: false,
                  }}
                >
                  {item.images.map((i) => (
                    <div
                      key={i}
                      className="f-carousel__slide"
                      href={`/category/${item._id}`}
                    >
                      <CldImage
                        src={`${i}`}
                        width="288"
                        height="218"
                        crop={{
                          type: "auto",
                          source: true,
                        }}
                      />
                      {/* <img
                        src={`https://lh3.googleusercontent.com/d/${i}=w800?authuser=0`}
                        width={"100%"}
                        height={"auto"}
                        alt={`${item.name} ${item._id}`}
                      /> */}
                    </div>
                  ))}
                </Carousel>
              </Fancybox>
              <p className={clsx("text-center my-2 text-2xl")}>{item.name}</p>
              <p className={clsx("text-center pb-2 border-b-2")}>
                {item.price},00₴
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
