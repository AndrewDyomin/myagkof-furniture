'use client'

import clsx from "clsx";
import { changeFilter } from "../lib/slices/filterSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ToCatalogBtns() {

    const dispatch = useDispatch()
    const { t } = useTranslation();

    return (
        <div className={clsx('flex justify-center w-[90%] mx-auto relative bottom-5')}>
            <Link 
                href='/category'
                className={clsx('block w-[50%] h-10 border-[1px] border-solid border-neutral-500 bg-white')}
            >
                <button 
                    onClick={() => dispatch(changeFilter('sofa'))}
                    className={clsx('w-full h-full')}
                >
                    {t('sofas')}
                </button>
            </Link>
            <Link 
                href='/category'
                className={clsx('block w-[50%] h-10 border-[1px] border-solid border-neutral-500 bg-white')}
                >
                <button 
                    onClick={() => dispatch(changeFilter('bed'))}
                    className={clsx('w-full h-full')}
                >
                    {t('beds')}
                </button>
            </Link>
        </div>
    )
}