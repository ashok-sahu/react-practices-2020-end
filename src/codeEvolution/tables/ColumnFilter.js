import React from "react";

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        Search:{""}
        <input
          value={filterValue || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </>
  );
};

export default ColumnFilter;
