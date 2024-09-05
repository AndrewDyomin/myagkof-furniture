import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../lib/slices/filterSlice";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Sidebar({ array }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const filter = useSelector(state => state.filter)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const mobileFilterToggle = () => {
    isMobileFilterOpen ? setIsMobileFilterOpen(false) : setIsMobileFilterOpen(true);
  }

  return (
    <div className="sidebar-area">
      <div className={clsx("py-10 px-5 border-2 w-[200px] sidebar")}>
        <p className="border-b-2 pb-2 text-xl font-light">{t('categories')}</p>
        <ul className="border-b-2 pb-2 mt-5 flex flex-col gap-3">
          <li key={"all-categories"} className={clsx(filter === '' ? 'border-b-4 max-w-max' : '')}>
            <button
              onClick={() => {
                dispatch(changeFilter(""));
              }}
            >
              {t('all categories')}
            </button>
          </li>
          {array.map((item) => (
            <li key={item} className={clsx(filter === item ? 'border-b-4 max-w-max' : '')}>
              <button
                onClick={() => {
                  dispatch(changeFilter(item));
                }}
              >
                {t(`${item}`)}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={clsx("py-2 px-5 border-2 w-[90%] mx-auto mobile-filter")}>
        <div className="flex items-center" onClick={() => {mobileFilterToggle(true)}}>
          <p className="text-xl font-light">{t('categories')}</p>
          <p className="ml-auto text-3xl leading-none align-center">{isMobileFilterOpen ? '-' : '+'}</p>
        </div>
        {isMobileFilterOpen && 
        <div>
          <ul className="border-t-2 pt-2">
          <li key={"all-categories"} className={clsx(filter === '' ? 'border-b-4 max-w-max' : '')}>
            <button
              onClick={() => {
                dispatch(changeFilter(""));
              }}
            >
              {t('all categories')}
            </button>
          </li>
          {array.map((item) => (
            <li key={item} className={clsx(filter === item ? 'border-b-4 max-w-max' : '')}>
              <button
                onClick={() => {
                  dispatch(changeFilter(item));
                }}
              >
                {t(`${item}`)}
              </button>
            </li>
          ))}
        </ul>
        </div>}
      </div>
    </div>
  );
}
