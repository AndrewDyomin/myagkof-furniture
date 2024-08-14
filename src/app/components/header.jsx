"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
            <li>
              <Link href="/category">Каталог</Link>
            </li>
            <li>
              <Link href="/about-us">О нас</Link>
            </li>
            <li>
              <Link href="/contacts">Контакты</Link>
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
          <ul className={clsx("flex ml-auto items-center gap-3")}>
            <li>
              <Image
                src="/icons/user-logo.svg"
                width={20}
                height={20}
                alt="user logo"
              />
            </li>
            <li>
              <button>Log in</button>
            </li>
            <li>
              <button>Register</button>
            </li>
          </ul>
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeMenu}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className={clsx('flex flex-col h-full')}>
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
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/about-us" onClick={closeMenu}>
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contacts" onClick={closeMenu}>
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
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
                <button>Log in</button>
              </li>
              <li>
                <button>Register</button>
              </li>
            </ul>
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
    </div>
  );
}
