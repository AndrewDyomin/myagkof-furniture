import clsx from "clsx";

export default function Footer() {
  return (
    <div>
      <div></div>
      <div>
        <a
          href="/"
          className={clsx("flex items-center")}
        >
          <svg className={clsx('text-blue-200 h-8 w-8')}>
            <use href="./icons/sprite.svg#icon-myagkof-logo"/>
          </svg>
          <p className={clsx("ml-2.5 font-bold")}>М&apos;якоff</p>
        </a>
      </div>
    </div>
  );
}
