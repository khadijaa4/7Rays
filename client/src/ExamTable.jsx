import { useEffect, useState } from "react";
import React from "react";
import { useTable } from "react-table";
import useExamsData from "./useExamsData";


function ExamTable() {
    //hook that calls the fetch statement
    const [data, fetchData] = useExamsData();
    

    const columns = React.useMemo(
      () => [
        {
          Header: "Patient ID",
          accessor: "PATIENT_ID",
        },
        {
          Header: "Exam ID",
          accessor: "exam_Id",
        },
        {
          Header: "Image",
          accessor: "png_filename",
        },
        {
          Header: "Age",
          accessor: "AGE",
        },
        {
          Header: "Gender",
          accessor: "SEX",
        },
        {
          Header: "Zip Code",
          accessor: "ZIP",
        },
        {
            Header: "BMI",
            accessor: "LATEST_BMI",
          },
          {
            Header: "Mortality",
            accessor: "MORTALITY",
          },  
      ],
      []
    );
  
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });
    return ( <div> <table {...getTableProps()}>
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()}>
              {column.render("Header")}
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
            {row.cells.map((cell) => (
              <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  </table></div>);
}

export default ExamTable;