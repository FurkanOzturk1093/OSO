import React from "react";
import "./header.scss";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ImageIcon from "@mui/icons-material/Image";
const Header = () => {
  // current date
  const currentDate = new Date();

  // options for date formatting
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  // formatted date string
  const formattedDate = currentDate.toLocaleDateString("en-EN", options);

  return (
    <div className="header-container">
      <div>
        <h3 className="welcome-text">Welcome, Amanda</h3>
        <span>{formattedDate}</span>
      </div>
      <div className="btn-container">
        <button className="btn">
          <NotificationsOutlinedIcon />
        </button>
        <button className="btn-2">
          <ImageIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
