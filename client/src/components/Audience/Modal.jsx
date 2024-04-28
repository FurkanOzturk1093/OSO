import React, { useState, useEffect } from "react";
import "./audience.scss";
import service from "../../services/service.service";
import Select from "react-select";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ isOpen, onClose, rowData, mode, setIsUpdated }) => {
  const [updatedData, setUpdatedData] = useState({
    name: rowData?.name || "",
    tags: rowData?.tags || [],
    status: rowData?.status || "active",
  });
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await service.tags.getAll();
      setTags(res.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (mode === "edit") {
      setUpdatedData({
        name: rowData?.name || "",
        tags: rowData?.tags || [],
        status: rowData?.status || "active",
      });
    }
  }, [rowData]);

  const handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value
    setUpdatedData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTagChange = (selectedTags) => {
    setUpdatedData((prevState) => ({
      ...prevState,
      tags: selectedTags.map((tag) => ({ name: tag.value })),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call your service to update data
      // check updated data is valid
      if (!updatedData.name || !updatedData.tags.length) {
        return;
      }
      if (mode === "edit") {
        const response = await service.audience.update(rowData.id, updatedData);

        setIsUpdated(response);
      } else {
        const response = await service.audience.create(updatedData);
        setIsUpdated(response);
      }
      onClose(); // Close the modal after successful update
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className={`modal-container ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          <CloseIcon />
        </span>
        <h2>{mode === "edit" ? "Edit Audience" : "Create Audience"}</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={updatedData.name}
              onChange={handleChange}
            />
          </div>
          <div className="multi-select-container">
            <label>Tags:</label>
            <Select
              isMulti
              options={tags.map((item) => ({
                value: item.name,
                label: item.name,
              }))}
              value={updatedData.tags.map((tag) => ({
                value: tag.name,
                label: tag.name,
              }))}
              onChange={handleTagChange}
            />
          </div>
          <div>
            <label>Status:</label>
            <select
              name="status"
              value={updatedData.status}
              onChange={handleChange}
            >
              <option value="active">Active</option>
              <option value="passive">Passive</option>
            </select>
          </div>
          <button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            {mode === "edit" ? "Update Audience" : "Create Audience"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
