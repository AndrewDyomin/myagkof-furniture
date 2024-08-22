import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function CatalogList({ array }) {

  return (
    <>
      <ul className={clsx("flex gap-8 flex-wrap")}>
        {array.map((item) => (
          <li key={item._id} className={clsx("w-80")}>
            <Link href={`/category/${item._id}`}>
              <img
                src={`https://lh3.googleusercontent.com/d/${item.images[0]}=w800?authuser=0`}
                width="100%"
                height="auto"
                alt={`${item.name}`}
              />
              <p className={clsx("text-center my-2 text-2xl")}>{item.name}</p>
              <p className={clsx("text-center pb-2 border-b-2")}>
                {item.price},00₴
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
