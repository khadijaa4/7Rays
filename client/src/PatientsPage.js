import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import mockPatientsData from "./mockPatientsData"; // Import your fake data

const PatientsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Define columns for react-table
  const columns = useMemo(() => [
    {
      Header: "Exam ID",
      accessor: "examId", // Accessor is the "key" in the data
    },
    {
      Header: "Image",
      accessor: "image",
      // Cell method will render the content of each cell
      Cell: ({ value }) => (
        <img src={value} alt="X-Ray" className="w-16 h-16" />
      ),
    },
    {
      Header: "Key Findings",
      accessor: "findings",
    },
    {
      Header: "Brixia Score",
      accessor: "brixiaScore",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Sex",
      accessor: "sex",
    },
    {
      Header: "BMI",
      accessor: "bmi",
    },
    {
      Header: "Zip Code",
      accessor: "zipCode",
    },
  ], []);

  // Create a react-table instance with our columns and data
  const tableInstance = useTable({
    columns,
    data: mockPatientsData[0].exams,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold">Patient Details</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
          placeholder="Search..."
        />
      </div>
      <div className="overflow-x-auto">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200 mt-6"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100">
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-2 whitespace-nowrap"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientsPage;