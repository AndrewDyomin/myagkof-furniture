import clsx from "clsx";
import Sidebar from "../components/sidebar";

export default function Category() {
    return (
        <>
            <h1 className={clsx('text-center text-5xl')}>All products</h1>
            <div className={clsx('grid grid-cols-2 mt-16')}>
                <Sidebar />
                <p>Items list</p>
            </div>
        </>
    )
}