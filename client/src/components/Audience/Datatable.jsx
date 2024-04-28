import React, { useState, useEffect } from "react";

import Table from "react-data-table-component";
import service from "../../services/service.service";
import DatatableHeader from "./DatatableHeader";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function Datatable() {
  const [table, setTable] = useState({
    data: [],
    search: "",
    tag: "",
    status: "",
    isLoading: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      setTable((prevState) => ({
        ...prevState,
        isLoading: true,
      }));
      const res = await service.audience.getAll({
        search: table.search,
        tag: table.tag,
        status: table.status,
      });
      setTable((prevState) => ({
        ...prevState,
        data: res.data,
        isLoading: false,
      }));
    };
    fetchData();
  }, [table.search, table.tag, table.status]);

  const columns = [
    {
      name: "Audience Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Tags",
      selector: (row) => {
        return row.tags.map((tag) => tag.name).join(", ");
      },
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => {
        return (
          <div
            style={{
              color: "#8241FF",
            }}
          >
            {row.status}
          </div>
        );
      },

      sortable: true,
    },
    {
      name: "Action",
      cell: () => (
        <span>
          <MoreHorizIcon />
        </span>
      ),
    },
  ];
  return (
    <div>
      <DatatableHeader setTable={setTable} table={table} />
      <Table
        columns={columns}
        data={table.data}
        pagination
        selectableRows
        progressPending={table.isLoading}
      />
    </div>
  );
}

export default Datatable;
