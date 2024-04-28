import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import SchemaIcon from "@mui/icons-material/Schema";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    {
      name: "Dashboard",
      path: "/",
      icon: <DashboardIcon />,
    },
    {
      name: "Campaigns",
      path: "/campaigns",
      icon: <OfflineBoltIcon />,
    },
    {
      name: "Audience",
      path: "/audience",
      icon: <PersonIcon />,
    },
    {
      name: "Flows",
      path: "/flows",
      icon: <SchemaIcon />,
    },
    {
      name: "Content",
      path: "/content",
      icon: <SummarizeOutlinedIcon />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <SettingsIcon />,
    },
  ];

  // Filter tabs based on search query
  const filteredTabs = tabs.filter((tab) =>
    tab.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <img src="/logo.svg" alt="logo" />
      <div className="sidebar">
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input
            className="search-area"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <span className="menu-text">Menu</span>
        {filteredTabs.map((tab) => (
          <div
            key={tab.name}
            className={`tab ${currentPath === tab.path ? "active" : ""}`}
            onClick={() => navigate(tab.path)}
          >
            <div
              style={{
                marginRight: "10px",
              }}
            >
              {tab.icon}
            </div>
            <div>{tab.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
