import clsx from "clsx";

export default function Sidebar({ array }) {
  return (
    <div className={clsx("py-10 px-5 border-2 w-[300px]")}>
      <p className="border-b-2 pb-2 text-xl font-light">Categories</p>
      <ul className="border-b-2 pb-2 mt-5">
        <li key={"all-categories"}>All categories</li>
        {array.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
