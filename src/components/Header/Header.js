import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { singoutUser } from "../../redux/authSlice";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { shoppingCard } = useSelector((state) => state.cardSlice);
  const { user } = useSelector((state) => state.authSlice);

  const handleLogout = () => {
    dispatch(singoutUser(false));
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Link to="/">
          <Navbar.Brand>
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite
            </span>
          </Navbar.Brand>
        </Link>

        <div className="flex md:order-2">
          {user == false ? (
            <Navbar.Link>
              <Link to="/login">Login</Link>
            </Navbar.Link>
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
                  {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                <Link to="/profile">Profile</Link>{" "}
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
            </Dropdown>
          )}
        </div>

        <Navbar.Collapse>
          <Navbar.Link>
            <Link to="/product">Ürünler</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/basket">Sepetim {shoppingCard.length}</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
