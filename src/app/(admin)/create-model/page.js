"use client";

import axios from "axios";
import clsx from "clsx";
import Select from "react-select";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useTranslation } from "react-i18next";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export default function CreateModel() {
  const { t } = useTranslation();
  const [selectedCategories, setSelectedCategories] = useState({
    value: "sofa",
    label: "Sofa",
  });
  const [selectedFiles, setSelectedFiles] = useState("");
  const [isPending, setIsPending] = useState("");

  const categories = [
    { value: "sofa", label: "Sofa" },
    { value: "bed", label: "Bed" },
    { value: "mattress", label: "Mattress" },
    { value: "banquette", label: "Banquette" },
    { value: "pouf", label: "Pouf" },
    { value: "couch", label: "Couch" },
  ];

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  return (
    <div>
      <h2 className={clsx("text-2xl text-center")}>{t('create model form')}</h2>
      <Formik
        initialValues={{
          category: selectedCategories.value,
          name: "",
          family: "",
          size: "",
          sleepingArea: "",
          description: "",
          basePrice: "",
          images: [""],
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            setIsPending(true);
            const formData = new FormData();
            formData.append("categories", selectedCategories.value);
            formData.append("name", values.name);
            formData.append("family", values.family);
            formData.append("size", values.size);
            formData.append("sleepingArea", values.sleepingArea);
            formData.append("description", values.description);
            formData.append("price", values.basePrice);
            selectedFiles.forEach((file) => {
              formData.append("file", file);
            });
            await axios.post("/models/add", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            setIsPending(false);
            setSelectedFiles('')
            resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Form className={clsx("flex flex-col max-w-96")}>
          <div className={clsx("mb-3.5")}>
            <label htmlFor="category">{t('category')}</label>
            <Field
              component={Select}
              name="category"
              id="category"
              onChange={(e) => setSelectedCategories(e)}
              options={categories}
              defaultValue={selectedCategories.value}
            ></Field>
          </div>
          <div className={clsx("mb-3.5")}>
            <label htmlFor="family">{t('family')}</label>
            <Field
              className={clsx("w-full p-2 border-2 border-[#ccc] rounded")}
              id="family"
              name="family"
              placeholder="Faynee mini"
            />
          </div>
          <div className={clsx("mb-3.5")}>
            <label htmlFor="name">{t('name')}</label>
            <Field
              className={clsx("w-full p-2 border-2 border-[#ccc] rounded")}
              id="name"
              name="name"
              placeholder="Faynee mini Corner"
            />
          </div>
          <div className={clsx("mb-3.5")}>
            <label htmlFor="size">{t('size')}</label>
            <Field
              className={clsx("w-full p-2 border-2 border-[#ccc] rounded")}
              id="size"
              name="size"
              placeholder="335 x 170 x 70"
            />
          </div>
          <div className={clsx("mb-3.5")}>
            <label htmlFor="sleepingArea">{t('sleeping area')}</label>
            <Field
              className={clsx("w-full p-2 border-2 border-[#ccc] rounded")}
              id="sleepingArea"
              name="sleepingArea"
              placeholder="300 x 150"
            />
          </div>
          <div className={clsx("mb-3.5")}>
            <label htmlFor="description">{t('description')}</label>
            <Field
              className={clsx("w-full p-2 border-2 border-[#ccc] rounded")}
              id="description"
              name="description"
              placeholder="Description"
            />
          </div>
          <div className={clsx("mb-3.5")}>
            <label htmlFor="basePrice">{t('base price')}</label>
            <Field
              className={clsx("w-full p-2 border-2 border-[#ccc] rounded")}
              id="basePrice"
              name="basePrice"
              placeholder="49000"
            />
          </div>
          <div className={clsx("mb-3.5")}>
            <label htmlFor="files">{t('add images')}</label>
            <Field
              className={clsx("w-full p-2 border-2 border-[#ccc] rounded")}
              id="files"
              name="files"
              type="file"
              onChange={handleFileChange}
              multiple
            />
          </div>
          <button type="submit" className={clsx("p-2 border-2 border-[#ccc] rounded")}>
          {isPending ? (
            <PropagateLoader color="#5f747c" />
          ) : (
              t('submit')
          )}
          </button>
        </Form>
      </Formik>
    </div>
  );
}
