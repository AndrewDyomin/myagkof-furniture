'use client'

import clsx from "clsx";
import { changeFilter } from "../lib/slices/filterSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function ToCatalogBtns() {

    const dispatch = useDispatch()

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
                    Sofas
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
                    Beds
                </button>
            </Link>
        </div>
    )
}