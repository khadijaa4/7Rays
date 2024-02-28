import fakeData from "./patientData.json";
import React from "react";
import { useEffect, useState } from "react";
import { useTable } from "react-table";
import useExamsData from "./useExamsData";

function AdminPage() {
  const [data, fetchData] = useExamsData();

    const handleDelete = () => {
      //console.log({PATIENT_ID})
      fetch(`http://localhost:9000/exams/:id`, {method: "DELETE"})
      console.log("Deleted")
    }  
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
          Cell: ({ value }) => (
            <img src="https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg" alt="X-Ray" className="w-16 h-16" />
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
        //   {
        //     Header: "",
        //     accessor: "",
        //     Cell: ({ value }) => (
        //         <a href="/update"{...value}>Update</a>
        //       ),
        // } 
      ],
      []
    );
      
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });
    return ( <div> 
   <a  href="/create-exam">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      Create Exam</button></a>
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
        const pId = 1;
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => (
              <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
            ))}
            {/* will have the id number of patient and exam # so that when it goes to page it pulls that id information */}
            <td><a href="/update/1/1"><button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">Update</button></a></td>
            <td><button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleDelete}>
              Delete</button></td>
          </tr>
        );
      })}
    </tbody>
  </table></div>);
}

export default AdminPage;