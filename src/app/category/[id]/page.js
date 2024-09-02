import clsx from "clsx";
import CurrentModel from "@/app/components/currentModel"

export async function generateStaticParams() {
  const models = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}models/all`
  ).then((res) => res.json());

  return models.array.map((model) => ({
    id: model._id,
  }));
}

export default async function Page({ params }) {
  // const model = models.find((i) => i._id === params.id);
  // const family = models.filter((i) => i.family === model.family);

  return (
    <div className={clsx("mt-10")}>
      <CurrentModel id = {params.id}/>
    </div>
  );
}
