import clsx from "clsx";
import Sidebar from "../components/sidebar";
import axios from 'axios';
import CategoriesList from "../components/categoriesList";

export default async function Category() {

    axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

    const fetchAllModels = async () => {
        const res = await axios.get('models/all');
        return res.data.array;
    }

    const modelsArray = await fetchAllModels();
    

    return (
        <>
            <h1 className={clsx('text-center text-5xl')}>All products</h1>
            <div className={clsx('grid grid-cols-2 mt-16')}>
                <Sidebar />
                <CategoriesList array={await fetchAllModels()} />
            </div>
        </>
    )
}