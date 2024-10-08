"use client";

import { FullScreenCarousel } from "@/app/components/fullScreenCarousel";
import AdminMenu from "./adminMenu";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAll } from "../lib/slices/modelsSlice";
import { useTranslation } from "react-i18next";
import CatalogList from "./catalogList";
import CostCalcBtn from "./costCalcBtn";

export default function CurrentModel({ id }) {
  const dispatch = useDispatch();
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch, id]);

  const modelsArray = useSelector((state) => state.models.array);
  const model = modelsArray.find((i) => i._id === id)
  const family = modelsArray.filter((i) => i.family.toLowerCase() === model.family.toLowerCase() && i.name.toLowerCase() !== model.name.toLowerCase())

  if (model && model.images) {
    const images = [];
    model.images.forEach((i) =>
      images.push(`http://res.cloudinary.com/dpvewcxp0/image/upload/v1725965152/${i}.jpg`)
    );

    return (
      <>
        <div className={clsx("flex gap-10 current-model-wrapper")}>
        <h1 className={clsx("text-4xl font-semibold mobile-model-name")}>{model.name}</h1>
          <div className={clsx("slider-container")}>
            <FullScreenCarousel images={images} />
          </div>
          <div>
            <h1 className={clsx("text-4xl font-semibold model-name")}>{model.name}</h1>
            <p className={clsx("text-2xl font-light mt-16")}>{t('price from')}</p>
            <p className={clsx("text-2xl font-light")}>{model.price},00₴</p>
            <p className={clsx("text-2xl font-light mt-16")}>{t('size')}</p>
            <p className={clsx("text-2xl font-light")}>{model.size}</p>
            <CostCalcBtn model={model}/>
          </div>
        </div>
        <p className={clsx("text-2xl font-light mt-8")}>{t('description')}</p>
        <p className={clsx("text-l font-light mb-8")}>{model.description}</p>
        <AdminMenu model={model} />
        {family.length > 0 && 
        <p className="mb-4">{t('model range')}:</p>
        }
        <CatalogList array={family}/>
      </>
    );
  } else {
    return <></>;
  }
}
