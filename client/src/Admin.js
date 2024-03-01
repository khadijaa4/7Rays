import React from "react";
import { useEffect, useState } from "react";
import { useTable } from "react-table";
import useExamsData from "./useExamsData";
import { useNavigate } from "react-router-dom";


function AdminPage() {
    const [data, fetchData] = useExamsData();
    const navigate = useNavigate()


    const handleDelete = (_id) => {
    
      //gets the id of the current row and calls the delete method in the api 
      fetch(`http://localhost:9000/exams/${_id}`, {method: "DELETE"}).then(() => {
        //console.log("Deleted");
        
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting exam:", error);
      });
    };

    const handleUpdate = (PATIENT_ID, exam_Id) => {
      navigate(`/update?pid=${PATIENT_ID}&eid=${exam_Id}`);
      
    
    //   fetch(`http://localhost:9000/exams/${_id}`, {method: ""}).then(() => {
    //       console.log("Deleted");
      
    //     fetchData();
    //     })
    //     .catch((error) => {
    //     console.error("Error deleting exam:", error);
    // });
};

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
            <td>
              <button onClick={() => handleUpdate(row.original.PATIENT_ID, row.original.exam_Id)}
                  class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                    Update
                    </button></td>
            <td><button 
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => handleDelete(row.original._id)}>
                  Delete
                  </button></td>
          </tr>
        );
      })}
    </tbody>
  </table></div>);
}

export default AdminPage;