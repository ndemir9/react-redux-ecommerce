import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { singoutUser } from "../../redux/authSlice";
import { Dropdown, Avatar } from "flowbite-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shoppingCard } = useSelector((state) => state.cardSlice);
  const { allProduct } = useSelector((state) => state.apiSlice);
  const { user } = useSelector((state) => state.authSlice);

  const handleLogout = () => {
    dispatch(singoutUser(false));
    navigate("/", {
      replace: true,
    });
  };

  const [filter, setFilter] = useState();

  const handleSearch = (e) => {
    let filterItems = allProduct.filter((x) => {
      x.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
  };

  return (
    <div>
      <div className="bg-white">
        <div className="w-5/6 lg:w-2/3 mx-auto py-3 grid grid-cols-3 items-center">
          <NavLink to="/">
            <div className="fw-bold text-xl">LOGO</div>
          </NavLink>
          <div className="bg-white rounded drop-shadow-md border-0 w-full flex items-center pl-5">
            <BsSearch className="h-full" />
            <input
              placeholder="Ara..."
              className="border-0 py-3 h-full outline-none w-full focus:outline-none ml-4"
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <ul className="flex gap-x-5 justify-end items-center">
            <li className="relative">
              <NavLink to="/basket">
                <HiOutlineShoppingBag size="24" />
                {shoppingCard.length == 0 ? (
                  ""
                ) : (
                  <div className="w-5 h-5 rounded-full bg-slate-800 inline text-white flex items-center justify-center text-sm absolute right-[-10px] top-[-10px]">
                    {shoppingCard.length}
                  </div>
                )}
              </NavLink>
            </li>
            <li>
              {user == false ? (
                <NavLink to="/login">Login</NavLink>
              ) : (
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      alt="User settings"
                      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      rounded={true}
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{user.fullName}</span>
                    <span className="block truncate text-sm font-medium">
                      {user.name.firstname} {user.name.lastname}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>
                    <Link to="/profile">Profile</Link>{" "}
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                </Dropdown>
              )}
            </li>
          </ul>
        </div>
      </div>
      {/* <div>selam</div> */}
    </div>
  );
}
