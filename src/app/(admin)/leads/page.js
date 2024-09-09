"use client";

import { getAll } from "@/app/lib/slices/leadSlice";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export default function Leads() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const leadsArray = useSelector((state) => state.leads.array);
  const [editModal, setEditModal] = useState(false)

  const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const year = date.getFullYear();
  
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }


  return (
    <>
      <h2 className={clsx("text-2xl text-center mb-6")}>{t("leads")}</h2>
      <div>
        <ul>
        <li key={1} className="flex mb-3">
                <p className="w-[14%]">name</p>
                <p className="w-[14%]">phone</p>
                <p className="w-[14%]">email</p>
                <p className="w-[14%]">product</p>
                <p className="w-[14%]">message</p>
                <p className="w-[14%]">status</p>
                <p className="w-[14%]">date</p>
              </li>
          {leadsArray.length > 0 &&
            leadsArray.map((lead) => (
              <li key={lead._id} className="flex even:bg-slate-200">
                <p className="w-[14%]">{lead.name === "" ? "-" : lead.name}</p>
                <p className="w-[14%]">{lead.phone === "" ? "-" : lead.phone}</p>
                <p className="w-[14%]">{lead.email === "" ? "-" : lead.email}</p>
                <p className="w-[14%]">{lead.product === "" ? "-" : lead.product}</p>
                <p className="w-[14%]">{lead.message === "" ? "-" : lead.message}</p>
                <p className="w-[14%]">{lead.status}</p>
                <p className="w-[14%]">{formatDate(lead.date)}</p>
                <button className="ml-3 text-2xl rotate-90 origin-left-top">...</button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
