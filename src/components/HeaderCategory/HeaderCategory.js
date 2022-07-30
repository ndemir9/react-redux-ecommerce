import React, { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCategory } from "../../redux/apiSlice";

function HeaderCategory() {
  const dispatch = useDispatch();

  const { allCategory } = useSelector((state) => state.apiSlice);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div className="md:w-2/3 mx-auto my-5">
      <ul className="flex flex-wrap md:items-center md:justify-center gap-x-5 mx-auto">
        {allCategory.map((item, i) => (
          <Link to={`/product/${item}`} key={item}>
            <li className="m-2 md:m-0 bg-slate-200 rounded-lg p-3 text-black text-sm md:text-md hover:bg-slate-300 ease-in duration-150">
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default memo(HeaderCategory);
