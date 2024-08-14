"use client";

import clsx from "clsx";
import Image from "next/image";
import Table from "../../../public/images/table.webp";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export default function AboutUs() {
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
    <>
      <div className={clsx("bg-[#8a8475] py-5 px-2 mb-5", isTablet && "py-8")}>
        <h1
          className={clsx(
            isMobile && "text-3xl",
            isTablet && "text-4xl",
            isDesktop && "text-5xl",
            "text-center text-white mb-3"
          )}
        >
          О нас
        </h1>
        <p className={clsx("text-center text-white")}>
          З якою метою працює наше підприємство, яку несе користь?
        </p>
      </div>
      <div className={clsx("mb-5", isDesktop && 'grid grid-cols-2 gap-10 items-center pl-10')}>
        <p className="mb-5">
          Місія нашої компанії полягає в створенні та постачанні високоякісних
          меблів, що надають комфорт, стиль та естетичну насолоду нашим
          клієнтам. Ми прагнемо створювати інноваційні та функціональні рішення,
          які відповідають сучасним вимогам життя та виражають унікальний
          характер кожного клієнта.
          <br /><br/>
          Ця місія визначає основний фокус компанії на створенні високоякісних,
          стильних та комфортних меблів, а також відзначає зобов&apos;язання до
          високих стандартів якості та сталого розвитку. Крім того, вона
          віддзеркалює прагнення компанії до інновацій та індивідуального
          підходу до потреб клієнтів.
        </p>
        <Image
          src={Table}
          style={{
            width: "100%",
            height: "auto",
          }}
          alt="table with coffee cap"
        />
      </div>
    </>
  );
}
