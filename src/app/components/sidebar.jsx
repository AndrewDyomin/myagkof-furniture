import clsx from "clsx";
import { useDispatch } from "react-redux";
import { changeFilter } from "../lib/slices/filterSlice";

export default function Sidebar({ array }) {

  const dispatch = useDispatch();

  return (
    <div className={clsx("py-10 px-5 border-2 w-[300px]")}>
      <p className="border-b-2 pb-2 text-xl font-light">Categories</p>
      <ul className="border-b-2 pb-2 mt-5">
        <li key={"all-categories"}>
          <button
            onClick={() => {
              dispatch(changeFilter(''));
            }}
          >
            All categories
          </button>
        </li>
        {array.map((item) => (
          <li key={item}>
            <button
              onClick={() => {
                dispatch(changeFilter(item))
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
