import clsx from "clsx";
import Image from "next/image";

export default function Header() {
  return (
    <div className={clsx('py-3')}>
      <div className={clsx("w-full flex")}>
        <a href="/" className={clsx("flex items-center")}>
          <Image
            src="/icons/myagkof-logo.svg"
            width={40}
            height={40}
            alt="myagkof-logo"
          />
          <p className={clsx("ml-2.5 font-bold")}>М'якоff</p>
        </a>
        <ul className={clsx("flex ml-auto items-center gap-3")}>
          <li>
            <a href="/">Catalog</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contacts</a>
          </li>
        </ul>
      </div>
      <hr className={clsx("h-0.5 bg-black mt-3")} />
      <div className={clsx("w-full flex mt-3")}>
        <ul className={clsx("flex items-center gap-2.5")}>
          <li>
            <a href="https://facebook" className={clsx("flex items-center")}>
              <Image
                src="/icons/facebook.png"
                width={20}
                height={20}
                alt="facebook-logo"
              />
            </a>
          </li>
          <li>
            <a href="https://instagram" className={clsx("flex items-center")}>
              <Image
                src="/icons/instagram.png"
                width={20}
                height={20}
                alt="instagram-logo"
              />
            </a>
          </li>
          <li>
            <a href="https://twiter" className={clsx("flex items-center")}>
              <Image
                src="/icons/twiter.png"
                width={20}
                height={20}
                alt="twiter-logo"
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
              alt="user-logo"
            />
          </li>
          <li>
            <button >Log in</button>
          </li>
          <li>
            <button >Register</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
