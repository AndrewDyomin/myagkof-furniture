"use client";

import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { Field, FieldArray, Form, Formik } from "formik";
import clsx from "clsx";
import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export default function AdminMenu({ model }) {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);

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

  return (
    <>
      {user.description === "administrator" && (
        <div>
          <button onClick={() => setIsEditOpen(true)}>Edit</button>
          <button>Delete</button>
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
                  setIsEditOpen(false);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <Form className={clsx("flex flex-col max-w-96")}>
                <div className={clsx("mb-3.5")}>
                  <label htmlFor="category">Category</label>
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
                  <label htmlFor="family">Family</label>
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
                  <label htmlFor="name">Name</label>
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
                  <label htmlFor="size">Size</label>
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
                  <label htmlFor="sleepingArea">Sleeping area</label>
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
                  <label htmlFor="description">Description</label>
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
                  <label htmlFor="basePrice">Base price</label>
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
                    render={arrayHelpers => (
                      <div className={clsx(
                        "w-full p-2 border-2 border-[#ccc] rounded"
                      )}>
                        {arrayHelpers.form.values.images.map((image, index) => (
                          <div key={index} className={clsx('flex flex-wrap')}>
                            <img 
                                src={`https://lh3.googleusercontent.com/d/${image}=w800?authuser=0`} 
                                alt={image} 
                                width={'200px'} 
                            />
                            <button
                              className={clsx(
                                "p-2 border-2 border-[#ccc] rounded ml-auto"
                              )}
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                            delete
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  />
                </div>
                <div className={clsx("mb-3.5")}>
                  <label htmlFor="files">Add images</label>
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
                <button type="submit" className={clsx("")}>
                  Submit
                </button>
              </Form>
            </Formik>
          </Modal>
        </div>
      )}
    </>
  );
}
