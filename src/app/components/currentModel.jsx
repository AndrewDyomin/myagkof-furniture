"use client";

import { FullScreenCarousel } from "@/app/components/fullScreenCarousel";
import AdminMenu from "./adminMenu";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAll } from "../lib/slices/modelsSlice";

export default function CurrentModel({ id }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch, id]);

  const modelsArray = useSelector((state) => state.models.array);
  const model = modelsArray.find((i) => i._id === id)

  if (model && model.images) {
    const images = [];
    model.images.forEach((i) =>
      images.push(`https://lh3.googleusercontent.com/d/${i}=w800?authuser=0`)
    );

    return (
      <>
        <div className={clsx("flex gap-10 current-model-wrapper")}>
          <div className={clsx("slider-container")}>
            <FullScreenCarousel images={images} />
          </div>
          <div>
            <h1 className={clsx("text-4xl font-semibold")}>{model.name}</h1>
            <p className={clsx("text-2xl font-light mt-16")}>Price</p>
            <p className={clsx("text-2xl font-light")}>{model.price},00₴</p>
            <p className={clsx("text-2xl font-light mt-16")}>Size</p>
            <p className={clsx("text-2xl font-light")}>{model.size}</p>
          </div>
        </div>
        <p className={clsx("text-2xl font-light mt-8")}>Description</p>
        <p className={clsx("text-l font-light mb-8")}>{model.description}</p>
        <AdminMenu model={model} />
      </>
    );
  } else {
    return <></>;
  }
}
