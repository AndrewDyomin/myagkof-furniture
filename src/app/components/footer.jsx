"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { Formik, Form, Field } from "formik";
import { PropagateLoader } from "react-spinners";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export default function Footer() {
  const { t } = useTranslation();

  const isMini = useMediaQuery({ query: "(max-width: 420px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [isClient, setIsClient] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isThankyou, setIsThankyou] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className={clsx("mt-auto py-14 px-14 bg-[#8a8475]", isMini && "px-2")}>
      <div className={clsx("flex", isMobile && "flex-col gap-10 items-center")}>
        <div className={clsx(isMini && "w-full")}>
          <h4 className={clsx("text-lg text-slate-50")}>
            {t("subscribe to our news")}
          </h4>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={async (values, { resetForm }) => {
              try {
                setIsPending(true);
                await axios.post("/leads/add", { email: values.email});
                setIsPending(false);
                setIsThankyou(true);
                resetForm();
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <Form>
              <label
                htmlFor="subscribe"
                className={clsx("block text-slate-50 mt-5")}
              >
                Email:
              </label>
              <Field
                className={clsx(
                  "block mt-2 bg-transparent border-solid border-2 py-2 px-5 text-slate-50",
                  isMini && "w-full"
                )}
                id="subscribe"
                type="email"
                name="email"
              />
              <button
                type="submit"
                className={clsx(
                  "inline mt-1 text-slate-50 border-solid border-2 py-2 px-5"
                )}
              >
                {isPending ? <PropagateLoader color="#5f747c" /> : t("submit")}
              </button>
              {isThankyou && (
                <p className={clsx("ml-5 inline text-slate-50")}>
                  {t("thank you")}!
                </p>
              )}
            </Form>
          </Formik>
        </div>
        <div className={clsx(!isMobile && "ml-auto", "flex")}>
          <div className={clsx("px-3 text-slate-50")}>
            <h4>{t("shop")}</h4>
            <ul>
              <li>
                <a href="/" className={clsx("block mt-5")}>
                  {t("furniture")}
                </a>
              </li>
              <li>
                <a href="/" className={clsx("block mt-3")}>
                  {t("new")}
                </a>
              </li>
              <li>
                <a href="/" className={clsx("block mt-3")}>
                  {t("sale")}
                </a>
              </li>
            </ul>
          </div>
          <div className={clsx("ml-10 px-3 text-slate-50")}>
            <h4>{t("about")} M&apos;якоff</h4>
            <ul>
              <li>
                <Link href="/about-us" className={clsx("block mt-5")}>
                  {t("our story")}
                </Link>
              </li>
              <li>
                <Link href="/" className={clsx("block mt-3")}>
                  {t("stores")}
                </Link>
              </li>
              <li>
                <Link href="/contacts" className={clsx("block mt-3")}>
                  {t("contacts")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "flex mt-10",
          isMobile && "flex-col items-center gap-5"
        )}
      >
        <div className={clsx(!isMobile && "flex")}>
          <a
            href="/"
            className={clsx(
              isMobile && "justify-center",
              "flex items-center text-slate-50"
            )}
          >
            <svg className={clsx(" h-8 w-8")}>
              <use href="./icons/sprite.svg#icon-myagkof-logo" />
            </svg>
            <p className={clsx("ml-2.5 font-bold")}>М&apos;якоff</p>
          </a>
          <p className={clsx(!isMobile && "pl-8", "text-slate-50")}>
            {t("9 Borispilska Street, Kyiv, Ukraine")} <br />{" "}
            <a href="tel:0503259656">050-325-9656</a> /{" "}
            <a href="mailto:info@gmail.com">info@gmail.com</a>
          </p>
        </div>
        <div className={clsx(!isMobile && "ml-auto", "flex align-center")}>
          <ul className={clsx("flex items-center gap-4 text-slate-50")}>
            <li>
              <a
                href="https://www.facebook.com/share/ZndWccuLoUs7WG9U/?mibextid=LQQJ4d"
                className={clsx("flex items-center text-slate-50")}
              >
                <svg className={clsx("h-8 w-8")}>
                  <use href="./icons/sprite.svg#icon-facebook" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/myagkof_furniture.ua?igsh=MWZod2gycDRlZTRzcg%3D%3D&utm_source=qr"
                className={clsx("flex items-center")}
              >
                <svg className={clsx("h-8 w-8")}>
                  <use href="./icons/sprite.svg#icon-instagram" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
