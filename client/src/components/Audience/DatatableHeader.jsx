import React, { useEffect, useState, useMemo } from "react";
import service from "../../services/service.service";
import debounce from "lodash/debounce";
import SearchIcon from "@mui/icons-material/Search";
import "./audience.scss";

function DatatableHeader(props) {
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  useEffect(() => {
    const fetchData = async () => {
      const res = await service.tags.getAll();
      setTags(res.data);
    };
    fetchData();
  }, []);

  const { setTable } = props;

  // Debounced function for searching
  const onSearch = useMemo(
    () =>
      debounce((search) => {
        setTable((prevState) => ({
          ...prevState,
          isLoading: true,
        })); // Show loading indicator
        setTable((prevState) => ({
          ...prevState,
          search,
        }));
        setTable((prevState) => ({
          ...prevState,
          isLoading: false,
        })); // Hide loading indicator after debounce
      }, 1000),
    [setTable]
  );

  return (
    <div className="top-view">
      <h1>Audience List</h1>
      <div className="filter-area">
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input
            className="search-area"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              onSearch(e.target.value.toLowerCase());
            }}
          />
        </div>
        <select
          className="select-tags"
          onChange={(e) => {
            setTable((prevState) => ({
              ...prevState,
              tag: e.target.value,
            }));
          }}
        >
          <option value="">All Tags</option>
          {tags.map((tag) => (
            <option key={tag.id} value={tag.name}>
              {tag.name}
            </option>
          ))}
        </select>
        <select
          className="select-status"
          onChange={(e) => {
            setTable((prevState) => ({
              ...prevState,
              status: e.target.value,
            }));
          }}
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="passive">Passive</option>
        </select>
      </div>
    </div>
  );
}

export default DatatableHeader;
