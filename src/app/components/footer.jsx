import clsx from "clsx";
import Image from "next/image";
import Logo from "../../../public/icons/myagkof-logo.svg";

export default function Footer() {
  return (
    <div>
      <div></div>
      <div>
        <a
          href="/"
          className={clsx("flex items-center")}
        >
          <Image 
            src={Logo} 
            alt="myagkof-logo" 
            width={40}
            height={40}
            />
          <p className={clsx("ml-2.5 font-bold")}>М&apos;якоff</p>
        </a>
      </div>
    </div>
  );
}
