"use client";

import { getAllLeads } from "@/app/lib/slices/leadSlice";
import { getAll } from "@/app/lib/slices/modelsSlice";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import axios from "axios";
import Link from "next/link";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export default function Leads() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLeads());
    dispatch(getAll());
  }, []);

  const leadsArray = useSelector((state) => state.leads.array);
  const modelsArray = useSelector((state) => state.models.array);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  const currentModel = (id) => {
    if (modelsArray && modelsArray.length > 0) {
      const model = modelsArray.find((model) => model._id === id)
      return model
    } else {
      return {name: 'undefined'}
    }
  }

  const modalStyles = {
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
      height: "max-content",
      padding: "24px",
      borderRadius: "4px",
      border: "1px solid black",
      backgroundColor: "FFF",
      transition: "top 0.3s ease-in-out",
      position: "absolute",
    },
  };

  const deleteScreen = (lead) => {
    return (
      <>
        <p className="text-center">{t("are you sure")}???</p>
        <div className="flex gap-2 mt-2">
          <button
            className="w-1/2 border-2 border-slate-500 rounded"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            {t("cancel")}
          </button>
          <button
            className="w-1/2 border-2 border-red-500 rounded"
            onClick={async () => {
              await axios.post("/leads/remove", {
                id: lead._id,
              });
              dispatch(getAllLeads());
              setIsModalOpen(false);
            }}
          >
            {t("delete")}
          </button>
        </div>
      </>
    );
  };

  const firstScreen = (lead) => {
    return (
      <div className="flex gap-2">
        <button
          className="w-1/2 border-2 border-slate-500 rounded"
          onClick={() => {
            console.log("edit", lead._id);
          }}
        >
          {t("edit")}
        </button>
        <button
          className="w-1/2 border-2 border-red-500 rounded"
          onClick={() => {
            setModalContent(deleteScreen(lead));
          }}
        >
          {t("delete")}
        </button>
      </div>
    );
  };

  const changeStatus = (lead) => {
    return (
      <div className="flex gap-5">
        <button 
          onClick={async() => {await axios.post("/leads/update", {id: lead._id, status: 'new'}); dispatch(getAllLeads()); setIsModalOpen(false)}}
          className="h-10 w-1/3 border-2 border-blue-400 bg-blue-200 text-blue-800 rounded"
        >
          new
        </button>
        <button 
          onClick={async() => {await axios.post("/leads/update", {id: lead._id, status: 'inWork'}); dispatch(getAllLeads()); setIsModalOpen(false)}}
          className="h-10 w-1/3 border-2 border-green-400 bg-green-200 text-green-800 rounded"
        >
          in work
        </button>
        <button 
          onClick={async() => {await axios.post("/leads/update", {id: lead._id, status: 'solved'}); dispatch(getAllLeads()); setIsModalOpen(false)}}
          className="h-10 w-1/3 border-2 border-slate-400 bg-slate-200 text-slate-800 rounded"
        >
          solved
        </button>
      </div>
    )
  }

  const [modalContent, setModalContent] = useState(<></>);

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
                <p className="w-[14%]">
                  {lead.phone === "" ? "-" : lead.phone}
                </p>
                <p className="w-[14%]">
                  {lead.email === "" ? "-" : lead.email}
                </p>
                <Link href={`/category/${lead.product}`} className="w-[14%]">
                  <p>
                    {lead.product === "" ? "-" : currentModel(lead.product).name}
                  </p>
                </Link>
                <p className="w-[14%]">
                  {lead.message === "" ? "-" : lead.message}
                </p>
                <div className="w-[14%] flex items-center justify-center py-2 px-4">
                  <button 
                    onClick={() => {setModalContent(changeStatus(lead)); setIsModalOpen(true)}}
                    className={clsx(
                      "border-[3px] border-blue-400 bg-blue-200 text-blue-800 rounded w-full h-full",
                      lead.status === 'inWork' && 'border-green-400 bg-green-200 text-green-800',
                      lead.status === 'solved' && 'border-slate-300 bg-slate-100 text-slate-500',
                    )}
                  >{lead.status}</button>
                </div>
                <p className="w-[14%]">{formatDate(lead.date)}</p>
                <button
                  className="ml-3 text-2xl rotate-90 origin-left-top"
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalContent(firstScreen(lead));
                  }}
                >
                  ...
                </button>
              </li>
            ))}
        </ul>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={modalStyles}
        ariaHideApp={false}
      >
        {modalContent}
      </Modal>
    </>
  );
}
