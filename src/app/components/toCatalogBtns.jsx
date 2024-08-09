import clsx from "clsx";
// import Image from "next/image";

export default function ToCatalogBtns() {
    return (
        <div className={clsx('flex justify-center w-[90%] mx-auto relative bottom-5')}>
            <button className={clsx('block w-[50%] h-10 border-[1px] border-solid border-neutral-500 bg-white')}>Sofas</button>
            <button className={clsx('block w-[50%] h-10 border-[1px] border-solid border-neutral-500 bg-white')}>Beds</button>
        </div>
    )
}