import clsx from "clsx";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={clsx("mt-auto py-14 px-14 bg-[#8a8475]")}>
      <div className={clsx('flex')}>
        <div>
          <h4 className={clsx("text-lg text-slate-50")}>Subscribe to our news</h4>
          <label htmlFor='subscribe' className={clsx("block text-slate-50 mt-5")}>
            Email:
          </label>
          <input id='subscribe' className={clsx("block mt-2 bg-transparent border-solid border-2 py-2 px-5 text-slate-50")}/>
          <button className={clsx("inline mt-1 text-slate-50 border-solid border-2 py-2 px-5")}>Прійняти</button>
          <p className={clsx("ml-5 inline text-slate-50")}>Thank you!</p>
        </div>
        <div className={clsx('ml-auto px-3 text-slate-50')}>
          <h4>
            Shop
          </h4>
          <ul>
            <li>
              <a href='/' className={clsx('block mt-5')}>Furniture</a>
            </li>
            <li>
              <a href='/' className={clsx('block mt-3')}>New</a>
            </li>
            <li>
              <a href='/' className={clsx('block mt-3')}>Sale</a>
            </li>
          </ul>
        </div>
        <div className={clsx('ml-10 px-3 text-slate-50')}>
          <h4>
            About M&apos;якоff
          </h4>
          <ul>
            <li>
              <a href='/' className={clsx('block mt-5')}>Our Story</a>
            </li>
            <li>
              <a href='/' className={clsx('block mt-3')}>Stores</a>
            </li>
            <li>
              <a href='/' className={clsx('block mt-3')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={clsx("flex mt-10")}>
        <div className={clsx("flex")}>
          <a href="/" className={clsx("flex items-center text-slate-50")}>
            <svg className={clsx(" h-8 w-8")}>
              <use href="./icons/sprite.svg#icon-myagkof-logo" />
            </svg>
            <p className={clsx("ml-2.5 font-bold")}>М&apos;якоff</p>
          </a>
          <p className={clsx("pl-8 text-slate-50")}>
            9 Borispilska Street, Kyiv, Ukraine <br />{" "}
            <a href="tel:0503259656">050-325-9656</a> /{" "}
            <a href="mailto:info@gmail.com">info@gmail.com</a>
          </p>
        </div>
        <div className={clsx("ml-auto flex align-center")}>
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
