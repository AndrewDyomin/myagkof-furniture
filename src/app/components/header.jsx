"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";
import { Form, Field, Formik } from "formik";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut, refreshUser } from "../lib/slices/authSlice";
import { changeFilter } from "../lib/slices/filterSlice";
import LanguageSelector from "./languageSelector";
import { useTranslation } from "react-i18next";

export default function Header() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    dispatch(refreshUser());
  }, [dispatch]);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1199px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1200px)" });

  const openMenu = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeMenu = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  const closeLoginMenu = () => {
    setIsLoginModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  const openUserMenu = () => {
    setIsUserMenuOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeUserMenu = () => {
    setIsUserMenuOpen(false);
    document.body.classList.remove("modal-open");
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(9, 9, 9, 0.75)",
      position: "fixed",
    },
    content: {
      top: "60px",
      left: "auto",
      right: "-135px",
      bottom: "auto",
      transform: "translateX(-50%)",
      width: "300px",
      height: "80%",
      padding: "24px",
      borderRadius: "4px",
      border: "1px solid black",
      backgroundColor: "FFF",
      transition: "top 0.3s ease-in-out",
      position: "absolute",
    },
  };

  const logInModalStyles = {
    overlay: {
      backgroundColor: "rgba(9, 9, 9, 0.75)",
      position: "fixed",
    },
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "70%",
      maxWidth: "450px",
      height: "300px",
      padding: "24px",
      borderRadius: "4px",
      border: "1px solid black",
      backgroundColor: "FFF",
      transition: "top 0.3s ease-in-out",
      position: "absolute",
    },
  };

  const userMenuStyles = {
    overlay: {
      backgroundColor: "transparent",
      position: "absolute",
      top: "70px",
    },
    content: {
      marginLeft: "auto",
      width: "150px",
      height: "200px",
      padding: "24px",
      borderRadius: "1px",
      border: "1px solid black",
      backgroundColor: "FFF",
      transition: "top 0.3s ease-in-out",
    },
  };

  const logInHandler = () => {
    setIsLoginModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const logOutHandler = () => {
    dispatch(logOut({ isAuth: false }));
    closeUserMenu();
  };

  if (!isClient) {
    return null; //TO DO (add loader)
  }

  return (
    <div className={clsx("py-3")}>
      <div className={clsx("w-full flex")}>
        <a href="/" className={clsx("flex items-center")}>
          <Image
            src="/icons/myagkof-logo.svg"
            width={40}
            height={40}
            alt="Logo Myagkof"
          />
          <p className={clsx("ml-2.5 font-bold")}>М&apos;якоff</p>
        </a>
        {isMobile ? (
          <button className={clsx("ml-auto")} onClick={openMenu}>
            <svg className={clsx("h-8 w-8")}>
              <use href="/icons/sprite.svg#icon-menu"></use>
            </svg>
          </button>
        ) : (
          <ul className={clsx("flex ml-auto items-center gap-3")}>
            <li onClick={() => dispatch(changeFilter(""))}>
              <Link href="/category">{t('catalog')}</Link>
            </li>
            <li>
              <Link href="/about-us">{t('about us')}</Link>
            </li>
            <li>
              <Link href="/contacts">{t('contacts')}</Link>
            </li>
          </ul>
        )}
      </div>
      <hr className={clsx("h-0.5 bg-black mt-3")} />
      {!isMobile && (
        <div className={clsx("w-full flex mt-3")}>
          <ul className={clsx("flex items-center gap-2.5")}>
            <li>
              <a
                href="https://www.facebook.com/share/ZndWccuLoUs7WG9U/?mibextid=LQQJ4d"
                className={clsx("flex items-center")}
              >
                <Image
                  src="/icons/facebook.png"
                  width={20}
                  height={20}
                  alt="facebook logo"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/myagkof_furniture.ua?igsh=MWZod2gycDRlZTRzcg%3D%3D&utm_source=qr"
                className={clsx("flex items-center")}
              >
                <Image
                  src="/icons/instagram.png"
                  width={20}
                  height={20}
                  alt="instagram logo"
                />
              </a>
            </li>
          </ul>
          {isLoggedIn ? (
            <div className={clsx("flex ml-auto items-center gap-3")}>
              <LanguageSelector />
              <Image
                src="/icons/user-logo.svg"
                width={20}
                height={20}
                alt="user logo"
              />
              <div className={clsx("relative")}>
                <button onClick={openUserMenu}>
                  <p>{user.name}</p>
                </button>
                <Modal
                  isOpen={isUserMenuOpen}
                  onRequestClose={closeUserMenu}
                  style={userMenuStyles}
                  ariaHideApp={false}
                >
                  <div className={clsx("flex flex-col h-full")}>
                    <ul>
                      <li>
                        <Link onClick={closeUserMenu} href="/account">
                          {t('my account')}
                        </Link>
                      </li>
                      <li className={clsx("mt-3")}>
                        <Link onClick={closeUserMenu} href="/orders">
                          {t('my orders')}
                        </Link>
                      </li>
                    </ul>
                    <button
                      className={clsx("mt-auto border-2 rounded")}
                      onClick={logOutHandler}
                    >
                      {('log out')}
                    </button>
                  </div>
                </Modal>
              </div>
            </div>
          ) : (
            <ul className={clsx("flex ml-auto items-center gap-3")}>
              <li>
                <LanguageSelector />
              </li>
              <li>
                <Image
                  src="/icons/user-logo.svg"
                  width={20}
                  height={20}
                  alt="user logo"
                />
              </li>
              <li>
                <button onClick={logInHandler}>{t('log in')}</button>
              </li>
              <li>
                <button>{t('register')}</button>
              </li>
            </ul>
          )}
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeMenu}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className={clsx("flex flex-col h-full")}>
          <button
            className={clsx("block ml-auto")}
            type="button"
            onClick={closeMenu}
          >
            <svg className={clsx("h-8 w-8")}>
              <use href="./icons/sprite.svg#icon-close"></use>
            </svg>
          </button>
          <div>
            <ul className={clsx("grid gap-5")}>
              <li>
                <Link href="/category" onClick={closeMenu}>
                  {t('catalog')}
                </Link>
              </li>
              <li>
                <Link href="/about-us" onClick={closeMenu}>
                  {t('about us')}
                </Link>
              </li>
              <li>
                <Link href="/contacts" onClick={closeMenu}>
                  {t('contacts')}
                </Link>
              </li>
            </ul>
          </div>
          {isLoggedIn ? (
            <div className={clsx("mt-auto grid gap-3")}>
              <Image
                src="/icons/user-logo.svg"
                width={20}
                height={20}
                alt="user logo"
              />
              <Link onClick={closeMenu} href="/account">
                <p>{user.name}</p>
              </Link>
            </div>
          ) : (
            <div className={clsx("mt-auto")}>
              <ul className={clsx("grid gap-3")}>
                <li>
                  <Image
                    src="/icons/user-logo.svg"
                    width={20}
                    height={20}
                    alt="user logo"
                  />
                </li>
                <li>
                  <button onClick={logInHandler}>{t('log in')}</button>
                </li>
                <li>
                  <button>{t('register')}</button>
                </li>
              </ul>
            </div>
          )}
          <div className="w-[90px] mt-5">
            <LanguageSelector />
          </div>
          <div className={clsx("mt-5")}>
            <ul className={clsx("flex items-center gap-2.5")}>
              <li>
                <a
                  href="https://www.facebook.com/share/ZndWccuLoUs7WG9U/?mibextid=LQQJ4d"
                  className={clsx("flex items-center")}
                >
                  <Image
                    src="/icons/facebook.png"
                    width={25}
                    height={25}
                    alt="facebook logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/myagkof_furniture.ua?igsh=MWZod2gycDRlZTRzcg%3D%3D&utm_source=qr"
                  className={clsx("flex items-center")}
                >
                  <Image
                    src="/icons/instagram.png"
                    width={25}
                    height={25}
                    alt="instagram logo"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginMenu}
        style={logInModalStyles}
        ariaHideApp={false}
      >
        <div className={clsx("flex flex-col h-full")}>
          <button
            className={clsx("block ml-auto")}
            type="button"
            onClick={closeLoginMenu}
          >
            <svg className={clsx("h-8 w-8")}>
              <use href="./icons/sprite.svg#icon-close"></use>
            </svg>
          </button>
          <div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={async (values) => {
                dispatch(
                  logIn({
                    email: values.email,
                    password: values.password,
                  })
                );
                setIsLoginModalOpen(false);
                setIsModalOpen(false);
              }}
            >
              <Form className={clsx("grid")}>
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="julia@gmail.com"
                  type="email"
                  className={clsx(
                    "p-2 text-center rounded border-slate-400 border-2"
                  )}
                />
                <label htmlFor="password">Password</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className={clsx(
                    "p-2 text-center rounded border-slate-400 border-2"
                  )}
                />
                <button
                  type="submit"
                  className={clsx(
                    "p-2 text-center rounded bg-slate-400 w-1/2 mx-auto mt-10"
                  )}
                >
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </Modal>
    </div>
  );
}
