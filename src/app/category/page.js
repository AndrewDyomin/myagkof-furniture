"use client";

import clsx from "clsx";
import Sidebar from "../components/sidebar";
import axios from "axios";
import CatalogList from "../components/catalogList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../lib/slices/modelsSlice";
import { useTranslation } from "react-i18next";

export default function Category() {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const filter = useSelector(state => state.filter)

  const modelsArray = useSelector((state) => state.models.array);
  const unsortedArray = [];
  modelsArray.map((model) => unsortedArray.push(model.categories));
  const categoriesArray = Array.from(new Set(unsortedArray));
  const filteredArray = modelsArray.filter((i) =>
    i.categories.includes(filter)
  );

  return (
    <>
      <h1 className={clsx("text-center text-5xl")}>{filter === '' ? t('all products') : t(`${filter}s`)}</h1>
      <div className={clsx("catalog-wrapper")}>
        <Sidebar array={categoriesArray.sort()}/>
        <CatalogList array={filteredArray} />
      </div>
    </>
  );
}
