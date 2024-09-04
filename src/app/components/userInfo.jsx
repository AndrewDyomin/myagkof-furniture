"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSelector } from "react-redux";
import sha256 from "crypto-js/sha256";

export default function UserInfo() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="user-info-wrapper">
      <div className={clsx("border-2 border-black p-5")}>
        <img
          src={`https://www.gravatar.com/avatar/${sha256(`${user.email}`)}`}
          width={100}
          height={100}
          alt="user avatar"
        />
        <p className={clsx("text-2xl")}>{user.name}</p>
        <p>{user.description}</p>
      </div>
      <div className={clsx("border-2 border-black p-5 mt-4")}>
        <ul>
          <li>
            <Link href="/account">My Account</Link>
          </li>
          <li className={clsx("mt-3")}>
            <Link href="/orders">My Orders</Link>
          </li>
          {user.description === "administrator" && (
            <li className={clsx("mt-3")}>
              <Link href="/create-model">Add Model</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
