import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import EditEmployee from "./EditComponents/EditEmployee";

const EmployeesManagement = () => {
  const employees = useSelector((state) => state.employees);
  const [EmployeeForEdit, setEmployeeForEdit] = useState();

  const employeesUrl = import.meta.env.VITE_API_BACKEND_URL + "employees";

  const dispatch = useDispatch();

  const DeleteEmployee = async (employeeId) => {
    try {
      const result = await axios.delete(`${employeesUrl}/${employeeId}`);
      dispatch({
        type: "DELETEEMPLOYEE",
        payload: employeeId,
      });
      alert("Employee deleted");
    } catch (error) {
      console.log(error);
    }
  };

  const [colDefs, setColDefs] = useState([
    {
      field: "id",
      headerName: "Id",
      flex: 0.3,
    },
    { field: "name", headerName: "Name", flex: 0.7 },
    { field: "email", headerName: "Email", tooltipField: "email", flex: 0.7 },
    {
      field: "jobTitle",
      headerName: "Job Title",
      tooltipField: "jobTitle",
      flex: 0.7,
    },
    {
      field: "salary",
      headerName: "Salary",
      tooltipField: "salary",
      flex: 0.7,
    },
    {
      field: "hireDate",
      headerName: "Hire Date",
      tooltipField: "hireDate",
      flex: 0.7,
    },
    {
      field: "dateOfBirth",
      headerName: "Date Of Birth",
      tooltipField: "dateOfBirth",
      flex: 0.7,
    },
    {
      field: "Edit Employee",
      cellRenderer: (params) => (
        <div>
          <button
            className="action-buttons"
            onClick={() => setEmployeeForEdit({ ...params.data })}
          >
            Edit Employee
          </button>
        </div>
      ),
      flex: 0.5,
      floatingFilter: false,
    },
    {
      field: "Delete Employee",
      cellRenderer: (params) => (
        <div>
          <button
            className="action-buttons"
            onClick={() => DeleteEmployee(params.data.id)}
          >
            Delete Employee
          </button>
        </div>
      ),
      flex: 0.5,
      floatingFilter: false,
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
      resizable: true,
    };
  }, []);

  return (
    <>
      <div className="ag-theme-quartz" style={{ height: "100%" }}>
        <AgGridReact
          rowData={employees}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowHeight={50}
          pagination={true}
          animateRows={true}
          tooltipShowDelay={0}
        />
      </div>
      {EmployeeForEdit && (
        <EditEmployee
          employee={EmployeeForEdit}
          edited={() => setEmployeeForEdit()}
        />
      )}
    </>
  );
};

export default EmployeesManagement;
