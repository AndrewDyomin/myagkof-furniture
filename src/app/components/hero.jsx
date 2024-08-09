import clsx from "clsx";
import Image from "next/image";

export default function Hero() {
    return (
        <>
        <div className={clsx("bg-[url('/images/grey-bed.jpg')] bg-cover bg-no-repeat bg-center h-[40rem] flex justify-center items-center")}>
            <div className={clsx('py-10 px-10 w-1/3 bg-neutral-700/90')}>
                <h1 className={clsx('text-5xl text-center text-white')}>Comfort you can rely on</h1>
                <p className={clsx('text-center mt-5 text-white')}>Production of upholstered furniture to order</p>
                <button className={clsx('border-solid border-2 rounded-md py-1 px-5 text-white mt-5 block mx-auto')}>Catalog</button>
            </div>
        </div>
        </>
    )
}