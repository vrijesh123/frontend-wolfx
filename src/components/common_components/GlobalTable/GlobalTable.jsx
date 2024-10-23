"use client";

import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ChevronDown, ChevronUp, Download, Search } from "lucide-react";
import * as XLSX from "xlsx";
import { Box, Pagination } from "@mui/material";

function GlobalTable({
  columns,
  data,
  allData,
  title,
  onSearch,
  onSort,
  onFilter,
  pageSize,
  totalItems,
  currentPage,
  fetchPageData,
  next,
  prev,
  showExportCTA = false,
  headerActions = null,
}) {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isExporting, setIsExporting] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSort = (column) => {
    const newDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newDirection);
    onSort(column, newDirection);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      const ws = XLSX.utils.json_to_sheet(allData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      XLSX.writeFile(wb, `${title}.xlsx`);
    } catch (error) {
      console.error("Failed to export data:", error);
    } finally {
      setIsExporting(false);
    }
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div style={{ marginBottom: "1rem" }}>
      {/* Search and Actions */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap", // Allows wrapping on small screens
          gap: "10px",
        }}
      >
        <TextField
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          variant="outlined"
          size="small"
          style={{ flex: "0.8", minWidth: "200px" }} // Makes the search input flexible
          InputProps={{
            startAdornment: (
              <Search
                style={{
                  marginRight: "8px",
                  color: "#888",
                }}
              />
            ),
          }}
        />
        <Box
          sx={{
            display: "flex",
          }}
        >
          {showExportCTA && (
            <Button
              onClick={handleExport}
              variant="outlined"
              disabled={isExporting}
              style={{ marginRight: "8px" }}
            >
              <Download style={{ marginRight: "4px" }} />
              {isExporting ? "Exporting..." : "Export to Excel"}
            </Button>
          )}

          {headerActions && <>{headerActions}</>}
        </Box>
      </div>

      {/* Table Container with Scroll */}
      <TableContainer
        style={{
          overflowX: "auto", // Enables horizontal scrolling
          whiteSpace: "nowrap", // Prevents content from wrapping in table cells
        }}
      >
        <Table style={{ minWidth: "600px" }}>
          {" "}
          {/* Sets a minimum width for the table */}
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <TableCell
                  key={column.key}
                  onClick={() => column.sortable && handleSort(column.key)}
                  style={{
                    cursor: column.sortable ? "pointer" : "default",
                    minWidth: "150px",
                    maxWidth: "150px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {column.label}
                    {column.sortable &&
                      sortColumn === column.key &&
                      (sortDirection === "asc" ? (
                        <ChevronUp
                          style={{ marginLeft: "8px", fontSize: "10px" }}
                        />
                      ) : (
                        <ChevronDown
                          style={{ marginLeft: "8px", fontSize: "10px" }}
                        />
                      ))}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, index) => (
              <TableRow key={index}>
                {columns?.map((column) => (
                  <TableCell
                    key={column.key}
                    style={{
                      minWidth: "150px",
                      maxWidth: "150px",
                      textWrap: "wrap",
                    }}
                  >
                    {column.render
                      ? column.render(item[column.key], item)
                      : item[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      {next && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between", // Center the pagination
            alignItems: "center",
            padding: "20px",
          }}
        >
          <span style={{ marginRight: "1rem" }}>
            {/* Displaying the current range of items */}
            Showing {(currentPage - 1) * pageSize + 1} to{" "}
            {Math.min(currentPage * pageSize, totalItems)} of {totalItems}
          </span>

          {/* MUI Pagination Component */}
          <Pagination
            count={totalPages} // Total number of pages
            page={currentPage} // Current page
            onChange={(event, value) => {
              fetchPageData(value);
            }}
            siblingCount={1}
            boundaryCount={1}
            shape="rounded" // To give rounded corners
            color="primary"
          />
        </div>
      )}
    </div>
  );
}

export default GlobalTable;
