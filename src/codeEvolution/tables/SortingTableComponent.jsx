import React, { useMemo } from "react";
import { useTable,useSortBy } from "react-table";
import { COLUMNS } from "./columns";
import MOCKDATA from "./MOCK_DATA.json";
import "./table.css";

const SortingTableComponent = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCKDATA, []);

  console.log(columns, data);

  const tableInstance = useTable({
    columns: columns,
    data: data,
  },useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>{column.isSorted ? (column.isSortedDesc?'⬆':'⬇') :''}</span>
                </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>
                    {console.log(cell)}
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((footergroup) => (
          <tr {...footergroup.getFooterGroupProps()}>
            {footergroup.headers.map((column) => (
              <td {...column.getFooterProps()}>{column.render("Footer")}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};

export default SortingTableComponent;
