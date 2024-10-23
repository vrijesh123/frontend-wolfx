// "use client";
// import { Box, IconButton } from "@mui/material";
// import "../../../globalStyles/global.css";
// import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
// import {
//   ForkLeftRounded,
//   ForkRightRounded,
//   HomeMaxRounded,
//   PagesRounded,
//   Person2Rounded,
// } from "@mui/icons-material";
// import DensityMediumIcon from "@mui/icons-material/DensityMedium";
// import { useEffect, useState } from "react";
// import useMediaQuery from "@/hooks/useMediaQuery";
// import Cookies from "js-cookie";

// export default function SideNav() {
//   const is_mobile = useMediaQuery("(max-width: 750px)");
//   const [collapsed, setCollapsed] = useState(true);
//   const [toggled, setToggled] = useState(true);

//   const handleCollapsedChange = () => {
//     // if(is_mobile) return;
//     setCollapsed(!collapsed);
//   };

//   const handleToggleSidebar = () => {
//     setToggled(!toggled);
//   };

//   const adjustMainMargin = () => {
//     // Get the side-menu width
//     const sideMenuWidth = document.querySelector(".side-menu-nav").offsetWidth;

//     // Get the main tag
//     const main = document.querySelector("main");

//     // Set the margin-left of the main tag
//     main.style.marginLeft = sideMenuWidth + "px";
//   };

//   useEffect(() => {
//     // Call the function on page load
//     adjustMainMargin();

//     // Add event listeners for details toggling
//     document.querySelectorAll("details").forEach((details) => {
//       details.addEventListener("toggle", adjustMainMargin);
//     });

//     // Record visited URL inside cookie
//     const currentUrl = new URL(window.location.href);

//     if (Cookies.get("url_visited") === undefined) {
//       // Set cookie value for first time
//       Cookies.set("url_visited", currentUrl);
//     } else {
//       const urlVisited = Cookies.get("url_visited").split("|");

//       if (urlVisited[urlVisited.length - 1] !== currentUrl.toString()) {
//         // Set the current url in the cookie if it's unique from the last entry
//         Cookies.set(
//           "url_visited",
//           Cookies.get("url_visited") + "|" + currentUrl
//         );
//       }
//     }
//   }, []);

//   useEffect(() => {
//     setToggled(true);
//   }, [is_mobile]);

//   return (
//     <>
//       <div className="side-menu-nav">
//         <IconButton
//           onClick={handleToggleSidebar}
//           style={{
//             display: is_mobile ? "flex" : "none",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor: "pointer",
//             position: "absolute",
//             top: 20,
//             left: 20,
//             zIndex: 1000,
//             backgroundColor: "white",
//             width: "30px",
//             height: "30px",
//             borderRadius: "99px",
//           }}
//         >
//           <DensityMediumIcon sx={{ fontSize: "18px" }} />
//         </IconButton>
//         <Sidebar
//           className={`app ${toggled ? "toggled" : ""}`}
//           collapsed={collapsed}
//           toggled={toggled}
//           onToggle={handleToggleSidebar}
//           breakPoint="md"
//         >
//           <main style={{ marginTop: is_mobile && "60px" }}>
//             <Menu>
//               {collapsed ? (
//                 <MenuItem
//                   icon={<ForkRightRounded />}
//                   onClick={handleCollapsedChange}
//                 ></MenuItem>
//               ) : (
//                 <MenuItem
//                   suffix={<ForkLeftRounded />}
//                   onClick={handleCollapsedChange}
//                 >
//                   <div
//                     style={{
//                       padding: "9px",
//                       fontWeight: "bold",
//                       fontSize: 14,
//                       letterSpacing: "1px",
//                     }}
//                   >
//                     YOUR LOGO!..
//                   </div>
//                 </MenuItem>
//               )}
//               <hr />
//             </Menu>

//             <Menu>
//               <MenuItem href="/" icon={<HomeMaxRounded />}>
//                 Dashboard
//               </MenuItem>
//               <MenuItem href="/about" icon={<PagesRounded />}>
//                 About
//               </MenuItem>
//               <SubMenu
//                 defaultOpen
//                 label={"Professors"}
//                 icon={<Person2Rounded />}
//               >
//                 <MenuItem icon={<Person2Rounded />}>Ex Professors</MenuItem>
//                 <MenuItem icon={<Person2Rounded />}>Probation Period</MenuItem>
//               </SubMenu>
//             </Menu>
//           </main>
//         </Sidebar>
//       </div>
//     </>
//   );
// }

"use client";

import React, { useEffect } from "react";
import Cookies from "js-cookie";
import {
  ChatRounded,
  Dashboard,
  Logout,
  Settings,
  SupervisedUserCircle,
} from "@mui/icons-material";
import { Settings2, UserIcon } from "lucide-react";

const SideNav = () => {
  // Function to adjust main tag margin as per side-nav width
  const adjustMainMargin = () => {
    const sideMenuWidth = document.querySelector(".side-menu").offsetWidth;
    const main = document.querySelector("main");
    main.style.marginLeft = sideMenuWidth + "px";
  };

  const handleDetailsToggle = (details) => {
    const content = details.querySelector("ul");
    if (details.open) {
      const height = content.scrollHeight;
      content.style.height = height + "px";
      setTimeout(() => {
        content.style.height = "auto"; // Set height to auto after animation
      }, 300); // Match this time with transition duration
    } else {
      content.style.height = content.scrollHeight + "px"; // Start from the full height
      setTimeout(() => {
        content.style.height = "0px"; // Transition to 0 height
      }, 0);
    }
  };

  useEffect(() => {
    adjustMainMargin();

    document.querySelectorAll("details").forEach((details) => {
      // Add initial class for content
      const content = details.querySelector("ul");
      content.classList.add("details-content");

      details.addEventListener("toggle", () => handleDetailsToggle(details));
    });

    const currentUrl = new URL(window.location.href);
    if (Cookies.get("url_visited") === undefined) {
      Cookies.set("url_visited", currentUrl);
    } else {
      const urlVisited = Cookies.get("url_visited").split("|");
      if (urlVisited[urlVisited.length - 1] !== currentUrl.toString()) {
        Cookies.set(
          "url_visited",
          Cookies.get("url_visited") + "|" + currentUrl
        );
      }
    }
  }, []);

  return (
    <div className="side-menu">
      <div className="logo-container">
        <div className="logo">[NA] Sodium</div>
      </div>
      <ul className="menu">
        <li>
          <span className="icon">
            <Dashboard />
          </span>
          <span className="name">Dashboard</span>
        </li>

        <details>
          <summary>
            <span className="icon">
              <SupervisedUserCircle />
            </span>
            <span className="name">Attendance</span>
            <span className="arrow">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </summary>
          <ul>
            <li>
              <span className="icon">
                <i className="fa-solid fa-fingerprint"></i>
              </span>
              <span className="name">Record Attendance</span>
            </li>
            <li>
              <span className="icon">
                <i className="fa-regular fa-calendar"></i>
              </span>
              <span className="name">Calendar</span>
            </li>
          </ul>
        </details>

        {/* Other details elements */}
      </ul>

      <div className="bottom">
        <ul>
          <li>
            <span className="icon">
              <Settings2 />
            </span>
            <span className="name">Settings</span>
          </li>
          <li>
            <span className="icon">
              <Logout />
            </span>
            <span className="name">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
