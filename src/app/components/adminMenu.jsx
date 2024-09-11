"use client";

import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { Field, FieldArray, Form, Formik } from "formik";
import clsx from "clsx";
import { useState } from "react";
import axios from "axios";
import { remove } from "../lib/slices/modelsSlice";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import PropagateLoader from "react-spinners/PropagateLoader";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export default function AdminMenu({ model }) {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPending, setIsPending] = useState("");

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const editMenuStyles = {
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
      height: "80%",
      padding: "24px",
      borderRadius: "4px",
      border: "1px solid black",
      backgroundColor: "FFF",
      transition: "top 0.3s ease-in-out",
      position: "absolute",
    },
  };

  const deleteMenuStyles = {
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
      height: "35%",
      maxHeight: "200px",
      padding: "24px",
      borderRadius: "4px",
      border: "1px solid black",
      backgroundColor: "FFF",
      transition: "top 0.3s ease-in-out",
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
  };

  return (
    <>
      {user.description === "administrator" && (
        <div className="flex gap-3 mb-5">
          <button
            onClick={() => setIsEditOpen(true)}
            className="border-2 rounded border-slate-500 px-2"
          >
            {t("edit")}
          </button>
          <button
            onClick={() => setIsDeleteOpen(true)}
            className="border-2 rounded border-red-400 px-2"
          >
            {t("delete")}
          </button>
          <Modal
            isOpen={isEditOpen}
            onRequestClose={() => setIsEditOpen(false)}
            style={editMenuStyles}
            ariaHideApp={false}
          >
            <Formik
              initialValues={{
                category: model.categories,
                name: model.name,
                family: model.family,
                size: model.size,
                sleepingArea: model.sleepingArea,
                description: model.description,
                basePrice: model.price,
                images: model.images,
              }}
              onSubmit={async (values, { resetForm }) => {
                try {
                  setIsPending(true);
                  const formData = new FormData();
                  formData.append("_id", model._id);
                  formData.append("categories", values.category);
                  formData.append("name", values.name);
                  formData.append("family", values.family);
                  formData.append("size", values.size);
                  formData.append("sleepingArea", values.sleepingArea);
                  formData.append("description", values.description);
                  formData.append("price", values.basePrice);
                  values.images.forEach((image, index) => {
                    formData.append(`images[${index}]`, values.images[index]);
                  });
                  selectedFiles.forEach((file) => {
                    formData.append("file", file);
                  });
                  await axios.post("/models/update", formData, {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                  });
                  resetForm();
                  setIsPending(false);
                  setIsEditOpen(false);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <Form className={clsx("flex flex-col max-w-96")}>
                <div className={clsx("mb-3.5")}>
                  <label htmlFor="category">{t("category")}</label>
                  <Field
                    className={clsx(
                      "w-full p-2 border-2 border-[#ccc] rounded"
                    )}
                    id="category"
                    name="category"
                    placeholder="category"
                  />
                </div>
                <div className={clsx("mb-3.5")}>
                  <label htmlFor="family">{t("family")}</label>
                  <Field
                    className={clsx(
                      "w-full p-2 border-2 border-[#ccc] rounded"
                    )}
                    id="family"
                    name="family"
                    placeholder="Faynee mini"
                  />
                </div>
                <div className={clsx("mb-3.5")}>
                  <label htmlFor="name">{t("name")}</label>
                  <Field
                    className={clsx(
                      "w-full p-2 border-2 border-[#ccc] rounded"
                    )}
                    id="name"
                    name="name"
                    placeholder="Faynee mini Corner"
                  />
                </div>
                <div className={clsx("mb-3.5")}>
                  <label htmlFor="size">{t("size")}</label>
                  <Field
                    className={clsx(
                      "w-full p-2 border-2 border-[#ccc] rounded"
                    )}
                    id="size"
                    name="size"
                    placeholder="335 x 170 x 70"
                  />
                </div>
                <div className={clsx("mb-3.5")}>
                  <label htmlFor="sleepingArea">{t("sleeping area")}</label>
                  <Field
                    className={clsx(
                      "w-full p-2 border-2 border-[#ccc] rounded"
                    )}
                    id="sleepingArea"
                    name="sleepingArea"
                    placeholder="300 x 150"
                  />
                </div>
                <div className={clsx("mb-3.5")}>
                  <label htmlFor="description">{t("description")}</label>
                  <Field
                    className={clsx(
                      "w-full p-2 border-2 border-[#ccc] rounded"
                    )}
                    id="description"
                    name="description"
                    placeholder="Description"
                  />
                </div>
                <div className={clsx("mb-3.5")}>
                  <label htmlFor="basePrice">{t("base price")}</label>
                  <Field
                    className={clsx(
                      "w-full p-2 border-2 border-[#ccc] rounded"
                    )}
                    id="basePrice"
                    name="basePrice"
                    placeholder="49000"
                  />
                </div>
                <div className={clsx("mb-3.5")}>
                  <FieldArray
                    name="images"
                    render={(arrayHelpers) => (
                      <div
                        className={clsx(
                          "w-full p-2 border-2 border-[#ccc] rounded flex flex-col gap-2"
                        )}
                      >
                        {arrayHelpers.form.values.images.map((image, index) => (
                          <div key={index} className={clsx("flex flex-wrap")}>
                            <img
                              src={`http://res.cloudinary.com/dpvewcxp0/image/upload/v1725965152/${image}.jpg`}
                              alt={image}
                              width={"200px"}
                            />
                            <button
                              className={clsx(
                                "p-2 border-2 border-[#ccc] rounded ml-auto"
                              )}
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              {t("delete")}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  />
                </div>
                <div className={clsx("mb-3.5")}>
                  <label htmlFor="files">{t("add images")}</label>
                  <Field
                    className={clsx(
                      "w-full p-2 border-2 border-[#ccc] rounded"
                    )}
                    id="files"
                    name="files"
                    type="file"
                    onChange={handleFileChange}
                    multiple
                  />
                </div>
                <button
                  type="submit"
                  className={clsx("p-2 border-2 border-[#ccc] rounded")}
                >
                  {isPending ? (
                    <PropagateLoader color="#5f747c" />
                  ) : (
                    t("submit")
                  )}
                </button>
              </Form>
            </Formik>
          </Modal>
          <Modal
            isOpen={isDeleteOpen}
            onRequestClose={() => setIsEditOpen(false)}
            style={deleteMenuStyles}
            ariaHideApp={false}
          >
            <p className={clsx("mx-auto text-2xl")}>{t('are you sure')}???</p>
            <div className={clsx("flex gap-5 mt-auto")}>
              <button
                className={clsx(
                  "w-1/2 border-2 border-slate-500 rounded py-2 px-5"
                )}
                onClick={() => setIsDeleteOpen(false)}
              >
                {t('cancel')}
              </button>
              <Link
                href={"/category"}
                className={clsx(
                  "w-1/2 border-2 border-slate-500 rounded bg-rose-200"
                )}
              >
                <button
                  className={clsx("w-full py-2 px-5")}
                  onClick={() => dispatch(remove(model._id))}
                >
                  {t('delete')}
                </button>
              </Link>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}
