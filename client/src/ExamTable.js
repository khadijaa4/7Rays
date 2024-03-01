import { useEffect, useState } from "react";
import React from "react";
import { useTable } from "react-table";
import useExamsData from "./useExamsData";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";


function ExamTable() {
    //hook that calls the fetch statement
    const [data, fetchData] = useExamsData();
    const [results, setResults] = useState([]);
    const columns = React.useMemo(
      () => [
        {
          Header: "Patient ID",
          accessor: "PATIENT_ID",
          Cell: ({ row }) => (
            <a href="/patients">{row.original.PATIENT_ID}</a>
            )
        },
        {
          Header: "Exam ID",
          accessor: "exam_Id",
          Cell: ({ row }) => (
            <a href="/ViewPage">{row.original.exam_Id}</a>
            )
        },
        {
          Header: "Image",
          accessor: "png_filename",
          Cell: ({ value }) => (
            <img src="https://www.itnonline.com/sites/default/files/Chest.jpeg" alt="X-Ray" className="w-16 h-16" />
          ),
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
    return ( 
    <div> 
       <SearchBar setResults={setResults} results={results}/>
      <SearchResultsList results={results}/>
      <table {...getTableProps()}>
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