"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { Pencil, Trash2 } from "lucide-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GlobalTable from "../common_components/GlobalTable/GlobalTable";
import { digitalAssetApi } from "@/api/api";
import useFetch from "@/hooks/useFetch";
import moment from "moment";

const severityColors = {
  Critical: { backgroundColor: "purple" },
  High: { backgroundColor: "red" },
  Medium: { backgroundColor: "orange" },
  Low: { backgroundColor: "yellow" },
};

const statusColors = {
  Open: { backgroundColor: "green" },
  Closed: { backgroundColor: "blue" },
  "In progress": { backgroundColor: "orange" },
};

const tabs = [
  { id: "breacheye", label: "Breacheye", count: 36 },
  { id: "antirouge", label: "Anti Rouge", count: 36 },
  { id: "antiphishing", label: "Anti Phishing", count: 36 },
];

export default function ProductTable() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const router = useRouter();

  const {
    data,
    setData,
    loading,
    deleteItem,
    nextUrl,
    prevUrl,
    currentPage,
    totalPages,
    totalItems,
    fetchPageData,
  } = useFetch(digitalAssetApi, ``);

  const handleEdit = (id) => {
    router.push(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleting item with id: ${id}`);
    setData(data?.filter((item) => item.id !== id));
  };

  const columns = [
    { key: "id", label: "ID", sortable: true },
    {
      key: "photo",
      label: "Photo",
      render: (_, item) => (
        <img
          src={`${item?.photo?.[0] ?? ""}`}
          alt="Digital Asset"
          style={{ width: "40px", height: "40px" }}
        />
      ),
    },
    ,
    {
      key: "alias_name",
      label: "Alisa Name",
      render: (_, item) => (
        <p>{item?.alias_name?.map((alias) => `${alias}, `)}</p>
      ),
    },
    {
      key: "email",
      label: "Emails",
      render: (_, item) => <p>{item?.email?.map((em) => `${em}, `)}</p>,
    },
    {
      key: "created_at",
      label: "Created At",
      sortable: true,
      render: (value) => <p>{moment(value).format("DD/MM/YYYY")}</p>,
    },
    // {
    //   key: "status",
    //   label: "Status",
    //   sortable: true,
    //   render: (value) => (
    //     <p style={{ ...statusColors[value], color: "white", padding: "5px" }}>
    //       {value}
    //     </p>
    //   ),
    // },
    // { key: "threatType", label: "Threat Type", sortable: true },
    {
      key: "action",
      label: "Actions",
      render: (_, item) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => handleEdit(item.id)}
            startIcon={<Pencil style={{ height: "16px", width: "16px" }} />}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ];

  const handleSearch = (term) => {
    const filtered = data?.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(term.toLowerCase())
      )
    );
    setData(filtered);
  };

  const handleSort = (key, direction) => {
    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sorted);
  };

  const handleFilter = () => {
    console.log("Applying filter");
  };

  const customCTAButtons = (
    <>
      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: "8px" }}
        onClick={() => router.push("/about")}
      >
        + Add
      </Button>
    </>
  );

  console.log("digital asset", data);

  return (
    <Box>
      <Box mt={4}>
        {loading ? (
          <Typography variant="h6" align="center">
            Loading...
          </Typography>
        ) : (
          <GlobalTable
            columns={columns}
            data={data}
            allData={data}
            title={activeTab}
            onSearch={handleSearch}
            onSort={handleSort}
            onFilter={handleFilter}
            pageSize={totalPages}
            totalItems={totalItems}
            currentPage={currentPage}
            fetchPageData={fetchPageData}
            next={nextUrl}
            prev={prevUrl}
            showExportCTA={true}
            headerActions={customCTAButtons}
          />
        )}
      </Box>
    </Box>
  );
}
