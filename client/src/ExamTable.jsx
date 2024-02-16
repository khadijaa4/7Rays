import fakeData from "./MOCK_DATA.json";
import * as React from "react";
import { useTable } from "react-table";

function ExamTable() {
    const data = React.useMemo(() => fakeData, []);
    const columns = React.useMemo(
      () => [
        {
          Header: "Patient ID",
          accessor: "patient_id",
        },
        {
          Header: "Exam ID",
          accessor: "exam_id",
        },
        {
          Header: "Image",
          accessor: "png_filename",
        },
        {
          Header: "Age",
          accessor: "age",
        },
        {
          Header: "Gender",
          accessor: "gender",
        },
        {
          Header: "Zip Code",
          accessor: "zip",
        },
        {
            Header: "BMI",
            accessor: "latest_bmi",
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