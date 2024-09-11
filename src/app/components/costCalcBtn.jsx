"use client";

import axios from "axios";
import { Field, Formik, Form } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";
import { PropagateLoader } from "react-spinners";
import * as Yup from "yup";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export default function CostCalcBtn({ model }) {
  const { t } = useTranslation();
  const [isPending, setIsPending] = useState(false);
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

  const preCostSchema = Yup.object().shape({
    name: Yup.string().required(`${t("required")}`),
    phone: Yup.string().required(`${t("required")}`),
    message: Yup.string(),
  });

  const lastScreen = () => {
    return (
      <>
        <p className="text-center text-2xl">{t('thank you')}!</p>
        <p className="text-center text-xl mt-5">{t('Thank you for your application. Our manager will call you shortly')}</p>
      </>
    )
  }

  const firstScreen = () => {
    return (
      <div>
        <h3 className="text-center text-2xl">{t("cost calculation")}</h3>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            message: "",
          }}
          validationSchema={preCostSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              setIsPending(true);
              await axios.post("/leads/add", {
                name: values.name,
                phone: values.phone,
                message: values.message,
                product: model._id,
              });
              resetForm();
              setIsPending(false);
              setModalContent(lastScreen);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col max-w-96">
              <div className="mb-3.5">
                <label htmlFor="name">{t("name")}*</label>
                <Field
                  className="w-full p-2 border-2 border-[#ccc] rounded"
                  id="name"
                  name="name"
                  placeholder="name"
                />
                {errors.name && touched.name ? <p className="text-red-500">{errors.name}</p> : null}
              </div>
              <div className="mb-3.5">
                <label htmlFor="phone">{t("phone")}*</label>
                <Field
                  className="w-full p-2 border-2 border-[#ccc] rounded"
                  id="phone"
                  name="phone"
                  placeholder="phone"
                />
                {errors.phone && touched.phone ? (
                  <p className="text-red-500">{errors.phone}</p>
                ) : null}
              </div>
              <div className="mb-3.5">
                <label htmlFor="message">{t("message")}</label>
                <Field
                  className="w-full p-2 border-2 border-[#ccc] rounded"
                  id="message"
                  name="message"
                  placeholder="message"
                />
              </div>
              <button
                type="submit"
                className="p-2 border-2 border-[#ccc] rounded"
              >
                {isPending ? <PropagateLoader color="#5f747c" /> : t("submit")}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(firstScreen);

  return (
    <>
      <button
        className="bg-[#8a8475] rounded px-6 py-2 w-full mt-10"
        onClick={() => setIsModalOpen(true)}
      >
        {t("cost calculation")}
      </button>
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
