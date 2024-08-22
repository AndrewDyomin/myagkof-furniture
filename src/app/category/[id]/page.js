import Carousel from "@/app/components/carousel";
import axios from "axios";
import clsx from "clsx";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

const fetchAllModels = async () => {
  const res = await axios.get("models/all");
  return res.data.array;
};

export async function generateStaticParams() {
  const models = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}models/all`
  ).then((res) => res.json());

  return models.array.map((model) => ({
    id: model._id,
  }));
}

export default async function Page({ params }) {
  const models = await fetchAllModels();
  const model = models.find((i) => i._id === params.id);
  const family = models.filter((i) => i.family === model.family);

  const images = [];
  model.images.forEach(i => images.push(`https://lh3.googleusercontent.com/d/${i}=w800?authuser=0`))

  return (
    <div className={clsx("mt-10")}>
      <div className={clsx("flex gap-10")}>
        <div className={clsx("w-72 h-72 border-black border-2", "slider-container")}>
          {/* <Carousel images={images} /> */}
        </div>
        <div>
          <h1 className={clsx("text-4xl font-semibold")}>{model.name}</h1>
          <p className={clsx("text-2xl font-light mt-16")}>
            Price {model.price},00₴
          </p>
          <p className={clsx("text-2xl font-light mt-16")}>Size {model.size}</p>
        </div>
      </div>
      <p className={clsx("text-2xl font-light mt-8")}>Description</p>
      <p>{model.description}</p>
    </div>
  );
}
