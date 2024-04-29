import React, { useState, useEffect } from "react";
import { Audio } from "react-loader-spinner";
import Table from "react-data-table-component";
import service from "../../services/service.service";
import DatatableHeader from "./DatatableHeader";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "./Modal";
function Datatable() {
  const [table, setTable] = useState({
    data: [],
    search: "",
    tag: "",
    status: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("create"); // create or edit
  const [rowData, setRowData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [isUpdated, setIsUpdated] = useState(null);
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
  }, [table.search, table.tag, table.status, deleteId, isUpdated]);

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await service.audience.delete(id);
      // After successful deletion, fetch updated data
      fetchData();
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };
  const columns = [
    {
      name: "Audience Name",
      selector: (row) => {
        return <span className="name-text">{row.name}</span>;
      },
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
      cell: (row) => (
        <div className="button-container">
          <button
            className="edit-button"
            onClick={() => {
              setMode("edit");
              setIsModalOpen(true);
              setRowData(row);
            }}
          >
            <EditIcon />
          </button>
          <button
            className="delete-button"
            onClick={async () => {
              await handleDelete(row.id);
              setDeleteId(row.id);
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      ),
    },
  ];
  function onClose() {
    setIsModalOpen(false);
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        className="create-button"
        onClick={() => {
          setMode("create");
          setIsModalOpen(true);
        }}
      >
        Create Audience
      </button>
      <Modal
        setIsUpdated={setIsUpdated}
        isOpen={isModalOpen}
        onClose={onClose}
        rowData={rowData}
        mode={mode}
      />
      <DatatableHeader
        setTable={setTable}
        table={table}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
      <Table
        columns={columns}
        data={table.data}
        pagination
        selectableRows
        progressPending={isLoading}
        progressComponent={
          <span>
            <Audio color="#8241FF" height={50} width={50} />
          </span>
        }
      />
    </div>
  );
}

export default Datatable;
