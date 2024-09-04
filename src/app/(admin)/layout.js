"use client";

import clsx from "clsx";
import UserInfo from "../components/userInfo";

export default function Layout({ children }) {

  return (
    <div className={clsx("flex gap-8 px-10 mt-10 admin-wrapper")}>
      <UserInfo />
      <div className={clsx("p-8 border-2 border-black w-full")}>
        {children}
      </div>
    </div>
  );
}
