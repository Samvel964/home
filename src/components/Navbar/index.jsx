import "./style.scss";
import { useState, useEffect } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import { changeUrl, changePathname } from "../../features/pathSlice";

export default function MyHeader() {
  const navigate = useNavigate();
  let show = true;
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(changePathname(pathname));
    
    if (pathname !== "/home") {
      dispatch(changeUrl(pathname));
    }
  }, [pathname]);

  

  const [shadowClass, setShadowClass] = useState("navbar head ");
  window.addEventListener("scroll", function () {
    if (this.scrollY >= 10) {
      setShadowClass("navbar head shadowbox");
    } else {
      setShadowClass("navbar head ");
    }
  });
  return (
    <>
      <div className="navbar-background">
        <div className={shadowClass}>
          <div className="container">
            <ul className="navbar-ul">
              <li className="menu-items">
                <NavLink to="/home">Home</NavLink>
              </li>
              <li className="menu-items">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="menu-items">
                <NavLink to="/my-works">Works</NavLink>
              </li>
            </ul>
            <ul className="navbar-ul-icon">
              <li className="menu-iems-icon">
                <NavLink to="/home">
                  <HomeOutlinedIcon />
                </NavLink>
              </li>
              <li className="menu-iems-icon">
                <NavLink to="/about">
                  <InfoOutlinedIcon />
                </NavLink>
              </li>
              <li className="menu-iems-icon">
                <NavLink to="/my-works">
                  <WorkspacesOutlinedIcon />
                </NavLink>
              </li>
            </ul>
            <ul className="contact-me">
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <ul className="contact-me-icon">
              <li>
                <NavLink to="/contact">
                  <AddIcCallOutlinedIcon />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
