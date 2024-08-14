"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Formik, Field, Form } from "formik";

export default function Contacts() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
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
          Контакти
        </h1>
      </div>
      <div
        className={clsx(
          "mb-5",
          isTablet && "grid grid-cols-2 gap-10 items-center pl-10"
        )}
      >
        <div className="grid gap-5">
          <h2 className="text-xl ">Обслуговування клієнтів</h2>
          <p>Ваші відгуки та побажання можна залишити тут</p>
          <a href="tel:0503259656">tel: 050-325-9656</a>
          <a href="mailto:info@gmail.com">email: info@gmail.com</a>
        </div>
        <div>
          <Formik
            initialValues={{
              name: "",
              email: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form className={clsx('mt-5 flex flex-col border-solid border-2 border-[#8a8475] rounded p-3')}>
              <label htmlFor="name">Name</label>
              <Field 
                id="name" 
                name="name" 
                placeholder="Jane" 
                className={clsx('border-solid border-2 border-[#8a8475] rounded p-3 mb-5')}
              />

              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
                className={clsx('border-solid border-2 border-[#8a8475] rounded p-3 mb-5')}
              />

              <label htmlFor="message">Напишіть ваше запитання тут...</label>
              <Field
                id="message"
                name="message"
                type="text"
                className={clsx('border-solid border-2 border-[#8a8475] rounded p-3 mb-5')}
              />
              <button 
                type="submit"
                className={clsx('text-white rounded p-3 bg-[#8a8475]')}
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
