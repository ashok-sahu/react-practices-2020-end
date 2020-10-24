import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
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
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </>
  );
};

export default GlobalFilter;
