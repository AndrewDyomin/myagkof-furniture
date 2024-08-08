import clsx from "clsx";
import Image from "next/image";

export default function Hero() {
    return (
        <>
        <div className={clsx("bg-[url('/images/grey-bed.jpg')] bg-cover bg-no-repeat bg-center h-full py-20")}>
            <div className={clsx('mx-auto w-1/3')}>
                <h1>Comfort you can rely on</h1>
                <p>Production of upholstered furniture to order</p>
                <button className={clsx('border-solid border-2 rounded-md py-1 px-5')}>Catalog</button>
            </div>
        </div>
        </>
    )
}