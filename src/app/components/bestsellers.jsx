"use client";

import clsx from "clsx";
import Image from "next/image";
import swipiCorner from "../../../public/images/swipi-corner.jpg";
import swipi from "../../../public/images/swipi.jpg";
import faynee from "../../../public/images/faynee.jpg";
import fayneeMini from "../../../public/images/faynee-mini.jpg";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Bestsellers() {
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
    return null;
  }

  return (
    <div className={clsx("py-5")}>
      <h2 className={clsx("text-3xl font-light text-center")}>Bestsellers</h2>
      <ul
        className={clsx(
          isTablet && "flex flex-wrap",
          isDesktop && "flex",
          "mt-10"
        )}
      >
        <li className={clsx(isDesktop && "w-1/4", isTablet && "w-1/2")}>
          <Link href="/category/66d5caad1b07a07f68aa46a4">
            <div>
              <Image src={swipiCorner} alt="Corner sofa Swipi" />
              <p
                className={clsx(
                  "mt-5 text-center underline underline-offset-8"
                )}
              >
                Swipi Corner
              </p>
            </div>
          </Link>
        </li>
        <li
          className={clsx(
            isDesktop && "w-1/4 ml-7",
            isTablet && "w-1/2",
            isMobile && "mt-12"
          )}
        >
          <Link href="/category/66c716a2f8e0d2162768d838">
            <div>
              <Image src={faynee} alt="Faynee linear sofa" />
              <p
                className={clsx(
                  "mt-5 text-center underline underline-offset-8"
                )}
              >
                Faynee XL
              </p>
            </div>
          </Link>
        </li>
        <li
          className={clsx(
            isDesktop && "w-1/4 ml-7",
            isTablet && "w-1/2 mt-7",
            isMobile && "mt-12"
          )}
        >
          <Link href="/category/66d5ca0c1b07a07f68aa4644">
            <div>
              <Image src={swipi} alt="Swipi linear sofa" />
              <p
                className={clsx(
                  "mt-5 text-center underline underline-offset-8"
                )}
              >
                Swipi
              </p>
            </div>
          </Link>
        </li>
        <li
          className={clsx(
            isDesktop && "w-1/4 ml-7",
            isTablet && "w-1/2 mt-7",
            isMobile && "mt-12"
          )}
        >
          <Link href="/category/66c713faf8e0d2162768d804">
            <div>
              <Image src={fayneeMini} alt="Faynee mini linear sofa" />
              <p
                className={clsx(
                  "mt-5 text-center underline underline-offset-8"
                )}
              >
                Faynee mini
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
