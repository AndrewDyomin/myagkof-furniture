'use client'

import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { changeFilter } from "../lib/slices/filterSlice";
import { useDispatch } from "react-redux";

export default function Hero() {
  
  const dispatch = useDispatch()
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1199px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1200px)" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null
  }

  return (
    <>
      <div
        className={clsx(
          "bg-[url('/images/grey-bed.jpg')] bg-cover bg-no-repeat bg-center h-[40rem] flex justify-center items-center"
        )}
      >
        <div className={clsx(!isMobile && 'w-1/3', "py-10 px-10 bg-neutral-700/90")}>
          <h1 className={clsx(isMobile && "text-2xl", isTablet && "text-4xl", isDesktop && "text-5xl", "text-center text-white")}>
            Comfort you can rely on
          </h1>
          <p className={clsx("text-center mt-5 text-white")}>
            Production of upholstered furniture to order
          </p>
          <Link href='/category'>
            <button
              onClick={() => dispatch(changeFilter(''))}
              className={clsx(
                "border-solid border-2 rounded-md py-1 px-5 text-white mt-5 block mx-auto"
              )}
            >
              Catalog
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
